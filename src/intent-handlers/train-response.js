
module.exports = async (handlerInput, trainInfo, destination) => {
  const repromptText = 'Would you like to hear the next departure?'
  const speechText = `The ${trainInfo.orig_departure_time} ${trainInfo.orig_line} will arrive at ` + 
                     `${destination} at ${trainInfo.orig_arrival_time}. ${repromptText}`
  const cardText = `${trainInfo.orig_departure_time}: ${trainInfo.orig_line} arriving at ${trainInfo.orig_arrival_time} \n`


  handlerInput.attributesManager.setSessionAttributes({
    ...handlerInput.attributesManager.getSessionAttributes(),
    repromptText,
    speechText,
    cardText
  })

  return handlerInput.responseBuilder
    .speak(speechText)
    .reprompt(repromptText)
    .withSimpleCard('Train', cardText)
    .getResponse()
}
