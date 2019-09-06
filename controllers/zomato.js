'use strict'
const axios = require('axios')
class ZomatoController {
    static search(req,res,next){
        console.log("masuk")
        console.log(req.params.parameter+req.params.page)
        let pagestart = 0
        if(req.params.page > 0){
            pagestart = req.params.page*20
        } 
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/search?q=${req.params.parameter}&start=${pagestart}`,
            headers:{
                "user-key" : "ea12d4986a8a3af3d22567b65e4cfe46"
            }
          })
          .then(restos=>{
              res.status(200).json(restos.data.restaurants)
          })
          .catch(next)
    }
}

module.exports = ZomatoController