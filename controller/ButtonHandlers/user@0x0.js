const { Product } = require('./../../models/db.js');
const dayjs = require('dayjs')
const calendar = require('dayjs/plugin/calendar');

dayjs.extend(calendar)
module.exports = (ctx, message) => {
    ctx.replyWithChatAction('typing');
    Product.findAll().then(products => {
        if (products.length) {
            let productBtns = []
            products.forEach(product => {
                if (product.amount > 0) {
                    productBtns.push([{ text: `${product.name}, amt:${product.amount}`, callback_data: `ord-prod-${product.id}` }])
                    ctx.replyWithHTML(`${product.name}\n${product.amount} in stock`)
                }
            });
            ctx.reply('Choose a product to send order', {
                reply_markup: {
                    inline_keyboard: productBtns
                }
            })
        } else {
            ctx.replyWithHTML(`No products for now to be ordered`);
        }
    })

}