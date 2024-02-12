import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default async (userInput) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'Sometimes add some funny emotes to your message and be sarcastic, in some way funny',
      },
      {
        role: 'user',
        content: userInput,
      },
    ],
    model: 'gpt-3.5-turbo',
  });

  return completion.choices[0];
};

export const translateToPt = async (textTranslated) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'Translate this text to brazilian portuguese, everything must be in brazilian portuguese',
      },
      {
        role: 'user',
        content: textTranslated,
      },
    ],
    model: 'gpt-3.5-turbo',
  });

  return completion.choices[0];
};
