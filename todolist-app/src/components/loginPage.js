import { root } from '../index'
import React, { useEffect, useState } from 'react'
import { login } from '../api/login'
import renderRegistrationPage from './registrationPage'
import renderUserTasksPage from './userTasksPage'

function LoginPage() {
  const [inputLogin, setLogin] = useState('')
  const [inputPassword, setPassword] = useState('')

  const [accessToken, setAccessToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')

  useEffect(() => {
    setAccessToken(localStorage.getItem(localStorage.key(0)))
    setRefreshToken(localStorage.getItem(localStorage.key(1)))
  }, [])

  if (accessToken && refreshToken) {
    console.log(accessToken, refreshToken)
    renderUserTasksPage()
  }

  function signin() {
    login(inputLogin, inputPassword, accessToken, refreshToken)
  }

  return (
    <div className="Form">
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

      <p>Вход</p>

      <label htmlFor="login">Логин</label>
      <input
        type="text"
        name="login"
        id="login"
        onChange={(event) => setLogin(event.target.value)}
      ></input>

      <br></br>

      <label htmlFor="password">Пароль</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>

      <br></br>

      <button
        onClick={async () => {
          signin()
        }}
      >
        Войти
      </button>
    </div>
  )
}

export default function renderLoginPage() {
  root.render(
    <React.StrictMode>
      <LoginPage />
    </React.StrictMode>
  )
}
