module.exports = async (handlerInput) => {
  let speechText = ''
  if(handlerInput.requestEnvelope.request.intent.name === 'AMAZON.FallbackIntent') {
    speechText += 'I\'m not sure I can help with that, but '
  }
  speechText += 'you can ask me for the next departure time of a train between two stations. ' + 
           'For example, you can ask \"what\'s the next train from Manayunk to 30th Street?\"'
  return handlerInput.responseBuilder
    .speak(speechText)
    .reprompt("Say 'help' or 'cancel.'")
    .getResponse()
}

