import { useState } from 'react';
import { toast } from 'react-toastify';
import { FiArrowRightCircle } from 'react-icons/fi';
import openAi from '../../services/openAi';
import translator from '../../services/translator';

import LoadingText from '../../components/LoadingText';
import { ContainerInput, ContainerConversation } from './styled';

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [waitOpenAi, setWaitOpenAi] = useState(false);
  const [conversation, setConversation] = useState([]);

  const askOpenAi = async () => {
    const openAiInput = await openAi(userInput);
    const openAiInputMessage = openAiInput.message.content;
    return openAiInputMessage;
  };

  const handleSubmitUserInputKey = async (e) => {
    if (e.keyCode !== 13) return;
    const input = document.querySelector('#user-input');
    input.focus();
    if (!userInput.trim()) return;
    const newConversation = [...conversation];
    newConversation.push(userInput);
    setConversation([...newConversation]);
    setUserInput('');
    try {
      setWaitOpenAi(true);
      const openAiConversation = await askOpenAi();
      const translatedManyTimes = await translator(openAiConversation);
      newConversation.push(translatedManyTimes);
      setConversation([...newConversation]);
      setWaitOpenAi(false);
    } catch (err) {
      if (String(err).match(/Error: 429/i)) {
        toast.info('Muitas requisições, tenta enviar com uma baixa frequencia');
      }
    }
  };

  const handleSubmitUserInput = async () => {
    const input = document.querySelector('#user-input');
    input.focus();
    if (!userInput.trim()) return;
    const newConversation = [...conversation];
    newConversation.push(userInput);
    setConversation([...newConversation]);
    setUserInput('');
    try {
      setWaitOpenAi(true);
      const openAiConversation = await askOpenAi();
      const translatedManyTimes = await translator(openAiConversation);
      newConversation.push(translatedManyTimes);
      setConversation([...newConversation]);
      setWaitOpenAi(false);
    } catch (err) {
      if (String(err).match(/Error: 429/i)) {
        toast.info('Muitas requisições, tente enviar com uma baixa frequência');
      }
    }
  };

  const handleChangeInput = (e) => {
    var input = e.target.value;
    if (e.target.value.trim().length > 1000) {
      input = e.target.value.slice(0, 1000);
      toast.error('Limite de 1000 caracteres alcançado');
    }
    setUserInput(input);
  };

  return (
    <>
      <ContainerInput>
        <label htmlFor="user-input">Digite: </label>
        <div className="container-input">
          <input
            type="text"
            id="user-input"
            value={userInput}
            onChange={handleChangeInput}
            onKeyDown={handleSubmitUserInputKey}
          />
          <button type="submit" onClick={handleSubmitUserInput}>
            <FiArrowRightCircle />
          </button>
        </div>
      </ContainerInput>
      <ContainerConversation>
        {conversation.length > 0 ? (
          conversation.reverse().map((item, index) => (
            <p className="paragraph-conversation" key={index}>
              - {item}
            </p>
          ))
        ) : (
          <p>Pergunte algo!</p>
        )}
        {waitOpenAi && <LoadingText />}
      </ContainerConversation>
    </>
  );
}
