export async function deleteTask(accessToken, refreshToken, id) {
  const response = await fetch(
    'http://' + 'localhost' + ':' + '3001' + '/delete/' + id,
    {
      method: 'DELETE',
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

  if (response.status === 500) {
    return 500
  } else {
    return 200
  }
}
