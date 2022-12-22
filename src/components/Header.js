import React from "react";
import { useDispatch } from "react-redux";
import { changeHelp } from "../redux/textSlice";

function Header() {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="right">
        <div
          onClick={() => dispatch(changeHelp())}
          className="icon"
        >
          ?
        </div>
      </div>
      <h1 className="header-text">Markdown Previewer</h1>
    </header>
  );
}

export default Header;
