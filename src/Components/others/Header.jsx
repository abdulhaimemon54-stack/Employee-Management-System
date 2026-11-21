const Header = (props) => {
  const logOutUser = () => {
    sessionStorage.removeItem("loggedInUser");
    props.changeUser('')
  };

  return (
    <header className="flex flex-wrap items-end justify-between gap-4 text-white">
      <h1 className="text-xl font-medium sm:text-3xl">
        Hello, <span className="text-2xl font-semibold sm:text-3xl">{props.data?.firstName || 'Admin'} 👋</span>
      </h1>

      <button
        onClick={logOutUser}
        className="rounded bg-red-600 px-5 py-2 text-base font-medium text-white hover:bg-red-700 active:scale-95 sm:text-lg"
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;
