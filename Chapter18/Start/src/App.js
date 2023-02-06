import React from "react";
import { MenuButtons } from "./MenuButtons";
import { ScriptName } from "./ScriptName";
import { Drawing } from "./Drawing";
import { StatementHistory } from "./StatementHistory";
import { Prompt } from "./Prompt";
import { PromptError } from "./PromptError";

export const App = () => (
  <div id="mainWindow">
    <menu>
      <ScriptName />
      <MenuButtons />
    </menu>
    <div id="drawing">
      <Drawing />
    </div>
    <div id="commands">
      <table>
        <StatementHistory />
        <Prompt />
        <PromptError />
      </table>
    </div>
  </div>
);
