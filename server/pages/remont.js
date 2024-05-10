const data = require("../data/remont")

module.exports.page = (req, res) => {
    res.render('remont', data);
}