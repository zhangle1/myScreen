import classNames from "classnames";



export interface EditLayoutProps {


    
}

interface EditLayoutInterface extends React.FC<EditLayoutProps> {}

const EditLayout: EditLayoutInterface = (props: EditLayoutProps) => {
  const {} = props;

   const classes=classNames('layout','z-layout');





  return <div className={classes}>编辑页面</div>;
};

export default EditLayout;
