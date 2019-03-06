const LaunchHandler = require('./launch')
const GetNextTrainHandler = require('./get-next-train')
const YesHandler = require('./yes')
const NoHandler = require('./no')

module.exports = {
  LaunchHandler: {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle: LaunchHandler
  },
  GetNextTrainHandler: {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'GetNextTrain'
    },
    handle: GetNextTrainHandler
  },
  YesHandler : {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent'
    },
    handle: YesHandler
  },
  NoHandler : {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NoIntent'
    },
    handle: NoHandler
  },
}