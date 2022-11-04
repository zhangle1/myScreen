import classNames from "classnames";
import LayoutHeaderPro from "./components/layoutHeaderPro";
import "./style/index.less";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import ContentChart from "./components/contentChart/contentChart";
import ContentLayer from "./components/contentLayer/contentLayer";
import ContentConfig from "./components/contentConfig/contentConfig";


export interface EditLayoutProps {}

interface EditLayoutInterface extends React.FC<EditLayoutProps> {}

const EditLayout: EditLayoutInterface = (props: EditLayoutProps) => {
  const {} = props;

  const classes = classNames("layout", "z-layout",'dark');
  const layoutContentClazz= classNames("z-layout-content")


  return (
    <div className="z-chart">
        <Layout  className={classes}>
          <LayoutHeaderPro></LayoutHeaderPro>
          <Content className={layoutContentClazz}>
              <ContentChart>
                
              </ContentChart>
              <ContentLayer></ContentLayer>
              <ContentConfig></ContentConfig>
          </Content>
        </Layout>
    </div>
  );
};

export default EditLayout;
