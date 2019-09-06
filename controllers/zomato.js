'use strict'

const axios = require('axios')
class ZomatoController {
    static search(req, res, next) {
        console.log("masuk")
        console.log(req.params.parameter + req.params.page)
        let pagestart = 0
        if (req.params.page > 0) {
            pagestart = req.params.page * 20
        }
        axios({
            method: 'GET',
            url: `https://developers.zomato.com/api/v2.1/search?q=${req.params.parameter}&start=${pagestart}`,
            headers: {
                "user-key": "ea12d4986a8a3af3d22567b65e4cfe46"
            }
        })
            .then(restos => {
                res.status(200).json(restos.data.restaurants)
            })
            .catch(next)
    }

    static getDetail(req, res, next) {
        const { id } = req.params
        const startLoc = `hacktiv8`
        let location

        axios({
            url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`,
            method: `GET`,
            headers: {
                "user-key": process.env.ZOMATO_KEY
            }
        })
            .then(({ data }) => {
                // res.status(200).json(data.location)
                location = data.location

                return axios({
                    url: `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${startLoc}&destinations=${location.address}&key=${process.env.GMAPS_KEY}`,
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