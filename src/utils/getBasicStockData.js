import axios from 'axios'

const getBasicStockData = async (tickerInput) => {
  // send ticker to server
  const stock = await axios.post(`${process.env.VUE_APP_SERVER_URL}/stocks/get-basic`, {
    'ticker': tickerInput
  })
  .then( response => {
    return response.data
  })
  .catch ( error => {
    // If error comes from server
    if (error.response ?? false) {
      // TODO add better error handling. App breaks if error is sent through
      console.log(`ServerError: ${error.response.data['error']}`)
    }
    console.log(error.message)
    // emit ('error', error.response.data['error'])
  })
  return stock
}

export default getBasicStockData