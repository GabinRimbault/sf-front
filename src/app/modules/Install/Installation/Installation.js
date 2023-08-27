import {Code, Content, Title} from "../../../../lib";

export default function Installation() {
  return (
    <>
      <Title lvl={"h2"} classTitle={"type2 heading"}>
        Install
      </Title>
      <Content>Requis : You need to have the latest version of the SF-Front.</Content>
      <Code classCode={"mt-2"}>
        npm i sf-frontend
      </Code>
    </>
  )
}