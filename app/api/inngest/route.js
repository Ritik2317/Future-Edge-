import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { helloWorld } from "./functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld, // register your function(s) here
  ],
});
