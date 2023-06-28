import styled from "styled-components";

export const Container = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0,0,0,.5);
    display: grid;
    place-items: center;
    padding: 10px;
    button{
        position: absolute;
        top: 10px;
        right: 20px;
        border: none;
        outline: none;
        background: none;
        z-index: 3;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 100;
        cursor: pointer;
    }
    div{
        background-color: #ccc;
        width: min(800px,100%);
        display: flex;
        flex-wrap: wrap;
        img{
            width: min(350px,100%);
            height: 100%;
            border-radius: 4px;
            object-position: center;
        }
        textarea{
            flex: 1;
            line-height: 1.4;
            border: 2px solid #fff;
            display: block;
            max-height: 100%;
            flex: 1;
            padding: 10px;
            overflow-y: auto;
            scroll-behavior: smooth;
            outline: none;
            border: 1px solid #444;
            transition: border .4s ease;
            &:hover{
                border: 2px solid #1555B6;
            }
            &::-webkit-scrollbar{
                width: 9px;
                background-color: transparent;
            }
            &::-webkit-scrollbar-thumb{
                width: 9px;
                background-color: #555;
                border-radius: 3px;
            }
            &::-webkit-scrollbar-button{
                width: 0;
            }
        }
    }
`
