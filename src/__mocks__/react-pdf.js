const React = require('react');

function Document({ children }) {
  return React.createElement('div', null, children);
}

function Page() {
  return React.createElement('div', null);
}

const pdfjs = { GlobalWorkerOptions: { workerSrc: '' } };

module.exports = {
  Document,
  Page,
  pdfjs,
};
