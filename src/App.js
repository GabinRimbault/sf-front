import React from "react";
import "./lib/scss/all.css";
import {Cards} from "./lib";
import GptCards from "./lib/components/modules/General/Cards/GptCards";

function App() {

  return (
    <>
      <GptCards>
        <Cards>
          <Cards.Header>
            Titre
          </Cards.Header>
          <Cards.Body>
            Corps
          </Cards.Body>
          <Cards.Footer>
            Pied
          </Cards.Footer>
        </Cards>

      </GptCards>
    </>
  )
}

export default App;