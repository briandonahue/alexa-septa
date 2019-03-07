module.exports = async (handlerInput) => {
  const text = 'You can ask me for the next departure time of a train between two stations. ' + 
           'For example, you can say \"what\'s the next train from Jenkintown to Suburban Station\"'
  return handlerInput.responseBuilder
    .speak(text)
    .reprompt(text)
    .getResponse()
}

