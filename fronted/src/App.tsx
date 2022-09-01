import React from "react";
import "./App.css";
import Button from "./components/button/button";
import Dropdown from "./components/dropdown/dropdown";
import Icon from "./components/Icon/Icon.styled";
import { TopMenuContainer } from "./components/TopMenuBar/TopMenuBar.styled";
import {
  TopBarContainerBackground,
  TopBarContainerHeight,
  TopBarContainerWidth,
} from "./const/rootConst";

import "./components/button/style/index.less";

function App() {
  return (
    <div className="App">
      <TopMenuContainer
        width={TopBarContainerWidth}
        height={TopBarContainerHeight}
        background={TopBarContainerBackground}
      >
        <Icon name="vscode"></Icon>
        <Dropdown >
          <Button type="text">文件</Button>
        </Dropdown>
        <Dropdown>
          <Button type="text">编辑</Button>
        </Dropdown>
        <Dropdown>
          <Button type="text">选择</Button>
        </Dropdown>
        <Dropdown>
          <Button type="text">查看</Button>
        </Dropdown>
        <Dropdown>
          <Button type="text">转到</Button>
        </Dropdown>
        <Dropdown>
          <Button type="text">运行</Button>
        </Dropdown>
        <Dropdown>
          <Button type="text">终端</Button>
        </Dropdown>
        <Dropdown>
          <Button type="text">帮助</Button>
        </Dropdown>
      </TopMenuContainer>
    </div>
  );
}

export default App;
