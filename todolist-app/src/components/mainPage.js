import React, { useEffect, useState } from 'react'
import renderRegistrationPage from './registrationPage'
import renderLoginPage from './loginPage'
import renderUserTasksPage from './userTasksPage'

export default function MainPage() {
  const [accessToken, setAccessToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')

  useEffect(() => {
    setAccessToken(localStorage.getItem(localStorage.key(0)))
    setRefreshToken(localStorage.getItem(localStorage.key(1)))
  }, [])

  if (accessToken && refreshToken) {
    return renderUserTasksPage()
  } else {
    return (
      <div className="App">
        <h1>Привет</h1>
        <div>
          <a
            onClick={() => {
              renderRegistrationPage()
            }}
          >
            Регистрация
          </a>
          <a
            onClick={() => {
              renderLoginPage()
            }}
          >
            Вход
          </a>
        </div>
      </div>
    )
  }
}
