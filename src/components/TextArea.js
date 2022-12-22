import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../redux/textSlice";
import { marked } from "marked";

function TextArea() {
  const { textCurrent, showHelp } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const parsedText = marked(textCurrent);
  const processedText = { __html: parsedText };
  console.log(processedText);
  return (
    <div className="text-area">
      <textarea
        readOnly={showHelp}
        onChange={(e) => dispatch(changeText(e.target.value))}
        value={textCurrent}
      />
      <div dangerouslySetInnerHTML={processedText}></div>
    </div>
  );
}

export default TextArea;
