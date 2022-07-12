import axios from 'axios';
const URL = 'http://localhost:8000';

export const getInviteInfo = async (eventId) => {
  const headers = { event_id: eventId };
  try {
    const response = await axios.get(`${URL}/invitations/${eventId}`, {
      headers
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const sendInvite = async (eventId, inviteObj) => {
  //the error handling is done at the handle submit to allow the popup
  const headers = { event_id: eventId };
  const json = JSON.stringify(inviteObj);
  console.log("json>>>>>>>>", json)
  const response = await axios.post(`${URL}/invitations/send`, json, {
    headers
  });
  return response.data;
};
