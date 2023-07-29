import {Container, Links} from "./style"
import { Button } from "../../components/button"
import { Header} from "../../components/header"
import { Section } from "../../components/Section"
export function Details(){
  return(
 //no return so podemos ter 1 elemento por isso podemos usar o fragment ou uma div   
    <Container>  
      
      <Header/>

      <Section title="links úteis">
        <Links>
          <li>
            <a href="#">https://rocketseat.com</a>
          </li>
          <li>
            <a href="#">https://rocketseat.com</a>
          </li>
          
        </Links>
      </Section>

      <Button title="voltar" />

    </Container>
  )
} 