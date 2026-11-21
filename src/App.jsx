import { useContext, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashBoard from './Components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './Components/DashBoard/AdminDashBoard'
import { AuthContext } from './context/AuthContext'

const App = () => {
  const [session, setSession] = useState(() => {
    const storedUser = JSON.parse(sessionStorage.getItem('loggedInUser') || 'null')
    return {
      role: storedUser?.role || '',
      employeeEmail: storedUser?.email || storedUser?.data?.email || '',
    }
  })
  const { userData } = useContext(AuthContext)
  const setUser = (role) => setSession((current) => ({
    ...current,
    role,
    employeeEmail: role ? current.employeeEmail : '',
  }))

  const loginHandler = (email, password) => {
    if (email === 'admin@gmail.com' && password === '123') {
      setSession({ role: 'admin', employeeEmail: '' })
      sessionStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return true
    }

    const employee = userData.employees.find(
      (item) => email === item.email && password === item.password,
    )

    if (!employee) return false

    setSession({ role: 'employee', employeeEmail: employee.email })
    sessionStorage.setItem('loggedInUser', JSON.stringify({
      role: 'employee',
      email: employee.email,
    }))
    return true
  }

  const loggedInEmployee = userData.employees.find(
    (employee) => employee.email === session.employeeEmail,
  )

  return (
    <>
      {!session.role && <Login loginHandler={loginHandler} />}
      {session.role === 'admin' && (
        <AdminDashBoard changeUser={setUser} data={{ firstName: 'Hamza' }} />
      )}
      {session.role === 'employee' && loggedInEmployee && (
        <EmployeeDashBoard changeUser={setUser} data={loggedInEmployee} />
      )}
    </>
  )
}

export default App
