'use strict';

// const request = require('request');
const axios = require('axios')
const appID = process.env.CURRENCY_TOKEN;

class CurrencyController {
  static getRate(req, res, next) {
    axios({
      method: 'get',
      url: 'https://openexchangerates.org/api/latest.json',
      headers: {
        Authorization: `Token ${appID}`
      }
    })
      .then((rates) => {
        res.status(200).json(Object.keys(rates.data.rates))
      }).catch(next)
  }

  static changeRate(req, res, next) {
    const { price, currency } = req.body
    axios({
      method: 'get',
      url: 'https://openexchangerates.org/api/latest.json',
      headers: {
        Authorization: `Token ${appID}`
      }
    })
      .then((rates) => {
        let foodPrice = price
        const priceInUSD = Number(foodPrice / rates.data.rates.IDR) // Rupiah ke USD
        let convertedPrice = (priceInUSD * rates.data.rates[currency]).toFixed(2)  // USD ke mata uang yg dipilih ex.JPY
        res.status(200).json(convertedPrice)
      }).catch(next)
  }
}

module.exports = CurrencyController;