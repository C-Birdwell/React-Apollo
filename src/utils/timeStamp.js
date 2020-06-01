import moment from 'moment'

export const timeStamp = response => {
  const token = localStorage.getItem('token')
  let tokenTime = ''
  const timeNow = new Date()

  if (token !== null) {
    tokenTime = JSON.parse(token).timeStamp

    if (moment().diff(tokenTime, 'week') > 0) {
      localStorage.clear()
    } else {
      localStorage.setItem(
        'token',
        JSON.stringify({ token: response.data.login.token, timeStamp: timeNow }),
      )
    }
  } else {
    localStorage.setItem(
      'token',
      JSON.stringify({ token: response.data.login.token, timeStamp: timeNow }),
    )
  }
}
