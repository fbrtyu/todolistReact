import { root } from '../index'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { getAllUserTasks } from '../api/getAllUserTasks'

function UserTasksPage() {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem(localStorage.key(0))
  )
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem(localStorage.key(1))
  )

  let [list, setlist] = useState('')

  useEffect(() => {
    async function get() {
      let answer = await getAllUserTasks(accessToken, refreshToken)
      if (answer === 500) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.reload()
      } else {
        let listItems = answer.map((obj) => {
          return (
            <div key={obj.id}>
              <p>Название: {obj.title}</p>
              <p>Описание: {obj.description}</p>
              <p>Статус: {obj.status}</p>
              <br></br>
            </div>
          )
        })
        setlist(listItems)
      }
    }
    get()
  }, [])

  return (
    <div id="listOfTasks">
      <h1>Список задач пользователя</h1>
      {list}
    </div>
  )
}

export default function renderUserTasksPage() {
  root.render(
    <React.StrictMode>
      <UserTasksPage />
    </React.StrictMode>
  )
}
