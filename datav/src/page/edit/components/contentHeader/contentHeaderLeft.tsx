import { HomeOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Divider, Space, Tooltip } from "antd";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { LayoutStoreEnum, selectLayout, toggleContainer } from "../../../../app/slice/layoutSlice";
import BarChartIcon from "../../../../icon/BarChartIcon";
import ChartDetailIcon from "../../../../icon/ChartDetailIcon";
import ChartLayerIcon from "../../../../icon/ChartLayerIcon";

export interface ContentHeaderLeftProps {}

interface ContentHeaderLeftInterface extends React.FC<ContentHeaderLeftProps> {}

const ContentHeaderLeft: ContentHeaderLeftInterface = (
  props: ContentHeaderLeftProps
) => {
  const layout=  useAppSelector(selectLayout)
  const dispatch = useAppDispatch();


  const chartBtnLIst = [
    {
      title: "图表组件",
      icon: function () {
        return <BarChartIcon />;
      },
      active:layout.charts,
      type:LayoutStoreEnum.CHARTS
    },
    {
      title: "图层控制",
      icon: function () {
        return <ChartLayerIcon />;
      },
      active:layout.layers,
      type:LayoutStoreEnum.LAYERS
    },
    {
      title: "详情设置",
      icon: function () {
        return <ChartDetailIcon />;
      },
      active:layout.details,
      type:LayoutStoreEnum.DETAILS
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
      disable: true,
      icon: function () {
        return <RightOutlined />;
      },
    },
  ];

  return (
    <Space size="middle">
      <Button type="text" icon={<HomeOutlined />}></Button>
      <Space size="middle">
        {chartBtnLIst.map((src) => 
        {
          let type='default' as any
          if(src.active){
            type='default' as any
            // type='primary' as any
          }

       return (
          <Tooltip placement="bottom" title={src.title}>
            <Button size="small" icon={src.icon()} type={type}
              onClick={()=>{
                dispatch(toggleContainer({type:src.type}))
              }}
            ></Button>
          </Tooltip>
        )
        })}
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
