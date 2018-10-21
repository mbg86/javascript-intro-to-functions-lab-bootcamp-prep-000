function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(toUpperCase)
  logShout('hello')
  const spy = expect.spyOn(console, 'log').andCallThrough()
  expect(spy).toHaveBeenCalledWith('HELLO')
}
