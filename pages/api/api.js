function api(req,res){
    console.log(req.body)
    if(req.method == 'POST'){
        res.json({
            date:'aaa'
        })

    }
    res.send('Ha')
}

module.exports = api