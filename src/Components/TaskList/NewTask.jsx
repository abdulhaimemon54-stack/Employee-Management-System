const NewTask = ({ data, onStatusChange }) => (
  <article className="w-[min(85vw,21rem)] shrink-0 rounded-xl bg-green-700 p-5 text-white sm:w-80">
    <div className="flex items-start justify-between gap-3">
      <span className="rounded-full bg-green-950 px-3 py-1 text-xs">{data.taskCategory}</span>
      <time className="text-right text-sm">{data.taskDate}</time>
    </div>
    <h3 className="mt-5 wrap-break-word text-xl font-semibold">{data.taskTitle}</h3>
    <p className="mt-2 whitespace-pre-wrap wrap-break-word text-sm text-green-50">{data.taskDescription}</p>
    <button
      onClick={() => onStatusChange('active')}
      className="mt-5 w-full rounded bg-white px-3 py-2 font-medium text-green-900 hover:bg-green-100"
    >
      Accept task
    </button>
  </article>
)

export default NewTask
