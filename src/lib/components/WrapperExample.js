import Wrapper from "./base/Wrapper";
import Title from "./base/Title";
import Lame from "./base/Lame";

export default function WrapperExample({children, code, title}) {
  return (
    <>
      <Lame>
        <Title lvl={"h2"} classTitle={"heading type1 center"}>
          {title}
        </Title>
        <Wrapper classWrapper={"wrapper_example"}>
          <div className="content_example">
            {children}
          </div>
          <div className="code_example">
            <pre>
              List of props:<br />
              <code>
                {code}
              </code>
            </pre>
          </div>
        </Wrapper>
      </Lame>
    </>
  );
}