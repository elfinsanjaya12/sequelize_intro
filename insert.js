const models = require('./models')

models.User.create({
    nama: 'haidar',
    email: 'afif@gmail.com',
    telp: 1231,
    alamat: 'jauh',
    daerahId: 4,
}).then(user => {
    console.log("sukses simpan", user.nama)
}).catch(err => console.log(err))