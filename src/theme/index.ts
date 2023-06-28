import  {createGlobalStyle } from "styled-components" 

export const GlobalTheme = createGlobalStyle<any>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;
    }
    body {
        height: 100vh;
        width: 100%;
    }
    #root{
        height: 100%;
        width: 100%;
    }
`