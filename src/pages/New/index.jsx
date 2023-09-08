import {Header} from '../../components/header';
import {Input} from '../../components/input';
import { Textarea } from '../../components/Textarea';
import { Container, Form } from "./style";
import {NoteItem} from "../../components/NoteItem";
import {Section} from "../../components/Section";
import {Button} from "../../components/button"

export function New() {

    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">voltar</a>
                    </header>

                    <Input placeholder="Titulo"/>
                    <Textarea placeholder="Observações "/>

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem isNew placeholder="Novo link"/>

                    </Section>
                    <Section>
                        <div class="tags">
                            <NoteItem value="react"/>
                            <NoteItem isNew value=""/>
                            
                        </div>
                    </Section>
                    
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}