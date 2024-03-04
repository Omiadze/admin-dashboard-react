import React from "react";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const skeleton = () => {
  return (
    <div>
      <Box padding={"20px"} boxShadow="lg" bg="white" width={"500px"}>
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    </div>
  );
};

export default skeleton;
