const getStationName = require('./get-station-name')
module.exports = (handlerInput) => {
    let canHandle = false
    let canFullfillResponse = {}
    let from
    let to
  if(handlerInput.requestEnvelope.request.intent.name === "GetNextTrain") {
    canHandle = true
    const fromSlot = handlerInput.requestEnvelope.request.intent.slots.FromStation
    const toSlot = handlerInput.requestEnvelope.request.intent.slots.ToStation
    from = getStationName(fromSlot)
    to = getStationName(toSlot)
    canFullfillResponse = {
      slots : {
        FromStation : {
          canUnderstand : from ? 'YES': 'NO',
          canFulfill : from ? 'YES': 'NO',
        },
        ToStation : {
          canUnderstand : to ? 'YES': 'NO',
          canFulfill : to ? 'YES': 'NO',
        }
      }
    }
  }
  canFullfillResponse = {
     canFulfill : canHandle ? 'YES': 'NO',
     ...canFullfillResponse
  }


  return handlerInput.responseBuilder
  .withCanFulfillIntent(canFullfillResponse).getResponse()
}