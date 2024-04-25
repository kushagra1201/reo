import express from "express";
import { S3 } from "aws-sdk";

const s3 = new S3({
  accessKeyId: "4405b591ba010bfa144f88f6ace9ff7f",
  secretAccessKey:
    "647b0f17978048d593827335e0f276336a46f5ff3ff1ab74268faf87a78e4430",
  endpoint: "https://453a2f7c8bcefb8ef3fac72758256b7f.r2.cloudflarestorage.com",
});

const app = express();

app.get("/*", async (req, res) => {
  const host = req.hostname;

  const id = host.split(".")[0];
  const filePath = req.path;

  const contents = await s3
    .getObject({
      Bucket: "vercel",
      Key: `dist/${id}${filePath}`,
    })
    .promise();

  const type = filePath.endsWith("html")
    ? "text/html"
    : filePath.endsWith("css")
    ? "text/css"
    : "application/javascript";
  res.set("Content-Type", type);

  res.send(contents.Body);
});

app.listen(3001);
