const actionSheet = require("../../util/actionSheet");
const { Item } = require('./../../models/db.js');

module.exports = async ctx => {
    ctx.deleteMessage(ctx.update.callback_query.message.message_id)
    if (ctx.session.pagination) {
        return Item.findAll({
            where: {
                type: ctx.session.pagination.type,
                ets: ctx.session.pagination.ets ? ctx.session.pagination.ets : null
            }
        }).then(async items => {
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
            await setTimeout(async () => {
                await ctx.reply(`Showing ${con <= mx ? con : mx}/${mx} results`, {
                    reply_markup: markup()
                })
            }, 2000)
        })
    } else {
        return;
    }
}