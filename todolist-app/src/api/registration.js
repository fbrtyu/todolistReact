import renderRegistrationPage from '../components/registrationPage'
import renderUserTasksPage from '../components/userTasksPage'

export async function registration(login, password_1, password_2) {
  const data = {
    login: login,
    password_1: password_1,
    password_2: password_2,
  }

  const response = await fetch(
    'http://' + 'localhost' + ':' + '3001' + '/registration/newuser',
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

  if (response.status === 200) {
    localStorage.setItem('accessToken', answer.accessToken)
    localStorage.setItem('refreshToken', answer.refreshToken)
    renderUserTasksPage()
  } else {
    renderRegistrationPage()
  }
}
