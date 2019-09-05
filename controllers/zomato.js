'use strict'

const axios = require('axios')

class ZomatoController {
    static getDetail(req, res, next) {
        const { id } = req.params

        axios({
            url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`,
            method: `GET`,
            headers: {
                "user-key": "b49209f030dfc551b74e884ec6c47a85"
            }
        })
            .then(({ data }) => {
                res.status(200).json(data.location)
            })
            .catch(err => {
                console.log(err)
                next
            })
    }
}

module.exports = ZomatoController