import React, { useState, useEffect } from "react";
import { Button } from "antd";

interface Greeting {
  name: string;
  firstName: string;
  lastName: string;
}

const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0); // 使用useState定义状态，初始状态设为0
  const [text, setText] = useState<string | null>(null);
  useEffect(() => {
    // useEffect监听点击次数
    if (count > 5) {
      setText("Rest");
    }
  }, [count]); // 加入[count]参数，表示只有在count改变时，逻辑才执行
  return (
    <>
      <p>
        你点击了 {count} 次 {text}
      </p>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Hello {props.name}
      </Button>
    </>
  );
};

HelloHooks.defaultProps = {
  firstName: "",
  lastName: ""
};
export default HelloHooks;