import React from "react";
import { tuple } from "../_utils/type";
import classNames from "classnames";

function isUnBorderedButtonType(type: ButtonType | undefined) {
  return type === "text" || type === "link";
}

const ButtonTypes = tuple(
  "default",
  "primary",
  "ghost",
  "dashed",
  "link",
  "text"
);
export type ButtonType = typeof ButtonTypes[number];
const ButtonShapes = tuple("default", "circle", "round");
export type ButtonShape = typeof ButtonShapes[number];
const ButtonHTMLTypes = tuple("submit", "button", "reset");
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export interface BaseButtonProps {
  type?: ButtonType;
  children?: React.ReactNode;
}

export type AnchorButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLElement>
  > {}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref
) => {
  const {
    type = "default",
    htmlType = "button" as ButtonProps["htmlType"],
    children,
    ...rest
  } = props;

  const buttonRef = (ref as any) || React.createRef<HTMLElement>();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const { onClick } = props;
    // https://github.com/ant-design/ant-design/issues/30207
    // if (innerLoading || mergedDisabled) {
    //   e.preventDefault();
    //   return;
    // }
    (
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e);
  };

  const classes = classNames("button",
   { [`z-button`]: true ,
    [`z-button-text`]: isUnBorderedButtonType(type)
  }
   );

  const buttonNode = (
    <button

    {...(rest as NativeButtonProps)}
      // className="button-bg"
      type={htmlType}
      className={classes}
      onClick={handleClick}
      ref={buttonRef}
      style={{marginRight:1}}
    >

      {children}
    </button>
  );

  if (isUnBorderedButtonType(type)) {
    return buttonNode;
  }

  return buttonNode;
};

const Button = React.forwardRef<unknown, ButtonProps>(
  InternalButton
) as CompoundedComponent;

export default Button;
