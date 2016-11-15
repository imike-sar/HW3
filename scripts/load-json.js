export function loadJSON(url) {

  return new Promise(function(resolve) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) resolve(JSON.parse(xhr.responseText));
    };

    xhr.send();
  });
}
