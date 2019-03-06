const trainResponse = require('./train-response')
const NextTrainHandler = require('./get-next-train')

const YesHandler = async (handlerInput) => {
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
  if(Array.isArray(sessionAttributes.trains)) {
    sessionAttributes.trainCount = sessionAttributes.trainCount || 0 
    sessionAttributes.trainCount++
    console.log('train count', sessionAttributes.trainCount)
    return trainResponse(handlerInput, sessionAttributes.trains[sessionAttributes.trainCount], sessionAttributes.to)
  }
  return handlerInput.responseBuilder
    .speak('It seems there has been an error')
    .withShouldEndSession(true)
    .getResponse()
}

module.exports = YesHandler