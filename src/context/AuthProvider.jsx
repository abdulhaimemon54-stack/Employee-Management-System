import { useCallback, useEffect, useMemo, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utilities/LocalStorage'
import { AuthContext } from './AuthContext'

const getTaskStatusCounts = (tasks) => tasks.reduce((counts, task) => {
  if (task.newTask) counts.newTask += 1
  if (task.active) {
    counts.active += 1
    counts.accepted += 1
  }
  if (task.completed) counts.completed += 1
  if (task.failed) counts.failed += 1
  return counts
}, { active: 0, newTask: 0, accepted: 0, completed: 0, failed: 0 })

const normalizeEmployee = (employee) => {
  const tasks = (Array.isArray(employee.tasks) ? employee.tasks : []).map((task) => {
    const completed = Boolean(task.completed)
    const failed = Boolean(task.failed) && !completed
    const active = Boolean(task.active) && !completed && !failed
    const newTask = Boolean(task.newTask) && !active && !completed && !failed

    return {
      ...task,
      taskDescription: task.taskDescription ?? task.description ?? '',
      taskCategory: task.taskCategory ?? task.category ?? '',
      active,
      newTask,
      completed,
      failed,
    }
  })

  return { ...employee, tasks, taskCounts: getTaskStatusCounts(tasks) }
}

const getInitialData = () => {
  let employees = JSON.parse(localStorage.getItem('employees') || 'null')

  if (!Array.isArray(employees)) {
    setLocalStorage()
    employees = getLocalStorage().employees
  }

  return { employees: employees.map(normalizeEmployee) }
}

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(getInitialData)

  useEffect(() => {
    const employees = JSON.stringify(userData.employees)
    if (localStorage.getItem('employees') !== employees) {
      localStorage.setItem('employees', employees)
    }
  }, [userData])

  useEffect(() => {
    const syncEmployees = (event) => {
      if (event.key !== 'employees' || !event.newValue) return

      const employees = JSON.parse(event.newValue)
      if (Array.isArray(employees)) {
        const normalizedEmployees = employees.map(normalizeEmployee)
        if (JSON.stringify(normalizedEmployees) === JSON.stringify(userData.employees)) return
        setUserData({ employees: normalizedEmployees })
      }
    }

    window.addEventListener('storage', syncEmployees)
    return () => window.removeEventListener('storage', syncEmployees)
  }, [userData.employees])

  const createTask = useCallback((employeeId, task) => {
    setUserData((currentData) => ({
      ...currentData,
      employees: currentData.employees.map((employee) => {
        if (String(employee.id) !== String(employeeId)) return employee

        const tasks = [...employee.tasks, task]
        return { ...employee, tasks, taskCounts: getTaskStatusCounts(tasks) }
      }),
    }))
  }, [])

  const updateTaskStatus = useCallback((employeeId, taskIndex, status) => {
    setUserData((currentData) => ({
      ...currentData,
      employees: currentData.employees.map((employee) => {
        if (String(employee.id) !== String(employeeId)) return employee

        const tasks = employee.tasks.map((task, index) => {
          if (index !== taskIndex) return task
          return {
            ...task,
            active: status === 'active',
            newTask: false,
            completed: status === 'completed',
            failed: status === 'failed',
          }
        })

        return { ...employee, tasks, taskCounts: getTaskStatusCounts(tasks) }
      }),
    }))
  }, [])

  const contextValue = useMemo(
    () => ({ userData, setUserData, createTask, updateTaskStatus }),
    [userData, createTask, updateTaskStatus],
  )

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
