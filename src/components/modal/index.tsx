import { Container } from './style';

type ModalProps = {
  visible: (visible:boolean) =>void;
  image: string;
  text: string;
}

export const Modal = ({image,text,visible}:ModalProps) => {
  return(
    <Container>
      <button onClick={()=>visible(false)}>X</button>
      <div>
        <img src={image} alt='Selected_image.png'/>
        <textarea>{text}</textarea>
      </div>
    </Container>
  );
}
