const LaunchHandler = require('./launch')
const GetNextTrainHandler = require('./get-next-train')
const YesHandler = require('./yes')
const CanFulfillHandler = require('./can-fulfill')
const CancelHandler = require('./cancel')
const HelpHandler = require('./help')
const RepeatHandler = require('./repeat')

module.exports = {
  CanFulfillHandler: {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'CanFulfillIntentRequest';
    },
    handle: CanFulfillHandler
  },
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
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent' ||
      handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NextIntent')

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
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent'
      || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.FallbackIntent')
    },
    handle: HelpHandler
  },
  RepeatHandler : {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.RepeatIntent'
    },
    handle: RepeatHandler
  }
}