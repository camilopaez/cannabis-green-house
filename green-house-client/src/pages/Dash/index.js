import React from "react";
import { Layout } from "antd";
import { MappedTable as Table } from "components/Table";

const { Header, Content, Footer } = Layout;

export const Dash = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: "86vh" }}>
          <Table></Table>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Created by Camilo Paez Ríos
      </Footer>
    </Layout>
  );
};
