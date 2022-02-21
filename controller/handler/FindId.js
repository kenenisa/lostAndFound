const actionSheet = require('../../util/actionSheet');
const checkIDFormat = require('../../util/checkIDFormat');
const keyboards = require('../../util/keyboards');
const { User, Item } = require('./../../models/db.js');

module.exports = (ctx) => {
    const idCard = ctx.message.text.toLowerCase();
    if (checkIDFormat(ctx, idCard)) {
        Item.findOne({ where: { ets: idCard } }).then(item => {
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
}