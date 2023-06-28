import styled,{ keyframes} from 'styled-components';

const turn = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 2px solid #1555B6;
  border-bottom-color: transparent;
  animation: ${turn} 1s linear infinite;
`