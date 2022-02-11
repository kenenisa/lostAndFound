const keyboards = require("../../util/keyboards");

module.exports = async ctx => {
    ctx.session.action = 'PhoneNumber'
    ctx.session.actionPhone = 'PhoneNumber'
    ctx.replyWithHTML("We need a phone number so the item's Owner can contact you.📞\n\nYou can use the button bellow or just write it down.👇",{
        reply_markup:keyboards.requestPhone
    });

}