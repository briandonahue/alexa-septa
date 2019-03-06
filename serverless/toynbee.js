const Alexa = require('ask-sdk-core');

const skillBuilder = Alexa.SkillBuilders.custom();
const { LaunchHandler, GetNextTrainHandler, YesHandler, CancelHandler, HelpHandler } = require ('src/intent-handlers')

console.log(LaunchHandler)
console.log(GetNextTrainHandler)

module.exports = {
  handler: skillBuilder
  .addRequestHandlers(
    LaunchHandler,
    GetNextTrainHandler,
    YesHandler,
    CancelHandler,
    HelpHandler
  )
  .lambda()
}
