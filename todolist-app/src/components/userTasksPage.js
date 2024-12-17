import { root } from '../index'
import React, { useEffect, useState } from 'react'
import { getAllUserTasks } from '../api/getAllUserTasks'
import { createTask } from '../api/createTask'
import { updateTask } from '../api/updateTask'
import { deleteTask } from '../api/deleteTask'

function UserTasksPage() {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem(localStorage.key(0))
  )
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem(localStorage.key(1))
  )

  let [list, setlist] = useState('')

  async function getTasks() {
    let answer = await getAllUserTasks(accessToken, refreshToken)
    if (answer === 501) {
      console.log('Нет списка задач')
    }
    if (answer === 500) {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      window.location.reload()
    } else if (answer === 501) {
    } else {
      let listItems = answer.map((obj) => {
        return (
          <tr key={obj.id}>
            <td>{obj.id}</td>
            <td>{obj.title}</td>
            <td>{obj.description}</td>
            <td>{obj.status}</td>
          </tr>
        )
      })
      setlist(listItems)
    }
  }

  useEffect(() => {
    getTasks()
  }, [])

  function createNewTask() {
    const title = document.getElementById('newTitle').value
    const description = document.getElementById('newDescription').value
    const status = document.getElementById('newStatus').value
    createTask(accessToken, refreshToken, title, description, status)
    getTasks()
  }

  function updTask() {
    const title = document.getElementById('updTitle').value
    const description = document.getElementById('updDescription').value
    const status = document.getElementById('updStatus').value
    const id = document.getElementById('updId').value
    updateTask(accessToken, refreshToken, title, description, status, id)
    getTasks()
  }

  function delTask() {
    const id = document.getElementById('delId').value
    deleteTask(accessToken, refreshToken, id)
    getTasks()
  }

  return (
    <div id="listOfTasks">
      <h1 style={{ textAlign: 'center' }}>Управление задачами</h1>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <form>
          <label for="title">Навзание</label>
          <input name="title" id="newTitle"></input>
          <label for="description">Описание</label>
          <textarea
            name="description"
            id="newDescription"
            style={{ maxWidth: 293 }}
          ></textarea>
          <label for="status">Статус</label>
          <select size={1} name="status" id="newStatus">
            <option>pending</option>
            <option>in-progress</option>
            <option>completed</option>
          </select>
          <br></br>
          <button type="button" onClick={createNewTask}>
            Добавить
          </button>
        </form>

        <form>
          <label for="id">id</label>
          <input name="id" id="updId"></input>
          <label for="title">Навзание</label>
          <input name="title" id="updTitle"></input>
          <label for="description">Описание</label>
          <textarea
            name="description"
            id="updDescription"
            style={{ maxWidth: 293 }}
          ></textarea>
          <label for="status">Статус</label>
          <select size={1} name="status" id="updStatus">
            <option>pending</option>
            <option>in-progress</option>
            <option>completed</option>
          </select>
          <br></br>
          <button type="button" onClick={updTask}>
            Обновить
          </button>
        </form>

        <form>
          <label for="id">id</label>
          <input name="id" id="delId"></input>
          <br></br>
          <button type="button" onClick={delTask}>
            Удалить
          </button>
        </form>
      </div>

      <h1 style={{ textAlign: 'center' }}>Список задач пользователя</h1>

      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          {list}
        </tbody>
      </table>
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
