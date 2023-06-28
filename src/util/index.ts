import {createWorker} from 'tesseract.js';

export const getTextFromImage = async(imageStream:string) =>{
  const worker = await createWorker({
    logger: (log)=>console.log(log.progress)
  })
  await worker.load();
  await worker.loadLanguage()
  await worker.initialize()
  const {data: {text}} = await worker.recognize(imageStream);
  await worker.terminate();
  return text
}