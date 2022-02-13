const testing = false;

const testingToken = '5135705874:AAFqxRoczYGB2dC0nLAWUcAKt81URz2RvHY'
const realToken = '5135705874:AAFqxRoczYGB2dC0nLAWUcAKt81URz2RvHY'

module.exports = {
    testing,
    realToken,
    testingToken,
    token: testing ? testingToken : realToken,
    channelHandle: testing ? '@delivery_demo' : '@Binarytech01',
    channelLink: testing ? 'delivery_demo' : 'Binarytech01',
    botHandle: testing ? 'Delivery_testing_bot' : 'AASTULostAndFound'
}
// force