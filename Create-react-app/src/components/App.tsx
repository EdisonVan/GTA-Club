import React from "react";
import { Route, Link } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Layout, ConfigProvider } from "antd";
import rootReducer from '../reducers'
import zhCN from "antd/es/locale/zh_CN";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
// import logo from "./logo.svg";
import Index from "./index";
import "./App.less";

const { Header, Content } = Layout;
// , Footer
const store = createStore(rootReducer)
const App = ({ match }: any) => {
  console.log(match.url);
  // let defaultKey = match.url.replace("/", "") || "home";
  // match.url当作当前hash，去掉hash之前的/,如果为空，默认指定为home
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <div>
          <AddTodo />
          <VisibleTodoList />
        </div>
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
          {/* <Footer className="footer"> */}
          <Footer />
          {/* </Footer> */}
        </Layout>
      </ConfigProvider>
    </Provider>
  );
};
export default App;
