const query = decodeURIComponent(location.search.match(/data=(.*)/)[1]);
const iframe = document.querySelector('iframe');

iframe.srcdoc = query;
