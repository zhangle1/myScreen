import classNames from "classnames";
import "./style/macOsControllBtn.less"


export interface MacOsControllBtnProps {}

interface MacOsControllerBtnInterface extends React.FC<MacOsControllBtnProps> {}

const MacOsControllerBtn: MacOsControllerBtnInterface = (
  props: MacOsControllBtnProps
) => {
  var contorlCloseBtn = classNames("btn", "closeBg");
  var contorlDeleteBtn = classNames("btn", "deleteBg");
  var contorlConfirmBtn = classNames("btn", "confirmBg");

  return (
    <div className="mac-controler-container">
      <div className={contorlDeleteBtn}></div>
      <div className={contorlCloseBtn}></div>
      <div className={contorlConfirmBtn}></div>
    </div>
  );
};
export default MacOsControllerBtn;
