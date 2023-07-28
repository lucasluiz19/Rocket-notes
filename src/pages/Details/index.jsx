import {Container} from "./style"
import { Button } from "../../components/button"
import { Header} from "../../components/header"

export function Details(){
  return(
 //no return so podemos ter 1 elemento por isso podemos usar o fragment ou uma div   
    <Container>  
      
      <Header/>
      
      <Button title="voltar" />

    </Container>
  )
} 