import axios from 'axios';
export const getEventData = async (guestId, invitationId) => {
  try {
    const {data} = await axios.get(
      `http://localhost:8000/invitations/${invitationId}`,
      {
        headers: {event_id: 1},
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const sendData = async (data, guestId) => {
  const fetchData = async () => {
    axios.put(`http://localhost:8000/guests/${guestId}`, data, {
      headers: {
        event_id: 1,
      },
    });
  };
  try {
    const response = await fetchData();
    return response
  } catch (err) {
    console.error(err);
  }
};
