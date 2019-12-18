import { Actions } from "@twilio/flex-ui";

export function registerAcceptTaskExtensions() {

  Actions.replaceAction("AcceptTask", (payload, original) => {
    console.log("ACCEPT TASK: ", payload);
    original(payload);
  });
}
