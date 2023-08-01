import {RiShutDownLine} from "react-icons/ri"
import {Container, Profile, Logout } from "./style";

export function Header() {
    return(
        <Container >    
            <Profile>   
                <img 
                    src="https://github.com/lucasluiz19.png"
                    alt="Foto do Usuário"
                />

                <div>
                    <span>Bem vindo, </span>
                    <strong>Lucas Luiz</strong>
                </div>
            </Profile>  

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
}