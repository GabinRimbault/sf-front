import {Button, Cards, Content, ExposeProduct, HeadProduct, Img, Lame, Title, Wrapper} from "../../lib";
import {BrowserRouter} from "react-router-dom";

export default function Home() {
  return (
    <>
      <Lame>
        <Wrapper>
          <HeadProduct>
            <Title lvl={"h2"} classTitle={"type2 heading"}>SimpleFrameworks</Title>
            <Title lvl={"h3"} classTitle={"type3"}>Frameworks Front-End</Title>
            <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
            <Button href={"#"} classBtn={"btn primary"}>En Savoir plus...</Button>
          </HeadProduct>
        </Wrapper>
      </Lame>
      <Lame classLame={"primary bg-color"}>
        <Wrapper>
          <BrowserRouter>
            <ExposeProduct classExposeProduct={"center"}>
              <Title lvl={"h2"}>Different frameworks</Title>
              <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Content>
              <Button href={"#"} classBtn={"btn secondary center mt-4 btn-rounded"}>CTA</Button>
            </ExposeProduct>
            <div className={"mb-4"} style={{display: "flex"}}>
              <Cards classCards={"white bg-color border"}>
                <Img alt={"#"} src={"https://placehold.co/600x400"} />
                <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
              </Cards>
              <Cards classCards={"white bg-color border"}>
                <Img alt={"#"} src={"https://placehold.co/600x400"} />
                <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
              </Cards>
              <Cards classCards={"white bg-color border"}>
                <Img alt={"#"} src={"https://placehold.co/600x400"} />
                <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
              </Cards>
            </div>
          </BrowserRouter>
        </Wrapper>
      </Lame>
    </>
  )
}