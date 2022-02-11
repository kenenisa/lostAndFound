const isAdmin = require("../../util/isAdmin").fn
const keyboards = require("../../util/keyboards")

//
module.exports = (ctx, message) => {
    ctx.replyWithChatAction('typing')
    ctx.replyWithHTML(`<b>Welcome</b>\n\nIf you have found a lost item press the "Found" button or /found\n\nIf you lost and item press the "Lost" button or /lost\n\nTo receive notifications when someone finds your ID Card press the "Subscribe" button or /subscribe\n\n<i>Happy to serve💫</i>`, { 
        reply_markup: keyboards.start 
    })
}

