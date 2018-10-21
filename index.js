function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  logShout('hello')
  expect(spy).toHaveBeenCalledWith('HELLO')
}
