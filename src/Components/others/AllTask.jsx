import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const AllTask = () => {
  const { userData } = useContext(AuthContext);

  const columns = [
    { label: 'Employee', value: (employee) => employee.firstName, className: 'text-white' },
    { label: 'New tasks', value: (employee) => employee.taskCounts.newTask, className: 'text-blue-300' },
    { label: 'Active tasks', value: (employee) => employee.taskCounts.active, className: 'text-yellow-300' },
    { label: 'Completed', value: (employee) => employee.taskCounts.completed, className: 'text-white' },
    { label: 'Failed', value: (employee) => employee.taskCounts.failed, className: 'text-red-300' },
  ]

  return (
    <section className="mt-5 rounded-lg bg-[#1c1c1c] p-4 sm:p-5">
      <h2 className="mb-3 text-xl font-semibold text-white">Team task summary</h2>
      <div className="overflow-x-auto">
        <div className="min-w-155">
          <div className="mb-2 grid grid-cols-5 gap-3 rounded bg-emerald-700 px-4 py-3 text-sm font-medium text-white sm:text-base">
            {columns.map((column) => <span key={column.label}>{column.label}</span>)}
          </div>
          {userData.employees.map((employee) => (
            <div key={employee.id} className="mb-2 grid grid-cols-5 gap-3 rounded border border-emerald-700 px-4 py-3 text-sm sm:text-base">
              {columns.map((column) => (
                <span key={column.label} className={column.className}>{column.value(employee)}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <h3 className="mb-3 mt-6 text-lg font-semibold text-white">Assigned tasks</h3>
      <div className="space-y-3">
        {userData.employees.flatMap((employee) =>
          employee.tasks.map((task, index) => {
            const status = task.completed
              ? 'Completed'
              : task.failed
                ? 'Failed'
                : task.active
                  ? 'Active'
                  : 'New'

            return (
              <article
                key={`${employee.id}-${task.id || index}`}
                className="rounded border border-gray-700 bg-black/30 p-4 text-white"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="wrap-break-word font-medium">{task.taskTitle}</h4>
                    <p className="mt-1 text-sm text-gray-300">
                      Assigned to {employee.firstName} · {task.taskCategory} · Due {task.taskDate}
                    </p>
                  </div>
                  <span className="rounded bg-emerald-800 px-3 py-1 text-sm">{status}</span>
                </div>
                {task.taskDescription && (
                  <p className="mt-2 whitespace-pre-wrap wrap-break-word text-sm text-gray-400">
                    {task.taskDescription}
                  </p>
                )}
              </article>
            )
          }),
        )}
        {userData.employees.every((employee) => employee.tasks.length === 0) && (
          <p className="rounded border border-dashed border-gray-600 p-4 text-sm text-gray-400">
            No tasks have been assigned yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default AllTask;
