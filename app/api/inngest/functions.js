import { inngest } from "@/lib/inngest/client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" }, // unique ID
  { event: "test/hello.world" }, // event name that triggers this function
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data?.email ?? "World"}!` };
  }
);
