function isValidJSON(str) {
  try {
    JSON.parse(str);
  } catch (err) {
    return false;
  }
  return true;
}

function parseBody(event) {
  const {body} = event;

  if(isValidJSON(body) === false) {
    throw new Error({
      "type": "Validation Error",
      "message": "Not a valid JSON"
    });
  }

  return JSON.parse(body);
}

module.exports = parseBody;
