
export default  ({ url, method, body }) => {
  return fetch(url, {
    method,
    // body:    JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json());
};
