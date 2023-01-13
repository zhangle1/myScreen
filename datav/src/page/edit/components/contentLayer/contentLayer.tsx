import { Space, Tree } from "antd";
import DynamicIcon from "../../../../icon/DynamicSvgIcon";
import "./style/contentLayer.less";
import styled from "styled-components/macro";
import { useState } from "react";

export interface ContentLayerProps {}

interface ContentLayerInterface extends React.FC<ContentLayerProps> {}

const ContentLayer: ContentLayerInterface = (props: ContentLayerProps) => {
  const [tree, setTreeData] = useState([
    {
      key: "111",
      title: "测试节点",
      children: [
        {
          key: "222",
          title: "测试子节点",
          children: [],
          titleRender:(nodeData)=>{
            return (<div>测试一下</div>)
          }
        },
      ],
    },
    {
      key: "333",
      title: "测试子节点2",
      children: [],
    },
  ]);

  return (
    <div className="z-content-layers">
      <div className="z-content-layers-top-container">
        <Space>
          <span>图层</span>
          <DynamicIcon type="layer"></DynamicIcon>
        </Space>
      </div>

      <LayerColumn>
        <AntTreeWrapper
          blockNode
          draggable
          showIcon
          treeData={tree}
          defaultSelectedKeys={["111"]}
        ></AntTreeWrapper>
      </LayerColumn>
      {/* <div className="z-content-layers-content-container">
    
      
        </div> */}
    </div>
  );
};

export default ContentLayer;

export const LayerColumn = styled.div<{}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: start;
  align-items: center;
`;

export const AntTreeWrapper = styled(Tree)`
  &.ant-tree {
    width: 100%;

    .ant-tree-treenode-selected {
      background-color: #c5ebd0;

      .ant-tree-switcher {
        color: ${(p) => p.theme.primary};
      }

      &.ant-tree-treenode {
        .ant-tree-node-content-wrapper {
          .ant-tree-iconEle {
            color: ${(p) => p.theme.primary};
          }
        }
      }
    }
  }
`;
