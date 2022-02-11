const actionSheet = require("../../util/actionSheet");
module.exports =  bot =>  {
    const actionKeys = Object.keys(actionSheet)
    for (let action = 0; action <= actionKeys.length; action++) {
        const key = actionKeys[action]
        const value = actionSheet[key]
        if (value) {
            bot.action(value, ctx => require(`./${key}.js`)(ctx).then(()=>ctx.answerCbQuery()))
        }
    }
}