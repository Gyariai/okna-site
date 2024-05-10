const data = require("../data/balconi")

module.exports.page = (req, res) => {
    res.render('balconi', data);
}