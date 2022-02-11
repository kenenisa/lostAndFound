const keyboards = require("../../util/keyboards")

module.exports = (ctx, message) => {
    ctx.session.action = 'SubscribeId'
    ctx.replyWithHTML("Please send your ID Number to get notifications when someone finds your ID.\n\n<i><code>E.g. ETS####/##</code></i>",{
        reply_markup:keyboards.cancel
    })
}