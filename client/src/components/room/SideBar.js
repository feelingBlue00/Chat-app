import React from "react";

import { Layout } from "antd";
import Contacts from "../user/Contacts";

export default function SideBar({ contacts }) {
  return <Layout.Sider className="sidebar" theme="light"></Layout.Sider>;
}
