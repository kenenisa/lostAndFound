const isAdmin = require('../util/isAdmin.js').fn;
const keyboard = require('./../util/keyboards.js');

let actions = [];

for (let key in keyboard) {
    keyboard[key].keyboard.forEach((row, r) => {
        row.forEach((column, c) => {
            actions.push({ text: column.text, r, c, key });
        })
    })
}
const execute = (req, ctx) => {
    actions.forEach(action => {
        if (action.text === req) {
            if (action.key === 'admin') {
                if (!isAdmin(ctx.message.chat.id)) {
                    return null;
                }
            }
            return require(`./ButtonHandlers/${action.key}@${action.r}x${action.c}.js`)(ctx, ctx.message);
        }
    })
    return null;
}
const req = require('./ButtonHandlers/start@1x0.js');
module.exports = { actions, execute };