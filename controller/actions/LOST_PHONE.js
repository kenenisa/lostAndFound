const actionSheet = require("../../util/actionSheet");
const keyboards = require("../../util/keyboards");
const { User, Item } = require('./../../models/db.js');

module.exports = async ctx => {
    ctx.session.action = "phoneType"
    ctx.replyWithHTML('What kind of phone did you loose? type or select an option', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Samsung', callback_data: actionSheet.LOST_PHONE_SAMSUNG }],
                [{ text: 'Iphone', callback_data: actionSheet.LOST_PHONE_IPHONE }],
                [{ text: 'Tecno', callback_data: actionSheet.LOST_PHONE_TECNO }],
                [{ text: 'Other', callback_data: actionSheet.LOST_PHONE_OTHER }],
            ]
        }
    });
}