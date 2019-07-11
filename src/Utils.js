import { POST, API_BASE, SESSION_ID } from './Const';

// API Helper
export const postSession = (eventType) => {

  const date = new Date();

  const sessionId = sessionStorage.getItem(SESSION_ID);

  fetch(API_BASE, {
    method: POST,
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "timestamp": date.toLocaleString(),
      "sessionId": sessionId,
      "eventType": eventType
    })
  })
  .then(res => res.json())
  .then(json => {
    console.log(json);
  })
  .catch(function(error) {
    console.log('Error posting session: ' + error);
  });
}