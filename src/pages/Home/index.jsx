import{FiPlus, FiSearch} from"react-icons/fi"
import { Container, Brand, Menu, Search, Content, Newnote } from "./style";
import { Header} from "../../components/header"
import { ButtonText } from "../../components/buttonText"
import { Input} from "../../components/input"


export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>
        
            <Menu>
                <li>
                    <ButtonText title="Todos" isActive/>
                </li>
                <li>
                    <ButtonText title="React"/> 
                </li>
                <li>
                    <ButtonText title="Nodejs"/>    
                </li>
            </Menu>

            <Search>
                <Input placeholder="pesquisar pelo título " icon={FiSearch}/>
 
            </Search>

            <Content>

            </Content>

            <Newnote>
                <FiPlus/>
                Criar Nota
            </Newnote>

        </Container>
    )
}