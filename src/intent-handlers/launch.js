const LaunchRequestHandler = (handlerInput) => {
  const speechText = 'Welcome to the Septa Trains Skill, '
  + 'you can ask me for the next trains between two stations. '
  + 'To hear an example, say \"help.\"'


  return handlerInput.responseBuilder
    .speak(speechText)
    .reprompt(speechText)
    .withSimpleCard('Septa Trains', speechText)
    .getResponse();
}

module.exports = LaunchRequestHandler