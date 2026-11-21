import { useState } from 'react'

const Login = ({ loginHandler }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    const success = loginHandler(email.trim(), password)
    setError(success ? '' : 'Email or password is incorrect.')
  }

  const inputClassName = 'w-full rounded-full border-2 border-emerald-500 bg-transparent px-5 py-3 text-base text-white outline-none placeholder:text-gray-400 focus:border-emerald-300 sm:text-lg'

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8 bg-black h-full">
      <section className="w-full max-w-md rounded-xl border-2 border-emerald-600 p-6 sm:p-10">
        <h1 className="mb-6 text-center text-2xl font-semibold text-white">Employee Management</h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <label className="sr-only" htmlFor="login-email">Email</label>
          <input
            id="login-email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className={inputClassName}
            type="email"
            placeholder="Enter your email"
          />
          <label className="sr-only" htmlFor="login-password">Password</label>
          <input
            id="login-password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className={inputClassName}
            type="password"
            placeholder="Enter your password"
          />
          {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
          <button className="rounded-full bg-emerald-500 px-5 py-3 text-lg font-medium text-white hover:bg-emerald-600 active:scale-95">
            Log in
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login
