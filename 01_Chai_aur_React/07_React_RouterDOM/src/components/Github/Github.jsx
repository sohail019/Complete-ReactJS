import { useEffect, useState } from "react";

export const Github = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("githubData");
    return savedData ? JSON.parse(savedData) : {};
  });
  const [username, setUsername] = useState("");

  //   useEffect(() => {
  //     const username = "sohail019"
  //     fetch(`https://api.github.com/users/${username}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  //   const fetchDataFromGithub = () => {

  //       const username = "sohail019";
  //           fetch(`https://api.github.com/users/${username}`)
  //           .then((res) => res.json())
  //           .then((data) => console.log(data));
  //     }

  const onFormSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        localStorage.setItem("githubData", JSON.stringify(data));
      });
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("githubData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <form
          className="flex justify-center items-center w-1/2 py-12"
          onSubmit={onFormSubmit}
        >
          <label
            htmlFor="Username"
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600"
          >
            <input
              type="text"
              id="username"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Username"
              onChange={handleInputChange}
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Username
            </span>
          </label>

          <button className="outline-none bg-orange-700 text-white px-3 py-0.5 shrink-0">
            Fetch
          </button>
        </form>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={data.avatar_url}
              alt="Github Profile Photo"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.name}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.bio}
            </p>
            <a
              href={data.html_url}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-700 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
