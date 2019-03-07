const rp = require('request-promise-native')
const trainResponse = require('./train-response')
const getStationName = require('./get-station-name')

const GetNextTrainHandler =  async (handlerInput) => {
  const session = handlerInput.attributesManager.getSessionAttributes()

  const fromSlot = handlerInput.requestEnvelope.request.intent.slots.FromStation
  const toSlot = handlerInput.requestEnvelope.request.intent.slots.ToStation
  session.from = getStationName(fromSlot)
  session.to = getStationName(toSlot)
  console.log('Fetching from API')
  const res = await rp(`http://www3.septa.org/hackathon/NextToArrive/${encodeURIComponent(session.from)}/${encodeURIComponent(session.to)}/5`)
  const trains = JSON.parse(res)
  session.trains = trains
  console.log('fetched', trains)
  return trainResponse(handlerInput, trains[0], session.to)
}

module.exports = GetNextTrainHandler