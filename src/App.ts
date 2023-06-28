import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 8px;
  
  p{
    margin: 10px 0;
    width: min(400px,100%);
    text-align: center;
    font-size: .9rem;
  }
  span{
    position: fixed;
    bottom: 9px;
    font-size: 10px;
  }
`;

export const LogoContainer = styled.div`
  width: min(210px,100%);
  margin-top: 8%;
  img{
    height: 100%;
    width: 100%;
  }
  
`;

export const Title = styled.h1`
  font-size: 3em;
  color: transparent;
  -webkit-text-stroke: 1px #eee;
  letter-spacing: 2px;
  word-break: break-all;
  font-weight: bold;
  line-height: 1.6;
  text-shadow: 5px 2px 2px #1555B6;
`

export const Button = styled.input` 
  width: min(150px,100%);
  height: 50px;
  font-size: 1em;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid #1555B6;
  border-radius: 6px;

  &::file-selector-button{
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    border: none;
    color: #ccc;
    cursor: pointer;
    transition: background .2s;
  }
  &:hover{
    &::file-selector-button{
      background-color: #1555B6;
    } 
  }
`