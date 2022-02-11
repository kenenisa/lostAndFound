const { User } = require('./../../models/db.js');

module.exports = (ctx) => {
    User.findOne({ where: { tg_id: ctx.from.id } }).then(user => {
        if(user){
            user.update({state:ctx.message.text.toLowerCase()}).then(()=>{
                ctx.reply('Successfully subscribed! 🙌')
            })
        }
    })
}