import {Code, Content, Title} from "../../../../lib";

export default function Locally() {
  return (
    <>
      <Title lvl={"h2"} classTitle={"type2 heading"}>
        Run Locallly
      </Title>
      <Content>Clone the project</Content>
      <Code classCode={"mt-2"}>
        git clone https://github.com/GabinRimbault/sf-front.git
      </Code>
      <Content classContent={"mt-4"}>
        Go to the project directory
      </Content>
      <Code classCode={"mt-2"}>
        cd sf-front
      </Code>
      <Content classContent={"mt-4"}>
        Install dependencies
      </Content>
      <Code classCode={"mt-2"}>
        npm install
      </Code>
      <Content classContent={"mt-4"}>
        Start the server
      </Content>
      <Code classCode={"mt-2"}>
        npm run start
      </Code>
    </>
  )
}