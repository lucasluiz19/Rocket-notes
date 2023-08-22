import {Container, Form} from "./style"
import {FiArrowLeft, FiUser, FiMail, FiLock}from "react-icons/fi"

import {Input} from "../../components/input"
import {Button} from "../../components/button"


export function Profile() {
    return(
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft/>
                </a>
            </header>
            <Form>
                <Input
                    placeholder="nome"
                    type="text"
                    icon={FiUser}                
                />


                <Input
                    placeholder="E-mail"
                    type="e-mail"
                    icon={FiMail}                
                />

                <Input
                    placeholder="senha"
                    type="password"
                    icon={FiLock}                
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}                
                />

                <Form title="salvar"/>    

            </Form>

        </Container>
    );

}