const actionSheet = require('../../util/actionSheet');
const {  Item } = require('./../../models/db.js');

module.exports = (ctx) => {
    Item.findByPk(ctx.session.itemId).then(item => {
        item.update({photo:JSON.stringify(ctx.message.photo)}).then(()=>{
            ctx.session.action = 'AddDescription'
            ctx.replyWithHTML('Got that too! 👍\n\n<i>You can send some text for description or just skip it</i>',{
                reply_markup:{
                    inline_keyboard:[
                        [{text:'↪ Skip',callback_data:actionSheet.ADD_DESCRIPTION}]
                    ]
                }
            })
        })
    })
}