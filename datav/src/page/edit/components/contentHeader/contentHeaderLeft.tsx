import { HomeOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Divider, Space, Tooltip } from "antd";
import BarChartIcon from "../../../../icon/BarChartIcon";
import ChartDetailIcon from "../../../../icon/ChartDetailIcon";
import ChartLayerIcon from "../../../../icon/ChartLayerIcon";

export interface ContentHeaderLeftProps {}

interface ContentHeaderLeftInterface extends React.FC<ContentHeaderLeftProps> {}

const ContentHeaderLeft: ContentHeaderLeftInterface = (
  props: ContentHeaderLeftProps
) => {
  const chartBtnLIst = [
    {
      title: "图表组件",
      icon: function () {
        return <BarChartIcon />;
      },
    },
    {
      title: "图层控制",
      icon: function () {
        return <ChartLayerIcon />;
      },
    },
    {
      title: "详情设置",
      icon: function () {
        return <ChartDetailIcon />;
      },
    },
  ];

  const historyLIst = [
    {
      title: "后退",
      disable: true,
      icon: function () {
        return <LeftOutlined />;
      },
    },
    {
      title: "前进",
      disable: false,
      icon: function () {
        return <RightOutlined />;
      },
    },
  ];

  return (
    <Space size="middle">
      <Button type="text" icon={<HomeOutlined />}></Button>
      <Space size="middle">
        {chartBtnLIst.map((src) => (
          <Tooltip placement="bottom" title={src.title}>
            <Button size="small" icon={src.icon()}></Button>
          </Tooltip>
        ))}
      </Space>
      <Divider type="vertical"></Divider>
      <Space size="middle">
        {historyLIst.map((src) => (
          <Tooltip  placement="bottom"
          trigger={src.disable?[]:['hover']}
          title={src.title}>
            <Button
              size="small"
              icon={src.icon()}
              disabled={src.disable}
              
            ></Button>
          </Tooltip>
        ))}
      </Space>
    </Space>
  );
};

export default ContentHeaderLeft;
