
const { User, Item } = require('./../../models/db.js');
const dayjs = require('dayjs')
const calendar = require('dayjs/plugin/calendar');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(calendar)
dayjs.extend(relativeTime);
module.exports = async (ctx, message) => {
    const users = await User.findAll()
    const items = await Item.findAll()
    const subscribed = users.filter(e=>e.state);
    await ctx.replyWithHTML(`<b>About</b>\n\n👤 Users: <b>${users.length}</b>\n` +
        `      Subscribers: <b>${subscribed.length}</b>\n      Found items: <b>${items.length}</b>\n\n` +
        `🛠️ Built by: @keni99\n      Support: @kid_11\n\n⏳ Opened: ${dayjs(1645000884452).fromNow()}`)
}