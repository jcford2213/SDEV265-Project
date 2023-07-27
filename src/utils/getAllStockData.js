import axios from 'axios'
import { ErrorCodes } from 'vue'

const getAllStockData = async (tickerInput) => {
  // send ticker to server
  const stock = await axios.post(`${process.env.VUE_APP_SERVER_URL}/stocks/get-all`, {
    'ticker': tickerInput
  })
  .then( response => {
    return response.data
  })
  .catch ( error => {
    // If error comes from server
    if (error.response?.status) {
      throw new Error(`${tickerInput} is not a valid stock symbol. Try searching for another stock.`)
    }
    // Else throw this error
    throw new Error('Problems connecting with server. Try again later.')
  })
  return stock
}

export default getAllStockData