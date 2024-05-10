const data = require("../data/komplektuyuschie")
module.exports.page = (req, res) => {   
    res.render('komplektuyuschie', {
        price: data.data.price
    });
}