import { Text, Link, VStack } from "@chakra-ui/react";
const ViewCid = ({ cid }) => {
  return (
    <>
      <VStack textAlign="center" spacing={1}>
        <Text w={72}>{cid}</Text>
        <Text pb={4} fontSize="xs">
          note: we do not pin. ensure ya store it somewhere for long-term use!
        </Text>
        <Text pb={4} fontWeight="semibold">
          {" "}
          OR{" "}
        </Text>
        <Text>
          View on{" "}
          <Link
            color="blue.500"
            textDecor="underline"
            onClick={() => window.open(`https://ipfs.io/ipfs/${cid}`)}
          >
            IPFS
          </Link>
        </Text>
      </VStack>
    </>
  );
};

export default ViewCid;
