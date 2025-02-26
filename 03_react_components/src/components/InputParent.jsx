import Input from "./Input";
import { useState } from "react";
const InputParent = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (newVal) => {
    //更新组件的状态
    setInputValue(newVal);
  };

  return (
    <div>
      <h2>输入的值是：{inputValue}</h2>
      <Input onInputChange={handleInputChange}></Input>
    </div>
  );
};

export default InputParent;
