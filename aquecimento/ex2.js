const axios = require('axios').default;
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgxMGM2NDFhYmQ1NDU0MDZkZmRkMSIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJkYXcyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMTE1MzcyMSwiZXhwIjoxNjExMTgyNTIxfQ.JdgVjkQKAhnxxDrjgwSswN9Ay7MkngglGJBJw66DsMxs-Xu5oOHuXqHOGa4OzqXOlM8KXgrwhIoXPu_OWQdBS48ouSuZLP-ubzVFZgkv6o0v-rTF8VlkHCdId4tM9KSr8ps8fdgCpYGB9rTpImmsAPJ5HTV-7iWxxjilBjsDKM7d7llXn8S6Pp89XwdP-N6qCQ59fC9wfzMt6rhITq4ifLGlatxNsMtEzhI0WJi_uc0LIgLue-VhcMwtKZxNZfQJi3ptkNFa-o77R7Y5M9cElCP5Tt8v9KewiSzCAhYRJvCpA05tnGMPYY3S1JqRosuR0s8Db5i73XkQbXV40hiM0g';
const baseUrl = 'http://clav-api.di.uminho.pt/v2/';

(async function() {
    const processosBase = await axios.get(baseUrl + 'indicadores/entidades/?token=' + token);

    return processosBase.data;
})()
.then(data => console.log(JSON.stringify(data)))
.catch(err => console.error(err));
