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
    const data = await s3.send(getCommand);
    const str = await data.Body.transformToString();
    return str;
  } catch (error) {
    console.error("S3 download error - ", error);
    return <JSON>(error);
  }
}

export async function getFileList(path: string): Promise<Array<JSON>> {
  const command = new ListObjectsV2Command({
    Bucket: S3_BUCKET_NAME,
    Prefix: `llm-outputs/2`,
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
  const data = await getFileList("");
  const mostRecentDate = data.Contents.slice(2).map((v) => v.Key.split("/")[1].split("-")[0]).reduce((max, c) => c > max ? c : max);
  return {summaries: data.Contents.filter((v) => v.Key.includes(mostRecentDate)).map((v) => [parseInputFile(loadFromS3(v.Key.replace("output", "input"))), loadFromS3(v.Key)])}
};

const parseInputFile = async (file: string) => {
  let f = await file;
  const home_team = f.split("\n")[1].split(": ")[1];
  const away_team = f.split("\n")[3].split(": ")[1];
  const box_score = f.split("\n").slice(7, 10).map((l) => l.split(","));
  return {
    home_team: home_team,
    away_team: away_team,
    box_score: box_score,
  };
};
