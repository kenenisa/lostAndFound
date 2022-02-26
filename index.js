const express = require('express');
const app = express();
const { Telegraf } = require('telegraf');
// const LocalSession = require('telegraf-session-local')
const dayjs = require('dayjs')
const calendar = require('dayjs/plugin/calendar');

dayjs.extend(calendar)

const db = require('./models/db.js')
const { User, Order, Product } = db;
const controller = require('./controller/controller.js');
const operation = require('./util/operation.js');
const actionParser = require('./controller/actions/actionParser.js');
const session = require('./util/session.js');
const isAdmin = require('./util/isAdmin.js').fn;
const token = operation.realToken // testing
// const token = operation.token; //binary tech

let bot = new Telegraf(token);
// let bot = new t.Telegraf(token, {
//   telegram: {
//     apiRoot: 'http://localhost:8081'
//   }
// });
bot.use(session)
bot.telegram.setMyCommands([
  { command: '/start', description: 'starts or restarts the bot' },
  { command: '/found', description: 'If you have found an item' },
  { command: '/lost', description: 'If you have lost an item' },
  { command: '/subscribe', description: 'Subscribe to get notifications when someone finds your ID card' },
]);
//
bot.command('/found', ctx => require(`./controller/ButtonHandlers/start@0x0.js`)(ctx, ctx.message))
bot.command('/lost', ctx => require(`./controller/ButtonHandlers/start@0x1.js`)(ctx, ctx.message))
bot.command('/subscribe', ctx => require(`./controller/ButtonHandlers/start@1x1.js`)(ctx, ctx.message))
//
bot.use(async (ctx, next) => {
  console.time(`Processing update ${ctx.update.update_id}`);
  ctxu = ctx.update;
  const msg = (ctxu.callback_query || ctxu).message;
  const chat = msg.chat
  console.log(`id:${chat.id}###chat: ${chat.first_name + ' ' + (chat.last_name ? chat.last_name : '')}###message: ${msg.text}###${JSON.stringify(msg)}`)
  if (!ctx.session.user) {
    User.findOne({ where: { tg_id: chat.id } }).then(async (e) => {
      if (e == null) {
        User.create({
          name: chat.first_name + ' ' + (chat.last_name ? chat.last_name : ''),
          tg_id: chat.id,
        })
      }else{
        ctx.session.state = !!e.state
      }
      ctx.session.user = chat.id
      await next()
    })
  } else {
    await next()
  }
})
//
bot.start(ctx => require('./controller/ButtonHandlers/startHandler.js')(ctx, ctx.message));
// this will attach controllers for keyboard button layouts
controller.actions.forEach(action => {
  bot.hears(action.text, ctx => controller.execute(action.text, ctx))
})
//parses callbacks coming now
actionParser(bot);
// fun stuff
bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.on('text', (ctx) => {
  if (ctx.session.action) {
    require(`./controller/handler/${ctx.session.action}.js`)(ctx)
  }
});
bot.on('contact', ctx => {
  if (ctx.session.actionPhone) {
    require(`./controller/handler/${ctx.session.actionPhone}.js`)(ctx)
  }
})
bot.on('photo', ctx => {
  if (ctx.session.actionPhoto) {
    require(`./controller/handler/${ctx.session.actionPhoto}.js`)(ctx)
  }
})
bot.on('callback_query', (ctx) => {
  if (/[A][1-9]*/g.test(ctx.update.callback_query.data)) {
    require('./controller/actions/LOST_ID_SELECTION.js')(ctx).then(() => {
      ctx.answerCbQuery()
    })
  }else if (/[I][1-9]*/g.test(ctx.update.callback_query.data)) {
    require('./controller/actions/CONFIRM_REMOVE.js')(ctx).then(() => {
      ctx.answerCbQuery()
    })
  } else if (/(...F)[A-Z]*/.test(ctx.update.callback_query.data)) {
    require('./controller/handler/AddPhone.js')(ctx, ctx.update.callback_query.data.slice(4)).then(() => {
      ctx.answerCbQuery()
    })
  }
})
//
const secretPath = '/' + token;
bot.telegram.setWebhook('https://glacial-tor-51508.herokuapp.com' + secretPath)
// bot.telegram.setWebhook('http://localhost:5000' + secretPath)


app.use(bot.webhookCallback(secretPath));

app.get('/', function (req, res) {
  res.send(`<h1>Test</h1><h3>go to idk</h3>`);
});


app.set("port", process.env.PORT || 5000);
app.set("host", process.env.HOST || "localhost");

db.sequelize.sync().then(function () {
  app.listen(app.get("port"), function () {
    console.log(
      "%s server listening at http://%s:%s",
      process.env.NODE_ENV,
      app.get("host"),
      app.get("port")
    );
  });
})
