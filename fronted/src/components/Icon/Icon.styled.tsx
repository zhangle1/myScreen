import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Component } from "react";

type IconWrapperProps = {
  open?: boolean;
  hover?: React.CSSProperties;
};

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
`;

const stringOrNumberPropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

export const iconPropTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: stringOrNumberPropType,
  width: stringOrNumberPropType,
  height: stringOrNumberPropType,
  scale: stringOrNumberPropType,
  tooltip: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

const MISSING_ICON_NAME = "unknown";

export type IconProps = PropTypes.InferProps<typeof iconPropTypes> & {
  forwardedRef?: any;
};

// class BaseIcon extends Component<IconProps> {
//   static propTypes = iconPropTypes;

//   render() {
//     const { name, className, forwardedRef, ...rest } = this.props;

//     const icon = loadIcon(name) || loadIcon(MISSING_ICON_NAME);

//     return <div></div>;
//   }
// }

const Icon = (props: any) => {
  return loadIcon(props.name);
};
export default Icon;




export function loadIcon(name: string) {
  return ICON_PATHS[name];
}

const ICON_PATHS: Record<string, any> = {
  vscode: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="782"
      width="24"
      height="24"
    >
      <path
        d="
  M746.222933 102.239573l-359.799466 330.820267L185.347413 281.4976 102.2464 329.864533l198.20544
   182.132054-198.20544 182.132053 83.101013 48.510293 201.076054-151.558826 359.799466 330.676906 175.527254-85.251413V187.4944z
   m0 217.57952v384.341334l-255.040853-192.177494z"
        fill="#2196F3"
        p-id="783"
      ></path>
    </svg>
  ),
};
