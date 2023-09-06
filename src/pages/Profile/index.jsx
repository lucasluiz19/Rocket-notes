import {Container, Form, Avatar} from "./style"
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera}from "react-icons/fi"

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
                <Avatar>
                    <img 
                        src="https://github.com/lucasluiz19.png"
                        alt="Foto do usuário"
                    />

                    <label htmlFor="Avatar">
                        <FiCamera/>
                        
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>


                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}                
                />


                <Input
                    placeholder="E-mail"
                    type="e-mail"
                    icon={FiMail}                
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}                
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}                
                />

                 <Button title="Salvar"/>   
                <Form/>    

            </Form>

        </Container>
    );

}