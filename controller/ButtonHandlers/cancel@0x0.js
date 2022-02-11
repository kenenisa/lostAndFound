const keyboards = require("../../util/keyboards")

module.exports = (ctx, message) => {
    ctx.session.action = undefined
    ctx.session.actionPhone = undefined
    ctx.session.actionPhoto = undefined
    ctx.reply("Canceled that",{
        reply_markup:keyboards.start
    })
}