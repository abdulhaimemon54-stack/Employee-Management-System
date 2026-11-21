import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashBoard = (props) => {
  if (!props.data) return null

  return (
    <main className="min-h-screen bg-[#1c1c1c] p-4 text-white sm:p-6 lg:p-10">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <Tasklist data={props.data} />
    </main>
  );
};

export default EmployeeDashBoard;
