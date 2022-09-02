function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`making request to ${location}`);
    if (location === "Google") {
      resolve("Google says Hi!");
    } else {
      reject("we can only talk to google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`extra info + ${response}`);
  });
}

makeRequest("Google")
  .then((response) => {
    console.log("Response Received");
    console.log("res" + " " + response);
    return processRequest(response);
  })
  .then((processResponse) => {
    console.log(processResponse);
  });
