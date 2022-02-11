const keyboards = require("../../util/keyboards");

module.exports = async ctx => {
    ctx.session.action = 'AddId'
    ctx.replyWithHTML('Please send the Id number on the card!\n\n<i><code>E.g. ETS####/##</code></i>',{
        reply_markup:keyboards.cancel
    });

}