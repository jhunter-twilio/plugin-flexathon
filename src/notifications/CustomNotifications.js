import { Notifications, NotificationType, Manager } from "@twilio/flex-ui";

const manager = Manager.getInstance();

// To avoid collision with other plugin using same notification
if (!manager.strings.backendError) {
  manager.strings.backendError = "Could not complete operation: {{message}}";

  Notifications.registerNotification({
    id: "BackendError",
    content: "backendError",
    type: NotificationType.error
  });
}