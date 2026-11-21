const TaskListNumber = ({ data }) => {
  const summaries = [
    { label: 'New tasks', count: data.taskCounts.newTask, color: 'bg-blue-600' },
    { label: 'Active', count: data.taskCounts.active, color: 'bg-amber-600' },
    { label: 'Completed', count: data.taskCounts.completed, color: 'bg-emerald-600' },
    { label: 'Failed', count: data.taskCounts.failed, color: 'bg-red-600' },
  ]

  return (
    <section aria-label="Task summary" className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {summaries.map((summary) => (
        <div key={summary.label} className={`${summary.color} rounded-xl p-4 sm:p-6`}>
          <p className="text-2xl font-semibold sm:text-3xl">{summary.count}</p>
          <h2 className="mt-1 text-sm font-medium sm:text-lg">{summary.label}</h2>
        </div>
      ))}
    </section>
  )
}

export default TaskListNumber
