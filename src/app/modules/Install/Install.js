import {Lame, Wrapper} from "../../../lib";
import Locally from "./Locally/Locally";
import Installation from "./Installation/Installation";

export default function Install() {
  return (
    <Lame>
      <Wrapper>
        <Installation />
        <hr/>
        <Locally />
      </Wrapper>
    </Lame>
  )
}