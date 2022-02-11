
module.exports = async ctx => {
    ctx.session.action = undefined

    return require('./../../util/pagination.js')(ctx,"PHONE",ctx.message.text.toString())
}