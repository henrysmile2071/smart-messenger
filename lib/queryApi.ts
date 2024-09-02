import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import openai from "./chatgpt";
const query = async (messages: ChatCompletionMessageParam[], model: string) => {
  const res = await openai.chat.completions.create({
    messages,
    model,
  }).then(res => 
    res.choices[0].message.content
).catch((err) => `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
  );

  return res;
}

export default query