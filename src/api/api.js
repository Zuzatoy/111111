module.exports.handler = (evt, ctx, done) => {
    done(null, {
        statusCode: 200,
        headers: {},
        body: JSON.stringify({message: 'yes baby wjik wjik 11111'})
    })
}
