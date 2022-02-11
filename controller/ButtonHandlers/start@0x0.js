const { User, Item } = require('./../../models/db.js');
const dayjs = require('dayjs')
const calendar = require('dayjs/plugin/calendar');
const actions = require('../../util/actionSheet.js');

dayjs.extend(calendar)
module.exports = (ctx, message) => {
    
    ctx.reply('We can help the person who lost it get the item back.\n\nWhat did you find?', {
        reply_markup: {
            inline_keyboard: [
                [{ text: "💳 ID card", callback_data: actions.FOUND_ID_CARD }],
                [{ text: "🔑 Keys", callback_data: actions.FOUND_KEYS }],
                [{ text: "📱 Phone", callback_data: actions.FOUND_PHONE }],
                [{ text: "🧳 Other", callback_data: actions.FOUND_OTHER }],
            ]
        }
    })
}
//https://data.mongodb-api.com/app/data-fcxzd/endpoint/data/beta
//@Fu7EWrAG39mD7u
//mongodb+srv://kenenisa:<%40Fu7EWrAG39mD7u>@cluster0.viwdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority