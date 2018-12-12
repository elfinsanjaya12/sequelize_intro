const models = require('./models')

models.User.update({nama: 'yadi'}, {
    where: {
        nama : "John Doe"
    }
}).then(user => {
    console.log("suskses edit", user.nama)
}).catch(err => console.log(err))