import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Wrap,
  WrapItem,
  Avatar,
  Editable,
  EditablePreview,
  EditableInput,
  Divider,
} from "@chakra-ui/react";
import Img from "../img/img";
import Search from "../img/search";
import Home from "../navigation/home";
import Profile from "../navigation/profile";
import Notifications from "../navigation/notifications";
import Groups from "../navigation/groups";
import Dashboard from "../navigation/dashboard";
import Settings from "../navigation/settings";

const header = () => {
  return (
    <>
      <Box
        padding={"100px"}
        height={"100vh"}
        boxShadow="2xl"
        p="6"
        rounded="md"
        bg="#ffb4a4"
        display={"flex"}
        flexDirection={"column"}
        position="fixed"
        top="0"
        left="0"
        zIndex="9999"
        width="300px"
      >
        <Wrap paddingTop={"20px"}>
          <WrapItem gap={"10px"}>
            <Avatar name="Dan Abrahmov" src={Img} />
            <div>
              <h1>Daniela Alarcon</h1>
              <p>Mentor</p>
            </div>
          </WrapItem>
        </Wrap>
        <Divider margin={"20px"} />
        <Flex marginTop={"20px"}>
          <Search />
          <Editable
            defaultValue="search"
            border={"1px solid black"}
            padding={"0 50px"}
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Flex>
        <Divider margin={"20px"} />

        <Box display={"flex"} gap={"20px"} flexDirection={"column"}>
          <Text>
            <a href="/">
              {" "}
              <Home />
            </a>
          </Text>

          <Text>
            <a href="/profile">
              {" "}
              <Profile />
            </a>
          </Text>

          <Text>
            <a href="/groups">
              <Groups />{" "}
            </a>
          </Text>

          <Text>
            <a href="/notifications">
              {" "}
              <Notifications />{" "}
            </a>
          </Text>
          <Text>
            <a href="/dashboard">
              <Dashboard />{" "}
            </a>
          </Text>
        </Box>
        <Text>
          <a href="/settings">
            <Settings />
          </a>
        </Text>
      </Box>
    </>
  );
};

export default header;
