const data = require("../data/okna")

module.exports.page = (req, res) => {
    res.render('okna', {
        price: data.data.price
    });
}