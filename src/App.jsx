import ToDoForms from './Components/ToDoForms'
import ToDoLists from './Components/ToDoLists'


const App = () => {
  return (
    <section>
      <h1 className='text-3xl font-bold text-center mt-10 underline'>Students</h1>
      <div className='flex justify-center space-x-30 w-230 mt-10 ml-60'>
        <ToDoForms />
        <ToDoLists />
      </div>
    </section>

  )
}

export default App