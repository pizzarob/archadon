export function action(type = '', payload = {}, meta = null, error = null) {
  return {
    type, payload, meta, error,
  };
}

export function keyMirror(obj) {
  const out = {};
  Object.keys(obj).forEach(key => {
    out[key] = key;
  });
  return out;
}

export function request(method, url, data, headers) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    if (headers) {
      Object.entries(headers).forEach(([header, val]) => {
        xhr.setRequestHeader(header, val);
      });
    }

    xhr.addEventListener('load', () => {
      const { response, status } = xhr;
      let res;
      try {
        res = JSON.parse(response);
      } catch (e) {
        res = response;
      }
      if (status >= 200 && status < 400) {
        resolve({ response: res, status });
      } else {
        reject({ response: res, status });
      }
    });

    if (data) {
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
  });
}