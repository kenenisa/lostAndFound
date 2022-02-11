const actionSheet = require("../../util/actionSheet");
const {  Item } = require('./../../models/db.js');

module.exports = async ctx => {
    ctx.session.action = undefined
    return Item.findByPk(Number(ctx.update.callback_query.data.slice(1))).then(item => {
        ctx.session.itsMineId = item.id
        const photo = JSON.parse(item.photo)
        ctx.replyWithPhoto(photo[0].file_id, {
            caption: item.description,
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'This is mine 😃', callback_data: actionSheet.ITS_MINE }]
                ]
            }
        })
    })

}