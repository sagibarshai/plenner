export const formSubmitHandler = (
  event,
  sendDataFunction,
  setFormState,
  approveInvitation,
  guests,
  invitationId,
  guestId
) => {
  event.preventDefault();
  let returnedData = {};
  if (!approveInvitation) {
    returnedData = { extra_guests: 0, attending: approveInvitation };
  } else if (!guests && approveInvitation) {
    returnedData = { extra_guests: 0, attending: false };
  } else {
    returnedData = { extra_guests: guests, attending: approveInvitation };
  }
  setFormState(true);
  return sendDataFunction(returnedData, guestId);
};
