const replyError = require("../controller/errors/replyError")

module.exports = (ctx,str)=>{
    const exp = /^ETS[0-9]{4}(\/)[0-9]{2}$/i
    if(exp.test(str)){
        return true
    }
    replyError(ctx,'invalidId')
}
