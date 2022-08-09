import Head from "next/head";
import { useState } from "react";
import { Center, VStack, Text, Heading, Image, Link } from "@chakra-ui/react";
import ViewCid from "../components/ViewCid";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [cid, setCid] = useState("");
  return (
    <>
      <Head>
        <title>githubtoipfs.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center h="100vh" pb={{ base: 12, md: 8 }} px={{ base: 8, md: 48 }}>
        <VStack>
          <VStack pb={4} spacing={2}>
            <Heading>githubtoipfs.com</Heading>
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
      <Text mt="-20" textAlign="center" fontSize={{ base: "xs", md: "md" }}>
        built w/ fear by{" "}
        <Link href="https://twitter.com/aleemrehmtulla" color="blue.700">
          @aleemrehmtulla
        </Link>
      </Text>
      <Text mt={1} textAlign="center" fontSize={{ base: "8", md: "12" }}>
        and yes. this is{" "}
        <Link
          href="https://github.com/aleemrehmtulla/githubtoipfs"
          color="blue.700"
        >
          opensource
        </Link>
      </Text>
    </>
  );
}
