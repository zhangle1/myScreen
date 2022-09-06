import { Button, Space, Tooltip } from "antd";
import classNames from "classnames";
import "./style/headerLayout.less";
import { HomeOutlined } from "@ant-design/icons";
import BarChartIcon from "../../../icon/BarChartIcon";
import ChartLayerIcon from "../../../icon/ChartLayerIcon";
import ChartDetailIcon from "../../../icon/ChartDetailIcon";
import ContentHeaderLeft from "./contentHeader/contentHeaderLeft";

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

  return (
    <div className={zHeaderClazz}>
      <div className={headerItemLeftClazz}>{renderHeaderLeft()}</div>
      <div className={headerItemCenterClazz}>中间</div>
      <div className={headerItemRightClazz}>右侧</div>
    </div>
  );
};

export default LayoutHeaderPro;
