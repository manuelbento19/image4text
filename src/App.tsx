import { useState,useCallback } from 'react'
import { Button, Container, LogoContainer, Title } from './App';
import { getTextFromImage } from './util';
import app_logo from './assets/notes.svg';
import { Spinner } from './components/spinner';
import { Modal } from './components/modal';

function App() {
  const [text, setText] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  const GetPicture = useCallback(async({target}:React.ChangeEvent<HTMLInputElement>)=>{
    setText('')
    if(target.files){
      const file = target.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = async() =>{
        const {result}  = fileReader;
        if(result){
          setImage(result?.toString());
          await GetTextFromPicture(result?.toString())
        }
      }
      fileReader.readAsDataURL(file)
    }
  },[])
  
  const GetTextFromPicture = async(image:string)=>{
    try{
      setLoading(true)
      const textFromImage = await getTextFromImage(image);
      setText(textFromImage)
      setVisible(true)
    }
    catch{
      alert('Não foi possível fazer scanner...')
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <Container>
      <LogoContainer>
        <img src={app_logo} alt="app_logo"/>
      </LogoContainer>
      <Title>Image&rarr;4&larr;Text</Title>
      <p>Conversão de imagem em texto. Extrair textos de imagens para automatizar o processamento de textos.</p>
      {loading ? <Spinner/> : <Button type='file' multiple={false} onChange={GetPicture} /> } 
      {visible && <Modal image={image} text={text} visible={setVisible}/>}
      <span>Designed with 💜 by ManuelBento</span>
    </Container>
  )
}
export default App
