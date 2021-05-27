/**
 * method for performing requests & validating whether or not the user is authentificated
 * @param {string} url 
 * @param {string} method 
 * @param {object} options 
 */
 var request = async (url, method, body) => {
    var url = url.match(/http/) ? url : localStorage.config.server;
    var headers = { 'Content-Type': "application/json" }
    await new Promise((resolve, reject) => {
      fetch(url, { method: method, headers: headers, body: JSON.stringify(body) })
        .then(res => res.json())
        .then(res => {
          // disabled during development
          // if (res.auth === false) { window.location.replace('/auth'); return 1; }
          resolve(res.data); return 0;
        })
        .catch(err => reject(err));
    })
  }

  module.exports = {
      request : request
  }