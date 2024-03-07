import { X, Copy, CopyCheck } from 'lucide-react';
import { Container, ButtonClipboard, CloseButton } from './style';
import { useState, useEffect } from 'react';

type ModalProps = {
  visible: (visible: boolean) => void;
  image: string;
  text: string;
}

export const Modal = ({ image, text, visible }: ModalProps) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) { 
        visible(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 800);
    } catch (error) {
      console.error('Erro ao copiar texto:', error);
    }
  };

  return (
    <Container>
      <CloseButton onClick={() => visible(false)}>
        <X size={24}/>
      </CloseButton>
      <section>
        <img src={image} alt='Selected_image.png' />
        <div>
          <ButtonClipboard onClick={copyToClipboard}>
            {isCopied && 'Copiado!'}{' '}
            {isCopied ? <CopyCheck size={16} /> : <Copy size={16} />}
          </ButtonClipboard>
          <textarea defaultValue={text} />
        </div>
      </section>
    </Container>
  );
};