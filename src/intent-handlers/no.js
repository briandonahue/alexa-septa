const NextTrainHandler = require('./get-next-train')
const YesHandler = async (handlerInput) => {
  return handlerInput.responseBuilder
    .speak('Goodbye')
    .withShouldEndSession(true)
    .getResponse()
}

module.exports = YesHandler
