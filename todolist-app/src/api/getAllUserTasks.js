export async function getAllUserTasks(accessToken, refreshToken) {
  const response = await fetch(
    'http://' + 'localhost' + ':' + '3001' + '/task/all',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accessToken: accessToken,
        refreshToken: refreshToken,
      }),
    }
  )
  if (response.status === 501) {
    return 501
  }
  if (response.status === 500) {
    return 500
  } else {
    return await response.json()
  }
}
