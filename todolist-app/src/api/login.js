import renderLoginPage from '../components/loginPage'
import renderUserTasksPage from '../components/userTasksPage'

export async function login(login, password, accessToken, refreshToken) {
  const data = {
    login: login,
    password: password,
    accessToken: accessToken,
    refreshToken: refreshToken,
  }

  const response = await fetch(
    'http://' + 'localhost' + ':' + '3001' + '/login/user',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )

  let answer = await response.json()

  if(response.status === 500) {
    renderLoginPage()
  } else {
    localStorage.setItem('accessToken', answer.accessToken);
    localStorage.setItem('refreshToken', answer.refreshToken);
    renderUserTasksPage()
  }

  console.log(answer)
}
