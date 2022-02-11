const keyboards = require('../../util/keyboards.js');
const { Item } = require('./../../models/db.js');

module.exports = (ctx) => {
    Item.findByPk(ctx.session.itemId).then(item => {
        item.update({ description: ctx.message.text }).then(() => {
            ctx.reply('Great!');
            setTimeout(() => {
                require('./../actions/ADD_DESCRIPTION.js')(ctx)
            }, 1000)
        })
    })
}