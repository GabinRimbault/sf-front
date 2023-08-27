import "./lib/scss/all.css"
import headbar from "./config/headbar";
import {Content, Footer, HeadBar, List} from "./lib";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./app/Home/Home";
import icons from "./config/icons";
import Install from "./app/modules/Install/Install";
import Documentation from "./app/modules/Documentation/Documentation";



function App() {
  return (
    <>
      <BrowserRouter>
        <HeadBar data={headbar} />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/install"} component={Install} />
          <Route exact path={"/documentation"} component={Documentation} />
        </Switch>
        <Footer>
          <Content>Designed & Build by Gabin Rimbault © 2023-present</Content>
          <List data={icons} classList={"social"} type={"ul"} />
        </Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
