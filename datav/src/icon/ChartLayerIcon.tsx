import Icon, { HomeOutlined } from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const ChartLayerIconSvg = () => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3384"
    width="16"
    height="16"
  >
    <path
      d="M875.76 751.32H771.98c-18.75 0-33.96-15.2-33.96-33.96s15.2-33.96 33.96-33.96h103.78c8.3 0 15.31-8.21 15.31-17.93V190.71c0-9.72-7.01-17.93-15.31-17.93H301.29c-8.3 0-15.31 8.21-15.31 17.93v115.93c0 18.75-15.2 33.96-33.96 33.96s-33.96-15.2-33.96-33.96V190.71c0-47.34 37.34-85.85 83.23-85.85h574.47c45.89 0 83.23 38.51 83.23 85.85v474.76c0 47.34-37.34 85.85-83.23 85.85z"
      fill="#7F8693"
      p-id="3385"
    ></path>
    <path
      d="M722.71 919.14H148.24c-45.89 0-83.23-38.51-83.23-85.85V358.53c0-47.34 37.34-85.85 83.23-85.85h574.47c45.89 0 83.23 38.51 83.23 85.85v474.76c0 47.34-37.34 85.85-83.23 85.85zM148.24 340.6c-8.3 0-15.31 8.21-15.31 17.93v474.76c0 9.72 7.01 17.93 15.31 17.93h574.47c8.3 0 15.31-8.21 15.31-17.93V358.53c0-9.72-7.01-17.93-15.31-17.93H148.24z"
      fill="#7F8693"
      p-id="3386"
    ></path>
  </svg>
);

const ChartLayerIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ChartLayerIconSvg} {...props} />
);

export default ChartLayerIcon;
