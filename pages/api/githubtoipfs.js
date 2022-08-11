import { create } from "ipfs-http-client";

export default async function handler(req, res) {
  const repo = await fetch(req.body);
  const repoZip = await repo.arrayBuffer();

  const client = create({
    host: "ipfs.infura.io",
    protocol: "https",
  });

  const { cid } = await client.add(repoZip);
  const response = cid.toString();

  res.status(200).json(response);
}
