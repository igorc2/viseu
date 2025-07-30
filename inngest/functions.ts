
import { openai, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {

    const codeAgent = createAgent({
      name: "symmarizer",
      system: "You are an expert next.js developer. You write readable, maintainable. You write simple Next.js and React snippets",
      model: openai({ model: "gpt-4o" }),

    });
    const { output } = await codeAgent.run(
      `Write the following snippet ${event.data.value}`
    )

    console.log(output);

    return { output };
  },
);