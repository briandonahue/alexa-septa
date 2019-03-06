module.exports = async (handlerInput) => {
  return handlerInput.responseBuilder
    .speak('Goodbye')
    .withShouldEndSession(true)
    .getResponse()
}
