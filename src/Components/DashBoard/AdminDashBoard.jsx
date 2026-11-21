
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashBoard = (props) => {
  return (
    <main className="min-h-screen w-full bg-black p-4 sm:p-6 lg:p-10">
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AllTask />
    </main>
  )
}

export default AdminDashBoard