const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  }
};

const GetNextTrainsHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
    && handlerInput.requestEnvelope.request.intent.name === 'GetNextTrains';
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    const fromSlot = handlerInput.requestEnvelope.request.intent.slots.FromStation;
    const toSlot = handlerInput.requestEnvelope.request.intent.slots.ToStation;
    let from;
    let to;
    if (fromSlot && fromSlot.value) {
      from = fromSlot.value.toLowerCase();
    }
    if (toSlot && toSlot.value) {
      to = toSlot.value.toLowerCase();
    }
    const speechText = `You requested to go from ${from} to ${to}`
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  }
}
const skillBuilder = Alexa.SkillBuilders.custom();

module.exports = {
  handler: skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    GetNextTrainsHandler
  )
  .lambda()
}
