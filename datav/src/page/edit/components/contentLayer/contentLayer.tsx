import { Space } from "antd";
import DynamicIcon from "../../../../icon/DynamicSvgIcon";
import "./style/contentLayer.less"
import styled from "styled-components/macro";


export interface ContentLayerProps {}

interface ContentLayerInterface extends React.FC<ContentLayerProps> {}

const ContentLayer: ContentLayerInterface = (props: ContentLayerProps) => {
  return <div className="z-content-layers">
        <div className="z-content-layers-top-container">
            <Space>
                <span>图层</span>
                <DynamicIcon type="layer"></DynamicIcon>

            </Space>
        </div>

        <LayerColumn>
          
        </LayerColumn>
        {/* <div className="z-content-layers-content-container">
    
      
        </div> */}
  </div>;
};

export default ContentLayer;


export const LayerColumn = styled.div<{}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: start;
  align-items: center;
`


