import { Actions } from "@twilio/flex-ui";

export function registerAcceptTaskExtensions() {

  Actions.replaceAction("AcceptTask", (payload, original) => {
    console.log("ACCEPT TASK: ", payload);

    let { attributes } = payload.task;

    attributes.conversations = {
      conversation_attribute_1: payload.task.channelType
    }

    payload.task.setAttributes(attributes);

    original(payload);
  });
}
