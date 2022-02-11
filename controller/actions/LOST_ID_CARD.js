const keyboards = require("../../util/keyboards");
const { User,Item } = require('./../../models/db.js');

module.exports = async ctx => {
    ctx.session.action = 'FindId'
    Item.findAll({where:{type:"ID"}}).then(items => {
        let ids = []
        items.forEach((item) => {
            if(item.ets && item.photo){
                ids.push([{ text: item.ets.toUpperCase(), callback_data: "A" + item.id }])
            }
        })
        ctx.replyWithHTML('You can select or type in your lost id \n\n<i><code>E.g. ETS####/##</code></i>', {
            reply_markup: {
                inline_keyboard:ids
            }
        });
    })

}