const LaunchRequestHandler = (handlerInput) => {
  const speechText = 'Welcome to the Septa Trains Skill, '
  + 'for an example of what you can ask me, say \"help.\"'


  return handlerInput.responseBuilder
    .speak(speechText)
    .reprompt(speechText)
    .withSimpleCard('Septa Trains', speechText)
    .getResponse();
}

module.exports = LaunchRequestHandler