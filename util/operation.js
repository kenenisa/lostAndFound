const testing = false;

const testingToken = '1678416127:AAEE8YG-_B12OaADiRrYicGgYoX8UNwEkyw'
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