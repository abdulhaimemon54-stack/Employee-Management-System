import { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthContext'

const Tasklist = ({ data }) => {
  const { updateTaskStatus } = useContext(AuthContext)

  return (
    <section className="mt-8">
      <h2 className="mb-3 text-xl font-semibold">Your tasks</h2>
      {data.tasks.length === 0 ? (
        <p className="rounded-lg border border-dashed border-gray-600 p-6 text-center text-gray-300">
          No tasks assigned yet.
        </p>
      ) : (
        <div id="tasklist" className="flex flex-wrap gap-4 pb-4">
          {data.tasks.map((task, index) => {
            const onStatusChange = (status) => updateTaskStatus(data.id, index, status)
            const cardProps = { data: task, onStatusChange }

            if (task.completed) return <CompleteTask key={task.id || index} {...cardProps} />
            if (task.failed) return <FailedTask key={task.id || index} {...cardProps} />
            if (task.active) return <AcceptTask key={task.id || index} {...cardProps} />
            return <NewTask key={task.id || index} {...cardProps} />
          })}
        </div>
      )}
    </section>
  )
}

export default Tasklist
