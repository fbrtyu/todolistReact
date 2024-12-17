export async function createTask(
  accessToken,
  refreshToken,
  title,
  description,
  status
) {
  const response = await fetch(
    'http://' + 'localhost' + ':' + '3001' + '/create/new',
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
        title: title,
        description: description,
        status: status,
      }),
    }
  )

  if (response.status === 500) {
    return 500
  } else {
    return 200
  }
}
