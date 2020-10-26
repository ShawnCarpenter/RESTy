
export default  ({ url, method, body }) => {
  return fetch(url, {
    method,
    ...(method === 'POST' || method === 'PUT') && { body:JSON.stringify(body) },
    headers: { 'Content-Type': 'application/json' },
    mode:'cors'
  })
    // .then(console.log);
    .then(res => res.json())
    .catch(err => err);
};
