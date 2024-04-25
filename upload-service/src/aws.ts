import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
  accessKeyId: "4405b591ba010bfa144f88f6ace9ff7f",
  secretAccessKey:
    "647b0f17978048d593827335e0f276336a46f5ff3ff1ab74268faf87a78e4430",
  endpoint: "https://453a2f7c8bcefb8ef3fac72758256b7f.r2.cloudflarestorage.com",
});

export const uploadFile = async (fileName: string, localFilePath: string) => {
  const fileContent = fs.readFileSync(localFilePath);
  const response = await s3
    .upload({
      Body: fileContent,
      Bucket: "replikate",
      Key: fileName,
    })
    .promise();

  console.log(response);
};
