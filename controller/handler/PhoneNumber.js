const keyboards = require('../../util/keyboards');
const { User, Item } = require('./../../models/db.js');

module.exports = (ctx) => {
    Item.findByPk(ctx.session.itemId).then(item => {
        User.findByPk(item.founderId).then(async user => {
            let phoneNumber = '';
            if (!ctx.message.contact) {
                phoneNumber = ctx.message.text
            } else {
                phoneNumber = ctx.message.contact.phone_number
            }
            await user.update({ phone_number: phoneNumber });
            ctx.session.action = undefined;
            ctx.session.actionPhoto = undefined;
            ctx.session.actionPhone = undefined;
            ctx.reply("We're Done! β\n\nThank you for the honest effortπ! We are trying to find the owner.", {
                reply_markup: keyboards.start
            });
            User.findOne({ where: { state: item.ets } }).then(usr => {
                ctx.telegram.sendMessage(usr.tg_id, "π Someone just found your Id card! π").then(() => {
                    const photo = JSON.parse(item.photo)
                    ctx.telegram.sendPhoto(usr.tg_id, photo[0].file_id, {
                        caption: item.description
                    }).then(() => {
                        ctx.telegram.sendContact(usr.tg_id, phoneNumber, usr.name).then(msg => {
                            ctx.telegram.sendMessage(usr.tg_id, "π Please contact this person or call " + phoneNumber + " \n\nIf You didn't lose your id just ignore all this", {
                                reply_to_message_id: msg.message_id
                            })
                        })
                    })
                })
            })
        })
    })
}