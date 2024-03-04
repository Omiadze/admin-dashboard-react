import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";

const card = ({ item }) => {
  return (
    <div>
      <Box>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={item.image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              height={"400px"}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"></Heading>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                {item.price}$
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </div>
  );
};

export default card;
