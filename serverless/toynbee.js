const Alexa = require('ask-sdk-core');

const rp = require('request-promise-native')


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
    if (fromSlot && fromSlot.resolutions && fromSlot.resolutions.resolutionsPerAuthority.length > 0) {
      fromStation = fromSlot.resolutions.resolutionsPerAuthority[0].values[0].value
      console.log(fromStation)
      from = fromStation.name
    }
    if (toSlot && toSlot.resolutions && toSlot.resolutions.resolutionsPerAuthority.length > 0) {
      toStation = toSlot.resolutions.resolutionsPerAuthority[0].values[0].value
      console.log(toStation)
      to = toStation.name
    }

    return rp(`http://www3.septa.org/hackathon/NextToArrive/${encodeURIComponent(from)}/${encodeURIComponent(to)}/3`)
    .then((res) => {
      let speechText = `No trains found.`
      let cardText = speechText
      let json = JSON.parse(res)
      console.log('Response: ', json)
      if(Array.isArray(json) && json.length > 0) {
        speechText = `The next three trains departing from ${from} and continuing to ${to} are:\n`
        cardText = ''
        json.forEach((t) => {
          speechText += `The ${t.orig_departure_time} ${t.orig_line} arriving at ${t.orig_arrival_time}. `
          cardText += `${t.orig_departure_time}: ${t.orig_line} arriving at ${t.orig_arrival_time} \n`
        })
      }
      return { speechText, cardText }
    })
    .then((text) => {
      return handlerInput.responseBuilder
        .speak(text.speechText)
        .reprompt(text.speechText)
        .withSimpleCard('Trains', text.cardText)
        .getResponse();

    })

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
