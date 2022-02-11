const { User } = require('./../models/db.js');

module.exports = {
    change: function (ctx, state) {
        User.findOne({ where: { tg_id: ctx.message.chat.id } }).then(user => {
            user.update({ state });
        })
    },
    remove: function (ctx) {
        User.destroy({ where: { tg_id: ctx.message.chat.id } })
    },
    get: function (ctx) {
        return User.findOne({ where: { tg_id: ctx.message.chat.id } }).then(user => user.state)
    }
}