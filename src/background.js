browser.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    alert('Hello')
  }
})
