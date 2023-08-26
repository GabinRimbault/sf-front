import React from "react";
import "./lib/scss/all.css";
import {
  Content,
  Title,
  Wrapper,
  Tag,
  Breadcrumb,
  Alert,
  NavBar,
  Input,
  Lame,
  Cards,
  BlocInformation,
  ProgressBar, Button, List, Tabs, Img, BlocProduct, Footer, GptTabs, ExposeProduct
} from "./lib";
import {BrowserRouter} from "react-router-dom";
import WrapperExample from "./lib/components/WrapperExample";
import HeadProduct from "./lib/components/modules/Product/HeadProduct/HeadProduct";
import HeadBar from "./lib/components/modules/Navigation/HeadBar/HeadBar";


function App() {


  const dataNav = {
    home: {
      liens: ["/", "Accueil"],
    },
    products: {
      liens: ["/products", "Produits"]
    },
    category: {
      liens: ["/products/category", "Catégorie"]
    }
  };

  const icons = {
    twitter: {
      liens: ["https://twitter.com/rimbault_gabin", <i className="fa-brands fa-square-twitter"></i>]
    },
    linkedin: {
      liens: ["https://www.linkedin.com/in/gabin-rimbault/", <i className="fa-brands fa-linkedin"></i>]
    },
    github: {
      liens: ["https://github.com/GabinRimbault", <i className="fa-brands fa-square-github"></i>]
    },
    mail: {
      liens: ["mailto:gabin.rimbault@icloud.com?subject='Hello ! from Website'", <i className="fa-solid fa-envelope"></i>]
    }
  }

  return (
    <>
      <BrowserRouter>
        <HeadBar>
        </HeadBar>
      </BrowserRouter>
      <Lame>
        <Alert classAlert={"infos bg-color"} name={"infos"} cross={true}>
          Votre demande de confirmation a bien été envoyé.
        </Alert>
        <Wrapper>
          <BrowserRouter>
            <HeadProduct>
              <Title lvl={"h2"} classTitle={"type2 heading"}>Documentation</Title>
              <Title lvl={"h3"} classTitle={"type3"}>Tous savoir sur SF-Front</Title>
              <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
              <Button href={"#"} classBtn={"btn primary"}>En Savoir plus</Button>
            </HeadProduct>
          </BrowserRouter>
        </Wrapper>
      </Lame>
      <Lame classLame={"primary bg-color"}>
        <Wrapper>
          <BrowserRouter>
            <ExposeProduct classExposeProduct={"center"}>
              <Title lvl={"h2"}>Title type 2</Title>
              <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Content>
              <Button href={"#"} classBtn={"btn secondary center mt-4 btn-rounded"}>Secondary</Button>
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
      <Lame classLame={"white bg-color"}>
        <Wrapper>
          <BlocProduct>
            <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
            <Img alt={"#"} classImg={"img_border img_rounded"} src={"https://placehold.co/600x400"} />
          </BlocProduct>
        </Wrapper>
      </Lame>
      <Lame classLame={"primary bg-color"}>
        <Wrapper>
          <GptTabs>
            <Tabs title="Dashboard">
              Votre Dashboard s'affiche ici
            </Tabs>
            <Tabs title="Your Product">
              Vos Produits s'affiche ici
            </Tabs>
            <Tabs title="Your Services">
              Vos Services s'affiche ici
            </Tabs>
            <Tabs title="Contact">
              Vos Contact s'affiche ici
            </Tabs>
          </GptTabs>
        </Wrapper>
      </Lame>
      <WrapperExample title={"Alert"} code={"classAlert(string) name(string) cross(boolean) children(react)"}>
        <Alert classAlert={"success bg-color"} name={"success"} cross={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
        <Alert classAlert={"infos bg-color"} name={"infos"} cross={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
        <Alert classAlert={"critical bg-color"} name={"critical"} cross={false}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
        <Alert classAlert={"warning bg-color"} name={"warning"} cross={false}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
      </WrapperExample>
      <WrapperExample title={"Breadcrumb"} code={"classBread(string) dataNav(List)"}>
        <Breadcrumb dataNav={dataNav}></Breadcrumb>
      </WrapperExample>
      <WrapperExample title={"Bloc Product"} code={"classBlocProduct(string) children(react)"}>
        <BlocProduct>
          <Img alt={"#"} classImg={"img_rounded img_border"} src={"https://placehold.co/600x400"} />
          <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
        </BlocProduct>
        <br/>
        <BlocProduct>
          <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
          <Img alt={"#"} src={"https://placehold.co/600x400"} />
        </BlocProduct>
      </WrapperExample>
      <WrapperExample title={"Button"} code={"classBtn(string) href(string) children(string)"}>
        <BrowserRouter>
          <Button href={"#"} classBtn={"btn primary"}>Primary</Button> <Button href={"#"} classBtn={"btn secondary btn-rounded"}>Secondary</Button> <Button href={"#"} classBtn={"btn success"}>Success</Button> <Button href={"#"} classBtn={"btn infos"}>Infos</Button><br /> <Button href={"#"} classBtn={"btn critical"}>Critical</Button> <Button href={"#"} classBtn={"btn warning"}>Warning</Button>
        </BrowserRouter>
      </WrapperExample>
      <WrapperExample title={"Cards"} code={"classCards(string) children(react)"} >
        <BrowserRouter>
          <div style={{display: "flex"}}>
            <Cards classCards={"white bg-color border"}>
              <Title lvl={"h2"} classTitle={"type2 center"}>Type2</Title>
              <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
              <Button href={"#"} classBtn={"btn center primary"}>Infos</Button>
            </Cards>
            <Cards classCards={"white bg-color border"}>
              <Title lvl={"h2"} classTitle={"type2 center"}>Type2</Title>
              <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
              <Button href={"#"} classBtn={"btn center primary"}>Infos</Button>
            </Cards>
          </div>
          <div style={{display: "flex"}}>
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
      </WrapperExample>
      <WrapperExample title={"Content"} code={"classContent(string) children(react)"}>
        <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ligula arcu, sodales vitae eros eget, gravida efficitur eros. Pellentesque in cursus erat. Nunc blandit et magna a consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ligula elit, gravida quis turpis ac, dapibus tincidunt sapien.</Content>
      </WrapperExample>
      <WrapperExample title={"Footer"} code={"classFooter(string), children(react)"}>
        <Footer>
          <Content>Designed & Build by Gabin Rimbault © 2023-present</Content>
          <List data={icons} classList={"social"} type={"ul"} />
        </Footer>
      </WrapperExample>
      <WrapperExample title={"HeadBar"} code={"classHeadProduct(string) imgTurn(string), children(react)"}>
        <BrowserRouter>
          <HeadBar>
          </HeadBar>
        </BrowserRouter>
        <br/>
      </WrapperExample>
      <WrapperExample title={"HeadProduct"} code={"classHeadProduct(string) imgTurn(string), children(react)"}>
        <BrowserRouter>
          <HeadProduct>
            <Title lvl={"h2"} classTitle={"type2 heading"}>Type2</Title>
            <Title lvl={"h3"} classTitle={"type3"}>Type3</Title>
            <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
            <Button href={"#"} classBtn={"btn primary"}>Primary</Button>
          </HeadProduct>
          <br/>
          <HeadProduct imgTurn={'left'}>
            <Title lvl={"h2"} classTitle={"type2"}>Type2</Title>
            <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
            <Button href={"#"} classBtn={"btn primary"}>Primary</Button>
          </HeadProduct>
        </BrowserRouter>
        <br/>
      </WrapperExample>
      <WrapperExample title={"Img"} code={"classImg(string), src(string), alt(string)"}>
        <Img alt={"#"}  src={"https://placehold.co/200x200"} /> 
        <Img alt={"#"} classImg={"img_border"}  src={"https://placehold.co/200x200"} />
        <Img alt={"#"} classImg={"img_rouded"}  src={"https://placehold.co/200x200"} />
      </WrapperExample>
      <WrapperExample title={"Input"} code={"name(string) type(string) id(string) callback(Func)"}>
        <Input name={"example_text"} type={"text"} id={"example_text_id"} />
        <Input name={"example_check"} type={"checkbox"} id={"example_check_id"} /><br/>
        <Input name={"example_radio"} type={"radio"} id={"example_radio_id"} />
      </WrapperExample>
      <WrapperExample title={"Lame"} code={"classLame(string) children(string)"}>
        <Lame>Example of Lame with width 100%</Lame>
      </WrapperExample>
      <WrapperExample title={"List"} code={"classList(string) type(string) data(Objet||Array)"}>
        <List type={"ul"} data={dataNav} />
      </WrapperExample>
      <WrapperExample title={"NavBar"} code={"classNavBar(string) children(react)"}>
        <NavBar classNavBar={"white bg-color"}>
          <ul className={"left"}>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
          </ul>
        </NavBar>
        <br/>
        <NavBar classNavBar={"white bg-color"}>
          <ul className={"center"}>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
          </ul>
        </NavBar>
        <br/>
        <NavBar classNavBar={"white bg-color"}>
          <ul className={"right"}>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
          </ul>
        </NavBar>
      </WrapperExample>
      <WrapperExample title={"ProgressBar"} code={"color(string) width(string) id(string) height(string) children(string)"}>
        <ProgressBar color={"#d63384"} width={"10%"}>10%</ProgressBar><br/>
        <ProgressBar color={"#0ad6ff"} width={"25%"}>25%</ProgressBar><br/>
        <ProgressBar color={"#FFF01F"} width={"50%"}>50%</ProgressBar><br/>
        <ProgressBar color={"#ab20fd"} width={"75%"}>75%</ProgressBar><br/>
        <ProgressBar color={"#56fca2"} width={"100%"}>100%</ProgressBar>
      </WrapperExample>
      <WrapperExample title={"Tabs"} code={"title(string), children(react)"}>
        <GptTabs>
          <Tabs title="Tab 1 Title">
            <Title lvl={"h1"} classTitle={"type1"}>Type1</Title>
          </Tabs>
          <Tabs title="Tab 2 Title">
            <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ligula arcu, sodales vitae eros eget, gravida efficitur eros. Pellentesque in cursus erat. Nunc blandit et magna a consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ligula elit, gravida quis turpis ac, dapibus tincidunt sapien.</Content>
          </Tabs>
          <Tabs title="Tab 3 Title">
            <List type={"ul"} data={dataNav} />
          </Tabs>
          <Tabs title="Tab 4 Title">
            <NavBar classNavBar={"white bg-color"}>
              <ul className={"right"}>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Products</a></li>
              </ul>
            </NavBar>
          </Tabs>
        </GptTabs>
      </WrapperExample>
      <WrapperExample title={"Tag"} code={"classTag(string) children(react)"}>
        <Tag classTag={"success bg-color"}>Success</Tag> <Tag classTag={"infos bg-color"}>Infos</Tag> <Tag classTag={"warning bg-color"}>Warning</Tag> <Tag classTag={"critical bg-color"}>Critical</Tag>
      </WrapperExample>
      <WrapperExample title={"Title"} code={"classTitle(string) lvl(string) children(react)"}>
        <Title lvl={"h1"} classTitle={"type1"}>Type1</Title>
        <Title lvl={"h2"} classTitle={"type2"}>Type2</Title>
        <Title lvl={"h3"} classTitle={"type3"}>Type3</Title>
      </WrapperExample>
      <WrapperExample title={"Wrapper"} code={"classWrapper(string) children(string)"}>
        <Wrapper>Example of Wrapper</Wrapper>
      </WrapperExample>
    </>
  )
}

export default App;