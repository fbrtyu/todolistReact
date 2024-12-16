import './App.css'
import renderRegistrationPage from '../src/components/registrationPage'
import renderLoginPage from '../src/components/loginPage'

// function App() {
//   const [inputLogin, setLogin] = useState('')
//   const [inputPassword, setPassword] = useState('')

//   const [accessToken, setAccessToken] = useState('')
//   const [refreshToken, setRefreshToken] = useState('')

//   useEffect(() => {
//     setAccessToken(localStorage.getItem(localStorage.key(0)))
//     setRefreshToken(localStorage.getItem(localStorage.key(1)))
//   }, [])

//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           document.getElementById('signin').style.display = 'block'
//           document.getElementById('signup').style.display = 'none'
//         }}
//       >
//         Авторизация
//       </button>
//       <button
//         onClick={() => {
//           document.getElementById('signin').style.display = 'none'
//           document.getElementById('signup').style.display = 'block'
//         }}
//       >
//         Регистрация
//       </button>

//       <div className="Form" id="signin">
//         <label for="login">Ваш логин</label>
//         <input type="text" id="login" name="login"></input>
//         <br></br>
//         <br></br>
//         <label for="password">Ваш пароль</label>
//         <input type="password" id="password" name="password"></input>
//         <br></br>
//         <br></br>
//         <button>Войти</button>
//       </div>

//       <div className="Form" id="signup">
//         <label for="login">Ваш логин</label>
//         <input type="text" id="login" name="login"></input>
//         <br></br>
//         <br></br>
//         <label for="password_1">Ваш пароль</label>
//         <input type="password" id="password_1" name="password_1"></input>
//         <br></br>
//         <br></br>
//         <label for="password_2">Повторите ваш пароль</label>
//         <input type="password" id="password_2" name="password_2"></input>
//         <br></br>
//         <br></br>
//         <button>Зарегистрироваться</button>
//       </div>
//     </div>
//   )
// }

function App() {
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

export default App
