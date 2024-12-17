export async function deleteUser(login, password) {
  const response = await fetch(
    'http://' + 'localhost' + ':' + '3001' + '/user/delete',
    {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    }
  )

  if (response.status === 500) {
    return 500
  } else {
    return 200
  }
}
