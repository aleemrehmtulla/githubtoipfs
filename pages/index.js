import Head from "next/head";
import { useState } from "react";
import { Center, VStack, Text, Heading, Image } from "@chakra-ui/react";
import ViewCid from "../components/ViewCid";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [cid, setCid] = useState("");
  return (
    <>
      <Head>
        <title>Safe Repo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center h="100vh" pb={{ base: 12, md: 8 }} px={{ base: 8, md: 48 }}>
        <VStack>
          <VStack pb={4} spacing={2}>
            <Heading>githubtoipfs.xyz</Heading>
            <Text textAlign="center">
              save your repos to ipfs in the click of a button
            </Text>
          </VStack>
          <SearchBar setCid={setCid} />
          {cid ? (
            <ViewCid cid={cid} />
          ) : (
            <>
              <Image rounded="lg" alt="" w="30rem" src="/example.png" />
              <Text textAlign="center" fontSize={{ base: "xs", md: "sm" }}>
                (ensure you copy the .zip link & not the .git)
              </Text>
            </>
          )}
        </VStack>
      </Center>
    </>
  );
}
