const { Item } = require('./../../models/db.js');

module.exports = async ctx => {
    ctx.session.action = undefined
    return Item.destroy({ where: { id: Number(ctx.update.callback_query.data.slice(1)) } }).then(item => {
        ctx.reply("Thanks, You're cool, keep it up👐")
    })

}