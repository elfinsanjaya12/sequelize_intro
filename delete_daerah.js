const models = require('./models')

models.Daerah.findOne({where: {nama: 'Lampung'}}).then(daerah => {
    daerah.destroy()
}).then(daerah => {
    console.log("sukses hapus data")
}).catch(err => console.log(err))