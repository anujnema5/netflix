import { OPEN_AI_KEY } from "./constant";
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: OPEN_AI_KEY, // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true
});

export default openai