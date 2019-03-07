const LaunchHandler = require('./launch')
const GetNextTrainHandler = require('./get-next-train')
const YesHandler = require('./yes')
const CancelHandler = require('./cancel')
const HelpHandler = require('./help')

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
  CancelHandler : {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NoIntent'
      || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
      || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent')
    },
    handle: CancelHandler
  },
  HelpHandler : {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent'
    },
    handle: HelpHandler
  }
}