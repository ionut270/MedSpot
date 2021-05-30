/**
 * method for performing requests & validating whether or not the user is authentificated
 * @param {string} url 
 * @param {string} method 
 * @param {object} options 
 */
 var request = (url, method, body) => {
    url = url.match(/http/) ? url : process.env.REACT_APP_SERVER + url;
    var headers = { 'Content-Type': "application/json", sessionID: localStorage.sessionID }
    return new Promise((resolve, reject) => {
      fetch(url, { method: method, headers: headers, body: body ? JSON.stringify(body) : null })
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err));
    })
  }
 

  module.exports = {
      request : request
  }