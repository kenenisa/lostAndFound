const keyboards = require('../../util/keyboards.js');
const { User,Item } = require('./../../models/db.js');


module.exports = async ctx => {
    User.findOne({ where: { tg_id: ctx.from.id } }).then(user => {
        Item.create({ type: "OTHER", founderId: user.id }).then(item=>{
            ctx.session.action = undefined;
            ctx.session.actionPhoto = 'ItemPhoto';
            ctx.session.itemId = item.id
            ctx.replyWithHTML(`We got that\n\nNow we need the photo of the item. Please take a photo of the item right now and send it here.\n\n<i>You can take the photo through telegram using 📎</i>`,{
                reply_markup:keyboards.cancel
            })
        })
    })
}