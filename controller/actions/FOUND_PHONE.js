const keyboards = require("../../util/keyboards");

module.exports = async ctx => {
    ctx.session.action = 'AddPhone'
    await ctx.reply("Don't worry", {
        reply_markup: keyboards.cancel
    })
    ctx.replyWithHTML('Please type or choose the name of the phone!\n\n<i><code>E.g. Samsung, Iphone, Tecno or other</code></i>', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Samsung', callback_data: '...F' + 'Samsung' }],
                [{ text: 'Iphone', callback_data: '...F' + 'Iphone' }],
                [{ text: 'Tecno', callback_data: '...F' + 'Tecno' }],
                [{ text: 'Other', callback_data: '...F' + 'Other' }],
            ]
        }
    });


}