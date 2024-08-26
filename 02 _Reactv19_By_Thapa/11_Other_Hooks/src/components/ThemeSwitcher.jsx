// creating a component
export const ThemeSwitcher = () => {

  return (
    <div
      className={` p-4 h-lvh flex flex-col justify-center items-center `}
    >
      <h1
        className={`my-4 text-xl`}
      >
        Dark Light Mode Website
      </h1>
      <p
        className={`my-4 text-l  `}
      >
        Hello!! My React v19 Fans 👍
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
      >
        Switch
      </button>
    </div>
  );
};
