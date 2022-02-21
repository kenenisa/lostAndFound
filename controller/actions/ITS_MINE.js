const actionSheet = require("../../util/actionSheet");
const keyboards = require("../../util/keyboards");
const replyError = require("../errors/replyError");
const { User, Item } = require('./../../models/db.js');

module.exports = async ctx => {
    Item.findByPk(ctx.session.itsMineId).then(item => {
        if (item) {

            User.findByPk(item.founderId).then(user => {
                ctx.session.itsMineId = undefined
                ctx.session.action = undefined
                ctx.replyWithContact(user.phone_number, user.name).then(msg => {
                    ctx.reply('Please contact this person to get your item back or call ' + user.phone_number, {
                        reply_to_message_id: msg.message_id
                    }).then(() => {
                        ctx.replyWithHTML(
                            `<a href="tg://user?id=${ctx.message.chat.id}">${ctx.message.chat.id}</a> has claimed an item you posted. Please confirm if you've returned it!`, {
                            reply_markup: { inline_keyboard: [[{ text: '✅ Yes i returned', callback_data: 'I' + item.id }]] }
                        })
                    })
                })
            })
        } else {
            replyError(ctx, 'sessionExpires')
        }
    })

}