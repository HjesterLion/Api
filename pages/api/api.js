function api(req,res){
    console.log(req.body)
    console.log(process.env.APP_KEY)
    if(req.method == 'POST' && req.body.app_key == process.env.APP_KEY){
        console.log('caiu')
        res.json({
            auth:'autorizado',
            status: 200,
            data: req.body,

        })

    }else{

        res.json({status:200, msg:"Entrada não autorizada"})
    }
}

module.exports = api