'use strict'

const axios = require('axios')

class ZomatoController {
    static getDetail(req, res, next) {
        const { id } = req.params
        const startLoc = `hacktiv8`
        let location

        axios({
            url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`,
            method: `GET`,
            headers: {
                "user-key": "b49209f030dfc551b74e884ec6c47a85"
            }
        })
            .then(({ data }) => {
                // res.status(200).json(data.location)
                location = data.location

                return axios({
                    url: `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${startLoc}&destinations=${location.address}&key=AIzaSyAdv8835rnAxHq2hwdSMLAS1Dt7Mjk2rAo`,
                    method: `GET`
                })
            })
            .then(({ data }) => {
                location.distance = data.rows[0].elements[0].distance.text;
                location.duration = data.rows[0].elements[0].duration.text
                res.status(200).json(location)
            })
            .catch(err => {
                console.log(err)
                next
            })
    }
}

module.exports = ZomatoController