import { POST, API_BASE, SESSION_ID } from './Const';

// API Helper
export const postSession = (eventType, inlink) => {
  fetch(API_BASE, {
    method: POST,
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      session_id: sessionStorage.getItem(SESSION_ID),
      event_type: eventType,
      inlink: inlink
    })
  })
  .then(res => res.json())
  .then(json => {
    // console.log(json);
  })
  .catch(function(error) {
    console.log('Error posting session: ' + error);
  });
}