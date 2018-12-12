const models = require('./models')

models.Daerah.create({
    nama: 'jawa',
 }).then(daerah => {
    console.log("sukses simpan", daerah.nama)
}).catch(err => console.log(err))