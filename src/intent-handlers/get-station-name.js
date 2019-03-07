module.exports = (stationSlot) => {
    if (stationSlot && stationSlot.resolutions && stationSlot.resolutions.resolutionsPerAuthority.length > 0) {
      station = stationSlot.resolutions.resolutionsPerAuthority[0].values[0].value
      console.log(station)
      return station.name
    }
    else {
      throw new Error('Could not determine station name.')
    }
}
