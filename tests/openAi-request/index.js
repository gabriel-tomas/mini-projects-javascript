const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.API_KEY });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Traduz pra chines: olá, tudo bem?" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();