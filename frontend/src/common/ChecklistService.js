import axios from 'axios'

export async function getChecklist() {
    const res = await axios.get('http://localhost:8000/checklist', {
        headers: {
            'event_id': 1
        }
    })
    return res.data
}

export async function addToChecklist(body) {
    const res = await axios.post('http://localhost:8000/checklist', body, {
        headers: {
            'event_id': 1
        }
    })
    return res.data
}

export function putChecklist(id, toUpdate) {
    axios.put(`http://localhost:8000/checklist/${id}`, toUpdate, {
        headers: {
            'event_id': 1
        },
    })
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
}
