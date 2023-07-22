import {Conteiner} from "./style"
import { Button } from "../../components/button"
export function Details(){
  return(
 //no return so podemos ter 1 elemento por isso podemos usar o fragment ou uma div   
    <Conteiner>  

       <h1>hello word !</h1>
       <span>lucas luiz</span>
       
      <Button title="carregar" loading/>
      <Button title="deletar"/>
      <Button title="executar"/>

    </Conteiner>
  )
} 