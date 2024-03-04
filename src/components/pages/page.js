import React, { useState, useEffect } from "react";
import Card from "../card/card";
import { Box } from "@chakra-ui/react";
import Skeleton from "../skeleton/skeleton";
const Page = () => {
  const [data, setData] = useState(null);
  // console.log(age);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("error", error);
      }
    };
    setTimeout(() => {
      getData();
    }, 4000);
  }, []);

  console.log(data);

  return (
    <div>
      <Box
        display={"flex"}
        gap={"20px"}
        flexWrap={"wrap"}
        paddingLeft={"400px"}
      >
        {data ? (
          data?.map((item, index) => {
            return <Card key={index} item={item} />;
          })
        ) : (
          <Skeleton />
        )}
      </Box>
    </div>
  );
};

export default Page;
