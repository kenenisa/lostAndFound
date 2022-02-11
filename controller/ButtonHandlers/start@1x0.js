
const { User } = require('./../../models/db.js');
const dayjs = require('dayjs')
const calendar = require('dayjs/plugin/calendar');

dayjs.extend(calendar)
module.exports = (ctx, message) => {
    ctx.reply('tf u wanna know?')
}