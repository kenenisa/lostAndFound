module.exports = (ctx,str) => {
    require(`./${str}.js`)(ctx)
}