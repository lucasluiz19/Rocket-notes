import {Header} from '../../components/header';
import {Input} from '../../components/input';
import { Container, Form } from "./style";
import { Textarea } from '../../components/Textarea';

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
                <Textarea placeholder="Observações"/>

                </Form>
            </main>
        </Container>
    )
}