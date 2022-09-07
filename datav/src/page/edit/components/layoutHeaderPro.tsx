import { Button, Input, InputRef, Space, Tooltip, Typography } from "antd";
import classNames from "classnames";
import "./style/headerLayout.less";

import ContentHeaderLeft from "./contentHeader/contentHeaderLeft";
import FishIcon from "../../../icon/FishIcon";
import { useEffect, useRef, useState } from "react";
import ContentHeaderCenter from "./contentHeader/contentHeaderCenter";
import ContentHeaderRight from "./contentHeader/contentHeaderRight";

export interface LayoutHeaderProProps {}

interface LayoutHeaderProInterface extends React.FC<LayoutHeaderProProps> {}

const LayoutHeaderPro: LayoutHeaderProInterface = (
  props: LayoutHeaderProInterface
) => {
  const {} = props;

  const zHeaderClazz = classNames("z-header-box");

  const headerItemLeftClazz = classNames("header-item-left", "header-item");
  const headerItemCenterClazz = classNames("header-item-center", "header-item");
  const headerItemRightClazz = classNames("header-item-center", "header-item");

  const renderHeaderLeft = function () {
    return <ContentHeaderLeft></ContentHeaderLeft>;
  };

  const renderHeaderContent = function useRenderHeaderContent() {
    return <ContentHeaderCenter></ContentHeaderCenter>;
  };

  const renderHeaderRight = function useRenderRightContent() {
    return <ContentHeaderRight></ContentHeaderRight>;
  };

  return (
    <div className={zHeaderClazz}>
      <div className={headerItemLeftClazz}>{renderHeaderLeft()}</div>
      <div className={headerItemCenterClazz}>{renderHeaderContent()}</div>
      <div className={headerItemRightClazz}>{renderHeaderRight()}</div>
    </div>
  );
};

export default LayoutHeaderPro;
