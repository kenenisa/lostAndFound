const operation = require("./operation");

const whitelist = [
    495709542,
    495030995
    // 286525767 //Dav
]
//production admins

module.exports = {
    fn: function (id) {
        return whitelist.find(item => item === id);
    }, list: whitelist
}