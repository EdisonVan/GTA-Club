import React from "react";
import { Route, Link } from "react-router-dom";
import { Layout, ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
// import logo from "./logo.svg";
import Index from "./index";
import "./App.less";

const { Header, Content, Footer } = Layout;

const App = ({ match }: any) => {
  console.log(match.url);
  // let defaultKey = match.url.replace("/", "") || "home";
  // match.url当作当前hash，去掉hash之前的/,如果为空，默认指定为home
  return (
    <ConfigProvider locale={zhCN}>
      <Layout>
        <Header>
          {/* 公共头部   */}
          Header
        </Header>
        <Content>
          <div className="content">
            <Route path="/" exact component={Index} />
          </div>
        </Content>
        <Footer className="footer">GTA Club@2020</Footer>
      </Layout>
    </ConfigProvider>
  );
};
export default App;
