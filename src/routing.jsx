import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Rsp from "./pages/rsp/index";

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* 【学習用メモ】<Route path="PATH名" element={コンポーネント名} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/rsp" element={<Rsp />} />
        </Routes>
      </BrowserRouter>
    );
  }
}