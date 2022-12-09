import { AutoComplete, Input, Menu, Space, Tabs } from "antd";
import classNames from "classnames";
import {
  addWidgets,
  selecteditBoard,
} from "../../../../app/childSlice/stackSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import MacOsControllerBtn from "../../../../components/macOsControllBtn/macOsControllBtn";
import DynamicIcon from "../../../../icon/DynamicSvgIcon";
import { ORIGINAL_TYPE_MAP } from "../../../../util/constants";
import { widgetManagerInstance } from "../../../utils/WidgetManager/widgetManager";
import "./style/contentChart.less";
// import style from "./style/contentChart.less"

export interface ContentChartProps {}

interface ContentChartInterface extends React.FC<ContentChartProps> {}

// interface ChartMainMenuProps{
//     key: string,
//     icon: React.ReactNode,
//     children:
// }

const ContentChart: ContentChartInterface = (props: ContentChartProps) => {
  const dispatch = useAppDispatch();

  var clazz = classNames("z-content-chart");
  var topCLazz = classNames("z-content-chart-top-container");

  var contentClazz = classNames("z-content-chart-content-container");
  var contentMenuContainerClazz = classNames(
    "z-content-chart-content-container-menu-container",
    "ant-menu"
  );
  // var iconClazz = classNames("z-content-chart-content-container-icon-container")
  // var menuClazz = classNames()
  var contentMenuSecondClazz = classNames(
    "z-content-chart-content-container-second-container"
  );
  var contentMenuSecondTabClazz = classNames(
    "z-content-chart-content-container-second-container-tab-container"
  );

  var contentMenuSecondListCLazz = classNames(
    "z-content-chart-content-container-second-container-list-container"
  );

  var contentChartsItemBoxClazz = classNames("z-content-charts-item-box");
  var contorlCloseBtn = classNames("btn", "closeBg");
  var contorlDeleteBtn = classNames("btn", "deleteBg");
  var contorlConfirmBtn = classNames("btn", "confirmBg");
  const menuItems = [
    {
      key: "1",
      icon: <DynamicIcon type="chart"></DynamicIcon>,
      label: "图表",
    },
    {
      key: "2",
      icon: <DynamicIcon type="information"></DynamicIcon>,
      label: "信息",
    },
    {
      key: "3",
      icon: <DynamicIcon type="list"></DynamicIcon>,
      label: "列表",
    },
    {
      key: "4",
      icon: <DynamicIcon type="componment"></DynamicIcon>,
      label: "小组件",
    },
  ];

  const tabItems = [
    {
      label: `所有`,
      key: "1",
      children: <div></div>,
    },
    {
      label: `柱状图`,
      key: "2",
      children: <div></div>,
    },
    {
      label: `折线图`,
      key: "3",
      children: <div></div>,
    },
    {
      label: `饼图`,
      key: "4",
      children: <div></div>,
    },
    {
      label: `散点图`,
      key: "5",
      children: <div></div>,
    },
    {
      label: `地图`,
      key: "6",
      children: <div></div>,
    },
    {
      label: `更多`,
      key: "7",
      children: <div></div>,
    },
  ] as any;

  return (
    <div className={clazz}>
      <div className={topCLazz}>
        <Space>
          <span>组件</span>
          <DynamicIcon type="chart"></DynamicIcon>
        </Space>

        <AutoComplete>
          <Input.Search placeholder="请搜索组件" />
        </AutoComplete>
      </div>
      <div className={contentClazz}>
        <div className={contentMenuContainerClazz}>
          <Menu
            // className={menuClazz}
            defaultSelectedKeys={["1"]}
            items={menuItems}
            inlineCollapsed={true}
          ></Menu>
        </div>

        <div className={contentMenuSecondClazz}>
          <div className={contentMenuSecondTabClazz}>
            <Tabs
              tabPosition="left"
              items={tabItems}
              tabBarStyle={{
                borderRight: 0,
              }}
            ></Tabs>
          </div>

          <div className={contentMenuSecondListCLazz}>
            <div
              className={contentChartsItemBoxClazz}
              onClick={(e) => {
                dispatch(
                  addWidgets([
                    widgetManagerInstance.toolkit(ORIGINAL_TYPE_MAP.chart).create({})
                  ])
                );
              }}
            >
              <div className="list-header">
                <MacOsControllerBtn></MacOsControllerBtn>
                <span className="list-header-text">柱状图</span>
              </div>
              <div className="list-center">
                <img
                  className="list-img"
                  src={require("./../../../../assert/images/chart/charts/bar_x.png")}
                ></img>
              </div>
            </div>

            {/* <div className={contentChartsItemBoxClazz}>
              <div className="list-header">
                <MacOsControllerBtn></MacOsControllerBtn>
                <span className="list-header-text">横向柱状图</span>
              </div>
              <div className="list-center">
                  <img className="list-img" src={require('./../../../../assert/images/chart/charts/bar_x.png')}>
                  </img>
              </div>
            </div>

            <div className={contentChartsItemBoxClazz}>
              <div className="list-header">
                <MacOsControllerBtn></MacOsControllerBtn>
                <span className="list-header-text">胶囊柱图</span>
              </div>
              <div className="list-center">
                  <img className="list-img" src={require('./../../../../assert/images/chart/charts/bar_x.png')}>
                  </img>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentChart;
