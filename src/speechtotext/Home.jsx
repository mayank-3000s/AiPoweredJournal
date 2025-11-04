import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='size-full flex items-center justify-center'>
      <div className='h-[20rem] w-[80%] border '>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
      <div className='grid grid-cols-3 gap-18'>
        <button onClick={()=>SpeechRecognition.startListening({continuous:true, language: 'en-IN'})} className='bg-blue-400 hover:bg-red-500'>Start</button>
        <button onClick={SpeechRecognition.stopListening} className='bg-blue-400  hover:bg-red-500'>Stop</button>
        <button onClick={resetTranscript} className='bg-blue-400  hover:bg-red-500'>Reset</button>
      </div>
      <p className='border p-2 m-2 h-[10rem] '>{transcript}</p>
      </div>
    </div>
  );
};

export default Dictaphone;