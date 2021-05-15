import Todo from './components/Todo'

const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="HTML" />
      <Todo title="CSS" />
      <Todo title="JS" />
      <Todo title="React" />
    </div>
  )
}

export default App
