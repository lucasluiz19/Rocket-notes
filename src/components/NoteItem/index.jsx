import {FiPlus, FiX } from "react-icons/fi"

import {Container} from "./style"

export function NoteItem({isNew, value, onclick, ...rest}){
    return(
        <Container isNew={isNew}>
            <input
                type='text'
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button 
                onclick={onclick} 
                type="button"
                className={isNew? 'button-add' : 'button-delete'}
            >
              { isNew ? <FiPlus /> : <FiX/>}
            </button>
        </Container>
    )

}