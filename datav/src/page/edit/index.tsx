import classNames from "classnames";
import LayoutHeaderPro from "./components/layoutHeaderPro";
import "./style/index.less";
import { Layout } from "antd";

export interface EditLayoutProps {}

interface EditLayoutInterface extends React.FC<EditLayoutProps> {}

const EditLayout: EditLayoutInterface = (props: EditLayoutProps) => {
  const {} = props;

  const classes = classNames("layout", "z-layout",'dark');

  return (
    <div className="z-chart">
        <Layout  className={classes}>
          <LayoutHeaderPro></LayoutHeaderPro>
        </Layout>
    </div>
  );
};

export default EditLayout;
