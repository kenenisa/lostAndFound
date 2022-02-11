// const { User } = require('./../../models/db.js');
const dayjs = require('dayjs')
const calendar = require('dayjs/plugin/calendar');
const actions = require('../../util/actionSheet');

dayjs.extend(calendar)
module.exports = (ctx, message) => {
    ctx.reply('We can help you find what you lost.\n\nWhat did you Lose?', {
        reply_markup: {
            inline_keyboard: [
                [{ text: "💳 ID card", callback_data: actions.LOST_ID_CARD }],
                [{ text: "🔑 Keys", callback_data: actions.LOST_KEYS }],
                [{ text: "📱 Phone", callback_data: actions.LOST_PHONE }],
                [{ text: "🧳 Other", callback_data: actions.LOST_OTHER }],
            ]
        }
    })
}