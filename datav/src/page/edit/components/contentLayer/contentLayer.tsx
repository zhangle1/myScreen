import { Space } from "antd";
import DynamicIcon from "../../../../icon/DynamicSvgIcon";
import "./style/contentLayer.less"


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
        <div className="z-content-layers-content-container">
          
      
        </div>
  </div>;
};

export default ContentLayer;
