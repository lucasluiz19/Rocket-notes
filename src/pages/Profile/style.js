import { styled } from "styled-components";



export const Container= styled.div`

    width: 100%;


    >header{
        width: 100%;
        height:144px;
        margin-bottom:15px;
        
        background:${({theme}) => theme.COLORS.background_900};  

        display:flex;
        align-items:center;

        padding:0 124px;

        svg {
            
            color:${({theme})=>theme.COLORS.GRAY_100};
            font-size:24px;
        }

    }
   
`;

export const Form= styled.form`

    max-width: 340px;
    margin: -84px auto 0;

 

`;




