const axios = require('axios')

let username = 'sansekai'
let url = `https://api.github.com/users/${username}`; 
axios.get(url)
.then(data => {
console.log(data.data)
})
