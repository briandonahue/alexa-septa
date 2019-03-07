module.exports = (handlerInput) => {
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
  const speechText = sessionAttributes.speechText || "I'm not sure I know what to repeat."
  console.log("Repeating:", speechText)

  return handlerInput.responseBuilder
    .speak(speechText)
    .reprompt("You can say 'help,' or 'repeat,' if you are not sure what to do next.")
    .getResponse()
}