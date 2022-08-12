import { create } from "ipfs-http-client";

export default async function handler(req, res) {
  const repo = await fetch(req.body);
  const repoZip = await repo.arrayBuffer();

  const projectId = process.env.NEXT_PUBLIC_INFURA_PROJECTID;
  const projectSecret = process.env.NEXT_PUBLIC_INFURA_KEY;

  const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization:
        "Basic " +
        Buffer.from(projectId + ":" + projectSecret).toString("base64"),
    },
  });

  const { cid } = await client.add(repoZip);
  const response = cid.toString();

  res.status(200).json(response);
}
