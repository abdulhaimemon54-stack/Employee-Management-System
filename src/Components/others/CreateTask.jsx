import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

const CreateTask = () => {
  const { userData, createTask } = useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [assign, setAssign] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    if (!userData.employees.some((employee) => String(employee.id) === assign)) {
      setMessage('Please select an employee to assign this task.')
      return
    }

    createTask(assign, {
      id: `${Date.now()}`,
      taskTitle: taskTitle.trim(),
      taskDescription: description.trim(),
      taskDate,
      taskCategory: category.trim(),
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    })

    setTaskTitle('')
    setTaskDate('')
    setDescription('')
    setCategory('')
    setAssign('')
    setMessage('Task assigned successfully.')
  }

  const inputClassName = 'w-full rounded border border-gray-500 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-emerald-500'
  const labelClassName = 'mb-1 block text-sm text-gray-300'

  return (
    <section className="mt-7 rounded-lg bg-[#1c1c1c] p-4 sm:p-6">
      <h2 className="mb-5 text-xl font-semibold text-white">Create a task</h2>
      <form onSubmit={submitHandler} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className={labelClassName}>
          Task title
          <input
            required
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            className={inputClassName}
            type="text"
            placeholder="e.g. Make a UI design"
          />
        </label>
        <label className={labelClassName}>
          Due date
          <input
            required
            value={taskDate}
            onChange={(event) => setTaskDate(event.target.value)}
            className={`${inputClassName} scheme-dark`}
            type="date"
          />
        </label>
        <label className={labelClassName}>
          Assign to
          <select
            required
            value={assign}
            onChange={(event) => setAssign(event.target.value)}
            className={inputClassName}
          >
            <option value="" className="bg-[#1c1c1c]">Select an employee</option>
            {userData.employees.map((employee) => (
              <option key={employee.id} value={employee.id} className="bg-[#1c1c1c]">
                {employee.firstName} ({employee.email})
              </option>
            ))}
          </select>
        </label>
        <label className={labelClassName}>
          Category
          <input
            required
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className={inputClassName}
            type="text"
            placeholder="Design, development, etc."
          />
        </label>
        <label className={`${labelClassName} md:col-span-2`}>
          Description
          <textarea
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className={`${inputClassName} min-h-28 resize-y`}
            placeholder="Describe the work to be done"
            rows={4}
          />
        </label>
        <div className="flex flex-col gap-3 md:col-span-2 sm:flex-row sm:items-center">
          <button className="rounded bg-emerald-500 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-600">
            Assign task
          </button>
          {message && <p role="status" className="text-sm text-emerald-300">{message}</p>}
        </div>
      </form>
    </section>
  )
}

export default CreateTask
