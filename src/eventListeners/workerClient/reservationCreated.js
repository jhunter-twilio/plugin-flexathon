//import { Actions } from "@twilio/flex-ui";

export function registerReservationCreatedExtensions(manager) {
  manager.workerClient.on("reservationCreated", handleReservationTask);
}

function handleReservationTask(reservation) {
  // Add logic here for any auto behavior when reservation is received
  if (false) {

  }
}
