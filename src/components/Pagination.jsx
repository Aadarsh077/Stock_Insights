import React from "react";
import { Button, HStack, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxPageButtons = 10;

  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <HStack w={"full"} justifyContent={"center"} p={"8"} spacing={2}>
      <IconButton
        aria-label="Previous"
        icon={<ArrowLeftIcon />}
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        bgColor={"blackAlpha.900"}
        color={"white"}
        _hover={{ bgColor: "blackAlpha.700" }}
      />
      {pageNumbers.map((number) => (
        <Button
          key={number}
          onClick={() => onPageChange(number)}
          bgColor={number === currentPage ? "blue.500" : "blackAlpha.900"}
          color={"white"}
          _hover={{ bgColor: "blackAlpha.700" }}
        >
          {number}
        </Button>
      ))}
      <IconButton
        aria-label="Next"
        icon={<ArrowRightIcon />}
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        bgColor={"blackAlpha.900"}
        color={"white"}
        _hover={{ bgColor: "blackAlpha.700" }}
      />
    </HStack>
  );
};

export default Pagination;
