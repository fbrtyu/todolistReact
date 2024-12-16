import { root } from '../index'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

function UserTasksPage() {
  //Тут надо сделать запрос на получение списка задач
  //Если ответ фолз, то очистить токены и отправить на страницу авторизации

  return (
    <div className="userTasks">
      <h1>Список задач пользователя</h1>
      {/* Надо сделать список задач,
      где для каждой задачи можно раскрыть больше и увидеть подробную инфу
      Также у каждой записи списка должны быть кнопки (удалить, изменить, изменить статус) */}
      <div id="listOfTasks">
        <li>
          <ul></ul>
        </li>
      </div>
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
