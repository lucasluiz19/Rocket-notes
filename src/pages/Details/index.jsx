import {Container, Links, Content} from "./style"
import { Button } from "../../components/button"
import { Header} from "../../components/header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/buttonText"

export function Details(){
  return(
 //no return so podemos ter 1 elemento por isso podemos usar o fragment <> </> ou uma div    
    <Container>  
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir nota"/>
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, minus. Nam quisquam nisi doloribus ab harum quibusdam veritatis cum totam aliquid ex quam similique perspiciatis adipisci animi aperiam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quasi ducimus, ipsum amet aspernatur fugiat id mollitia voluptate quo excepturi veniam, est culpa. Beatae eaque expedita quisquam repellendus odit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex sequi in, quibusdam aliquam optio! Modi tenetur quibusdam blanditiis, corrupti aliquid iure molestiae tempore commodi repudiandae voluptates, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit perspiciatis sunt, sapiente amet dignissimos quaerat vitae temporibus illo quas impedit minus ab eum in numquam. </p>  
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat.com</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="voltar" />

        </Content>
      </main>

    </Container>
  )
}