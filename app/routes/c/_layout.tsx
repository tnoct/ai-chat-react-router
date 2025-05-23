import React from "react";
import { Outlet } from "react-router";

type Props = {};

const ChatLayout = (props: Props) => {
  return (
    <div>
      This is the chat layout.
      <Outlet />
    </div>
  );
};

export default ChatLayout;
