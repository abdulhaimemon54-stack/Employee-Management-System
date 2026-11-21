const FailedTask = ({ data }) => (
  <article className="w-[min(85vw,21rem)] shrink-0 rounded-xl bg-red-800 p-5 text-white sm:w-80">
    <div className="flex items-start justify-between gap-3">
      <span className="rounded-full bg-red-950 px-3 py-1 text-xs">{data.taskCategory}</span>
      <time className="text-right text-sm">{data.taskDate}</time>
    </div>
    <h3 className="mt-5 wrap-break-word text-xl font-semibold">{data.taskTitle}</h3>
    <p className="mt-2 whitespace-pre-wrap wrap-break-word text-sm text-red-50">{data.taskDescription}</p>
    <p className="mt-5 rounded bg-red-950 px-3 py-2 text-center font-medium">Failed</p>
  </article>
)

export default FailedTask
