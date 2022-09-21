import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./style/default.less";
import EditLayout from "./page/edit";
import "./App.css";
import "antd/dist/antd.variable.min.css";
import { ConfigProvider } from "antd";
import { store } from './app/store';



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
ConfigProvider.config({
  theme: {
    primaryColor: "#25b864",
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ConfigProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<App></App>} />
          <Route path="/" element={<EditLayout></EditLayout>}></Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
