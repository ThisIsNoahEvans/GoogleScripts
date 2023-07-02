// Send a Google Chat message.

function sendMessage(message) {
    const payload = JSON.stringify({ text: message });
    const options = {
      method: 'POST',
      contentType: 'application/json',
      payload: payload,
    };
    // Insert your webhook from Chat:
    UrlFetchApp.fetch('https://chat.googleapis.com/v1/spaces/SPACE_ID/messages?key=AUTH_KEY&token=AUTH_TOKEN', options);
  }