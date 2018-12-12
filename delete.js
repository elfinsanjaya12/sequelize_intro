const models = require('./models')

models.User.destroy({
    where: {
        nama: "yadi"
    }
}).then(user => {
    console.log("Berhasil dihapus")
}).catch(err => console.log(err))