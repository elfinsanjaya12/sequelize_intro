const models = require('./models')

models.User.findAll().then(users => {
    users.forEach(user=> {
        console.log(`${user.nama} | ${user.email} | ${user.alamat}`)
    });
}).catch(err => console.log(err))