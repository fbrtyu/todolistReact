import { root } from '../index'
import React from 'react'
import { deleteUser } from '../api/deleteUser'

async function delUser() {
  let answer = await deleteUser(
    document.getElementById('login').value,
    document.getElementById('password').value
  )
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  console.log(answer)
}

function UserDeletePage() {
  return (
    <div className="Form">
      <h1>Удаление пользователя</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label for="login">Логин</label>
        <input name="login" id="login"></input>
        <label for="password">Пароль</label>
        <input name="password" id="password"></input>
        <br></br>
        <button type="button" onClick={delUser}>
          Удалить пользователя
        </button>
      </div>
    </div>
  )
}

export default function renderUserDeletePage() {
  root.render(
    <React.StrictMode>
      <UserDeletePage />
    </React.StrictMode>
  )
}
