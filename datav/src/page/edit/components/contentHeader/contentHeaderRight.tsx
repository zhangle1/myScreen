import { Button, Dropdown, Menu, Space } from "antd";
import { Component } from "../../../../enum/componentEnum";
import ChartLayerIcon from "../../../../icon/ChartLayerIcon";
import DynamicIcon from "../../../../icon/DynamicSvgIcon";
import PreviewIcon from "../../../../icon/PreviewIcon";

export interface ContentHeaderRightProps {}

interface ContentHeaderRightInterface
  extends React.FC<ContentHeaderRightProps> {}

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

  const userSettingList = [
    {
      title: "语言切换",
      icon: function () {
        return <DynamicIcon type="translate" />;
      },
      type: Component.Dropdown,
      menu: (
        <Menu
          items={[
            {
              key: 1,
              label: "中文",
            },
            {
              key: 2,
              label: "English",
            },
          ]}
        ></Menu>
      ),
    },
    {
      title: "颜色",
      icon: function () {
        return <DynamicIcon type="color" />;
      },
      type: Component.Button,
    },
    {
      title: "主题",
      icon: function () {
        return <DynamicIcon type="theme" />;
      },
      type: Component.Button,
    },
    {
      title: "用户设置",
      icon: function () {
        return <PreviewIcon />;
      },
      type: Component.Dropdown,
      menu: (
        <Menu
          items={[
            {
              key: 1,
              label: "HappyZ",
            },
            {
              type: "divider",
            },
            {
              key: 2,
              label: (
                <Space>
                  <DynamicIcon type="setting"></DynamicIcon>
                  <span>系统设置</span>
                </Space>
              ),
            },
            {
              key: 3,
              label: (
                <Space>
                  <DynamicIcon type="about"></DynamicIcon>
                  <span>关于软件</span>
                </Space>
              ),
            },
            {
              type: "divider",
            },
            {
              key: 4,
              label: (
                <Space>
                  <DynamicIcon type="logout"></DynamicIcon>
                  <span>登出</span>
                </Space>
              ),            },
          ]}
        ></Menu>
      ),
    },
  ];
  const convertUserSettingComponentType = (item: {
    title: string;
    icon: Function;
    type: Component;
    menu?: any;
  }) => {
    var node = <div>未加载成功</div>;

    if (item.type === Component.Dropdown) {
      node = (
        <Dropdown overlay={item.menu}>
          <Button size="large" type="text" icon={item.icon()}></Button>
        </Dropdown>
      );
    } else if (item.type === Component.Button) {
      node = <Button size="large" type="text" icon={item.icon()}></Button>;
    } else {
    }
    return node;
  };

  const renderUserSetting = (
    list: {
      title: string;
      icon: Function;
      type: Component;
      menu?: any;
    }[]
  ) => {
    return (
      <Space size="middle">
        {list.map((src) => convertUserSettingComponentType(src))}
      </Space>
    );
  };

  return (
    <Space size="middle">
      {chartBtnLIst.map((src) => (
        <Button size="middle" icon={src.icon()}>
          {src.title}
        </Button>
      ))}
      {renderUserSetting(userSettingList)}
    </Space>
  );
};

export default ContentHeaderRight;
