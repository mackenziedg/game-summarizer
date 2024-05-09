import { S3Client, GetObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import {
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  S3_BUCKET_NAME,
} from "$env/static/private";

const s3 = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  }
});

async function loadFromS3(path: string): Promise<JSON> {
  const getCommand = new GetObjectCommand({
    Bucket: S3_BUCKET_NAME,
    Key: path,
  });
  try {
    const response = await s3.send(getCommand);
    const jsonString = await response.Body.transformToString();
    const data = JSON.parse(jsonString ?? "{}");
    return data;
  } catch (error) {
    console.error("S3 download error - ", error);
    return <JSON>(error);
  }
}

export async function getFileList(): Promise<Array<JSON>> {
  const command = new ListObjectsV2Command({
    Bucket: S3_BUCKET_NAME,
    MaxKeys: 100, // If every team plays a triple-header we still won't have this many keys
    Prefix: "llm-outputs/",
    Type: "json",
  });

  try {
    const data = await s3.send(command);
    return data;
  } catch (error) {
    console.error("S3 download error - ", error);
    return <JSON>(error);
  }
}

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const data = await getFileList();
  const mostRecentDate = data.Contents.slice(2)
    .map((v) => v.Key.toString().split("/")[1].split("-")[0])
    .reduce((max, c) => c > max ? c : max);
  return {
    summaries: data.Contents.filter(
      (v) => v.Key
        .includes(mostRecentDate))
        .map(async (v) => await loadFromS3(v.Key))
  }
};
