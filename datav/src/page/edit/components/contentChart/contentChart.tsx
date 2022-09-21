import { AutoComplete, Input, Menu, Space } from "antd";
import classNames from "classnames";
import DynamicIcon from "../../../../icon/DynamicSvgIcon";
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
  var clazz = classNames("z-content-chart");

  var topCLazz = classNames("z-content-chart-top-container");

  var contentClazz = classNames("z-content-chart-content-container");
  var contentMenuContainerClazz= classNames("z-content-chart-content-container-menu-container",'ant-menu')
  // var iconClazz = classNames("z-content-chart-content-container-icon-container")
  // var menuClazz = classNames()

  const menuItems = [
    {
      key: "1",
      icon: (
          <DynamicIcon type="chart"></DynamicIcon>
      ),
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

  return (
    <div className={clazz} >
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
      </div>
    </div>
  );
};

export default ContentChart;
