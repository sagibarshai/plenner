import axios from 'axios'

export async function getInvitation() {
    const res = await axios.get('http://localhost:8000/invitations/1', {
        headers: {
            'event_id': 1
        }
    })
    return res.data
}

export const convertTimeToAmPm = (time) => {
    time = time.split(':')
    let hours = time[0]
    let minutes = time[1]
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes} ${ampm}`;
}

export const convertDateToName = (date) => {
    const strDate = date.split('-')
    const dateObj = new Date();
    dateObj.setMonth(strDate[1] - 1)
    const realDate = (dateObj.toLocaleString("default", { month: "long" }))
    return (realDate + ' ' + strDate[2] + ',' + strDate[0])
}

