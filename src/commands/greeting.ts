import { Argv } from "yargs";
import { logger } from "../logger";
import { bold, green } from "picocolors";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GreetingArgv {}

export const command = "greeting";
export const describe = "Displays interactive prompts to demonstrate user input handling.";
export const aliases = ["g"];

export function builder(yargs: Argv<GreetingArgv>): Argv {
  return yargs;
}

export async function handler() {
  const username = await logger.prompt("What is your name?", {
    type: "text",
  });

  logger.log(`Hello, ${green(bold(username))}!`);

  const mood = await logger.prompt("How are you?", {
    type: "select",
    options: [
      "👌",
      "👍",
      "👎",
      {
        label: "🤬",
        value: "🤬",
        hint: "take care",
      },
    ],
  });
  logger.log(`${green(bold(username))} ${mood}, Ciao!`);
}
