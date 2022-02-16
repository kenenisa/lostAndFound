
const { User, Item } = require('./../../models/db.js');
const dayjs = require('dayjs')
const calendar = require('dayjs/plugin/calendar');

dayjs.extend(calendar)
module.exports = async (ctx, message) => {
    await ctx.replyWithHTML('<b>About</b>')
}