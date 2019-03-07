const Alexa = require('ask-sdk-core');

const skillBuilder = Alexa.SkillBuilders.custom();
const handlers = require ('src/intent-handlers')

const handlerArray = Object.values(handlers)

module.exports = {
  handler: skillBuilder
  .addRequestHandlers(...handlerArray)
  .lambda()
}
