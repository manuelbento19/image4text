import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  padding: 0px;
  section {
    width: min(800px, 100%);
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1000px) {
      width: 90%;
      flex-direction: column;
    }
    img {
      width: min(350px, 100%);
      height: 100%;
      border-radius: 4px;
      object-position: center;
      @media (max-width: 1000px) {
        width: 100%;
        height: 400px;
        object-fit: contain;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      flex: 1;
      position: relative;
      textarea {
        background-color: transparent;
        flex: 1;
        line-height: 1.4;
        border: 1px solid transparent;
        border-radius: 4px;
        max-height: 100%;
        padding: 10px;
        overflow-y: auto;
        outline: none;
        transition: border 0.4s ease;
        resize: none;
        &:hover {
          border: 2px solid #1555b6;
        }
        &:focus-within {
          border: 2px solid #1555b6;
        }
        &::-webkit-scrollbar {
          width: 9px;
          background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
          width: 9px;
          background-color: #555;
          border-radius: 3px;
        }
        &::-webkit-scrollbar-button {
          width: 0;
        }
      }
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  border: none;
  outline: none;
  color: #fff;
  background-color: transparent;
  z-index: 3;
  cursor: pointer;
  svg {
    background: transparent;
  }
`;

export const ButtonClipboard = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  gap: 4px;
  background-color: #1555b6;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  padding: 10px 10px;
  right: 18px;
  bottom: 12px;
  cursor: pointer;
  &:hover {
    background: #124da5;
  }
  svg {
    background: transparent;
  }
`;
