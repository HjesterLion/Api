function api(req,res){
    console.log(req.body)
    if(req.method == 'POST'){
        console.log('caiu')
        res.json({
            date:'aaa'
        })

    }else{

        res.send('Ha')
    }
}

module.exports = api