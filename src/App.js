import React from "react";
import "./lib/scss/all.css";
import {BlocInformation, Cards, Wrapper} from "./lib";
import GptCards from "./lib/components/modules/General/Cards/GptCards";
import Table from "./lib/components/base/Table";

function App() {

  return (
    <Wrapper>
      <Table>
          <Table.Head classHeading={"infos bg-color"}>
              <Table.HeadCell>
                  Product Name
              </Table.HeadCell>
              <Table.HeadCell>
                  Color
              </Table.HeadCell>
              <Table.HeadCell>
                  Category
              </Table.HeadCell>
              <Table.HeadCell>
                  Price
              </Table.HeadCell>
          </Table.Head>
          <Table.Row>
              <Table.Cell>1er contenu</Table.Cell>
              <Table.Cell>2eme contenu</Table.Cell>
              <Table.Cell>1er contenu</Table.Cell>
              <Table.Cell>2eme contenu</Table.Cell>
          </Table.Row>
          <Table.Row>
              <Table.Cell>1er contenu</Table.Cell>
              <Table.Cell>2eme contenu</Table.Cell>
              <Table.Cell>1er contenu</Table.Cell>
              <Table.Cell>2eme contenu</Table.Cell>
          </Table.Row>
      </Table>
    </Wrapper>
  )
}

export default App;