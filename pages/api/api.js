function api(req, res) {
    console.log(req.method)
    // console.log(process.env.APP_KEY)
    if (req.method == 'POST' && req.body.app_key == process.env.APP_KEY) {
        console.log('caiu')
        return res.send({
            auth: 'autorizado',
            status: 200,
            data: req.body,

        })

    } else {
        return res.json({ status: 200, msg: "Entrada não autorizada" })
    }
}

module.exports = api