import Prism from "prismjs";
import {useEffect} from "react";
import "../scss/prism.css";
import Tag from "./base/Tag";

const WrapperExample = ({children}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={"wrapper_example"}>
      {children}
    </div>
  );
}

WrapperExample.Component = ({children}) => {
  return (
    <div className={"component_example center"}>
      {children}
    </div>
  );
}

WrapperExample.Code = ({children}) => {

  return (
    <div className={"code_example"}>
      <Tag classTag={"infos bg-color font-small"}>React</Tag>
      <pre>
        <code className={"language-javascript"}>
          {children}
        </code>
      </pre>
    </div>
  );
}

export default WrapperExample;