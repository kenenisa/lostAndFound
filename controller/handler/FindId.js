const actionSheet = require('../../util/actionSheet');
const keyboards = require('../../util/keyboards');
const { User, Item } = require('./../../models/db.js');

module.exports = (ctx) => {
    Item.findOne({ where: { ets: ctx.message.text.toLowerCase() } }).then(item => {
        ctx.session.itsMineId = item.id
        const photo = JSON.parse(item.photo)
        ctx.replyWithPhoto(photo[0].file_id, {
            caption: item.description,
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'This is mine', callback_data: actionSheet.ITS_MINE }]
                ]
            }
        })
    })
}