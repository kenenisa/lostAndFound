const { Item } = require('./../models/db.js');
const actionSheet = require('./actionSheet.js');
module.exports = (ctx, type, ets = null) => {
    return Item.findAll({ where: { type, ets } }).then(async items => {
        if (items) {
            ctx.session.pagination = {}
            ctx.session.pagination.type = type
            ctx.session.pagination.ets = ets
            ctx.session.pagination.count = 0
            await ctx.reply("There is no other way to do this. You have to look through all the images bellow to find your key.")
            await setTimeout(async () => {
                ctx.session.pagination.max = items.length
                for (var i = ctx.session.pagination.count; i <= ctx.session.pagination.count + 5; i++) {
                    if (i < items.length) {
                        const item = items[i]
                        const photo = JSON.parse(item.photo)
                        if (photo) {
                            await ctx.replyWithPhoto(photo[0].file_id, {
                                caption: item.description,
                                reply_markup: {
                                    inline_keyboard: [
                                        [{ text: 'Explore 👀', callback_data: 'A' + item.id }]
                                    ]
                                }
                            })
                        }
                    }
                }
                ctx.session.pagination.count = ctx.session.pagination.count + 5
                const con = ctx.session.pagination.count
                const mx = ctx.session.pagination.max
                const markup = () => {
                    if (con >= mx) {
                        ctx.session.pagination.count = mx
                        return undefined
                    } else {
                        return { inline_keyboard: [[{ text: 'Next (+5)', callback_data: actionSheet.PAGINATE_NEXT }]] }
                    }
                }
                await ctx.reply(`Showing ${con <= mx ? con : mx}/${ctx.session.pagination.max} results`, {
                    reply_markup: markup()
                })
            }, 2000)
        }
    })

}