const home = require('../data/home')

module.exports.page = (req, res) => {
    res.render('home', {
        price: home.data.price1[0],
        price2: home.data.price2
    });
}