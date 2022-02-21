const { Item } = require('./../../models/db.js');

module.exports = async ctx => {
    ctx.session.action = undefined
    ctx.reply("Thanks, You're cool, keep it up👐")
    return Item.destroy({ where: { id: Number(ctx.update.callback_query.data.slice(1)) } }).catch((err) => {
        console.log(err);
    })

}