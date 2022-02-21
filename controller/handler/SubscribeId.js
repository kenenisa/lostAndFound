const checkIDFormat = require('../../util/checkIDFormat.js');
const keyboards = require('../../util/keyboards.js');
const { User } = require('./../../models/db.js');

module.exports = (ctx) => {
    const idCard = ctx.message.text.toLowerCase()
    if (checkIDFormat(ctx, idCard)) {
        User.findOne({ where: { state: idCard } }).then(u => {
            if (u) {
                if(u.state && u.tg_id !== ctx.from.id){
                    ctx.replyWithHTML(`<i>${idCard.toUpperCase()}</i> is already registered to someone else.\n\nPlease send your own!`)
                    return;
                }
            }
                User.findOne({ where: { tg_id: ctx.from.id } }).then(user => {
                    if (user) {
                        user.update({ state: idCard }).then(() => {
                            ctx.reply('Successfully subscribed! 🙌', { reply_markup: keyboards.start })
                        })
                    }
                })
        })
    }
}