import { VStack, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const SearchBar = ({ setCid }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const handleSubmit = async () => {
    setIsLoading(true);
    if (
      searchValue.length < 10 ||
      !searchValue.includes("github.com") ||
      !searchValue.includes(".zip")
    ) {
      toast({
        title: "Invalid Link",
        description: "Ensure you copied the .zip link from your repo page. ",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      setIsLoading(false);
      return;
    }

    const data = await fetch(`/api/githubtoipfs`, {
      method: "POST",
      body: searchValue,
    });
    const cid = await data.text();
    const removeQuotes = cid.replace(/"/g, "");
    if (removeQuotes.length > 50) {
      toast({
        title: "Didn't work! Ensure you copied the correct .zip link",
        description: "Something went wrong",
        status: "error",
      });
      setIsLoading(false);
      return;
    }
    setCid(removeQuotes);
    setIsLoading(false);
  };
  return (
    <VStack pb={6} w="full">
      <Input
        bg="white"
        placeholder="https://github.com/aleemrehmtulla/posture/archive/refs/heads/main.zip"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button
        w="full"
        isLoading={isLoading}
        _hover={{
          opacity: 0.8,
        }}
        _active={{
          opacity: 0.8,
          transform: "scale(0.95)",
        }}
        transitionDuration="400ms"
        bg="blue.400"
        color="white"
        onClick={handleSubmit}
      >
        GitHub {"->"} IPFS
      </Button>
    </VStack>
  );
};
export default SearchBar;
