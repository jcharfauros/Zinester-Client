let ApiURL = '';

// eslint-disable-next-line default-case
switch (window.location.hostname) {
    case "localhost":
    case "127.0.0.1":
      ApiURL = "http://localhost:3000";
      break;
    // case "lmsj-firelogger-client.herokuapp.com":
    //   APIURL = "https://zinester.herokuapp.com";
  }

export default ApiURL;