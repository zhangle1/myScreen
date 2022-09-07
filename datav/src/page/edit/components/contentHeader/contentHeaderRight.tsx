import { Button, Space,  } from "antd";
import BarChartIcon from "../../../../icon/BarChartIcon";
import ChartLayerIcon from "../../../../icon/ChartLayerIcon";
import PreviewIcon from "../../../../icon/PreviewIcon";

export interface ContentHeaderRightProps {}

interface ContentHeaderRightInterface extends React.FC<ContentHeaderRightProps> {}

const ContentHeaderRight: ContentHeaderRightInterface = (
  props: ContentHeaderRightProps
) => {
  const chartBtnLIst = [
    {
      title: "预览",
      icon: function () {
        return <PreviewIcon />;
      },
    },
    {
      title: "发布",
      icon: function () {
        return <ChartLayerIcon />;
      },
    },
  
  ];

 
  return (
      <Space size="middle">
        {chartBtnLIst.map((src) => (
            <Button size="middle" icon={src.icon()}>{src.title}</Button>
        ))}
      </Space>
  
  );
};

export default ContentHeaderRight;
