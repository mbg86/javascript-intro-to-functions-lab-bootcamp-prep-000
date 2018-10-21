function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return string.toUpperCase()
  console.log(logShout, 'log')
  logShout('HELLO')

  expect(spy).toHaveBeenCalledWith('HELLO')

  console.log.restore()
}
