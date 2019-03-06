
module.exports = async (handlerInput, trainInfo, destination) => {
  const reprompt = 'Would you like to hear the next scheduled departure?'
  const speechText = `The ${trainInfo.orig_departure_time} ${trainInfo.orig_line} will arrive at 
                      ${destination} at ${trainInfo.orig_arrival_time}. ${reprompt}`
  const cardText = `${trainInfo.orig_departure_time}: ${trainInfo.orig_line} arriving at ${trainInfo.orig_arrival_time} \n`
  return handlerInput.responseBuilder
    .speak(speechText)
    .reprompt(reprompt)
    .withSimpleCard('Train', cardText)
    .getResponse()
}
