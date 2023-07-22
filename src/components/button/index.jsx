import { Conteiner } from "./style";


export function Button({title, loading= false , ...rest}) {
    return(
    <Conteiner 
        type="button"
        disabled={loading}
        {...rest}
    >
        {loading ? "carregando...": title}
    </Conteiner>
    )
}
