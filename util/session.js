let session = {}

module.exports = async (ctx,next) => {
    if(ctx.from.id || ctx.chat.id){
        const key = `${ctx.from.id || ctx.chat.id}`
        if(!session[key]){
            session[key] = {}
        }
        ctx.session = session[key];
    }
    await next()
}