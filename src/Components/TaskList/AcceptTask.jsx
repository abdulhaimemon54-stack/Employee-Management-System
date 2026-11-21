const AcceptTask = ({ data, onStatusChange }) => (
  <article className="w-[min(85vw,21rem)] shrink-0 rounded-xl bg-amber-700 p-5 text-white sm:w-80">
    <div className="flex items-start justify-between gap-3">
      <span className="rounded-full bg-amber-950 px-3 py-1 text-xs">{data.taskCategory}</span>
      <time className="text-right text-sm">{data.taskDate}</time>
    </div>
    <h3 className="mt-5 wrap-break-word text-xl font-semibold">{data.taskTitle}</h3>
    <p className="mt-2 whitespace-pre-wrap wrap-break-word text-sm text-amber-50">{data.taskDescription}</p>
    <div className="mt-5 flex flex-col gap-2 sm:flex-row">
      <button
        onClick={() => onStatusChange('completed')}
        className="flex-1 rounded bg-emerald-500 px-2 py-2 text-sm font-medium hover:bg-emerald-600"
      >
        Mark complete
      </button>
      <button
        onClick={() => onStatusChange('failed')}
        className="flex-1 rounded bg-red-600 px-2 py-2 text-sm font-medium hover:bg-red-700"
      >
        Mark failed
      </button>
    </div>
  </article>
)

export default AcceptTask
