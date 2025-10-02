import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "future-edge",
  name: "Future Edge",
  credentials:{
    gemini:{
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
