import { Button, Input, InputRef, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import FishIcon from "../../../../icon/FishIcon";

export interface ContentHeaderCenterProps {}

interface ContentHeaderCenterInterface
  extends React.FC<ContentHeaderCenterProps> {}

const ContentHeaderCenter: ContentHeaderCenterInterface = (
  props: ContentHeaderCenterProps
) => {
    const workAreaInput = useRef<InputRef>(null);
    const [focus, setFocus] = useState(true);
    const [title,setTitle] =useState("我的测试空间")

    const handleFocus = (e: any) => {
      setFocus(false);
      workAreaInput.current?.focus({
        cursor: 'start',
      })
    };
    const handleBlur = (e: any) => {
      setFocus(true);
    };

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
      setTitle(e.target.value)
    }
    useEffect(() => {
      if(focus!==true){
        workAreaInput.current?.focus({
          cursor: "end",
        });
      }
   
    }, [focus]);

    
    return (
        <Space size="small">
          <Button type="text" hidden={!focus} onClick={handleFocus}>
            <Space>
              {" "}
              <FishIcon></FishIcon>
              <div>工作空间- {title}</div>
            </Space>
          </Button>
          <Input
            showCount
            ref={workAreaInput}
            onBlur={handleBlur}
            onChange={handleChange}
            hidden={focus}
            value={title}
            size="middle"
            placeholder="请输入工作空间名称"
            maxLength={16}
          ></Input>
        </Space>
      );

};

export default ContentHeaderCenter;
