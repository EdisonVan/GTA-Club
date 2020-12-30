import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../components/App';

const Root = () => (
    <BrowserRouter>
        <Route path="/*" component={App}/> 
        {/* 将整个应用定义为一个路由，再通过BrowserRouter包装一下，返回到一个Root */}
    </BrowserRouter>
)

export default Root;