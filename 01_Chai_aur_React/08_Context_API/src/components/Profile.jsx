import { useContext } from 'react'
import { Link } from 'react-router-dom';
import  UserContext  from '../context/UserContext'

export const Profile = () => {
    const {user} = useContext(UserContext)
    
    if(!user) return (
      <>
        <div className="flex justify-center items-center mt-40">
          <h1 className="text-3xl border-2 rounded-lg">
            Please <Link to="/login" className='text-teal-800'> Login </Link>
          </h1>
        </div>
      </>
    );

  return (
    <>
      <div class="flex flex-col justify-center items-center mt-16">
        <div class="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover">
            <img
              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
              class="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
            />
            <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
              <img
                class="h-full w-full rounded-full"
                src="https://avatars.githubusercontent.com/u/69633245?v=4"
                alt=""
              />
            </div>
          </div>
          <div class="mt-16 flex flex-col items-center">
            <h4 class="text-xl font-bold text-navy-700 dark:text-white">
              Username : {user.username}
            </h4>
            <p class="text-base font-normal text-gray-600">Password You Entered: {user.password}</p>
          </div>
          <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
            <div class="flex flex-col items-center justify-center">
              <p class="text-2xl font-bold text-navy-700 dark:text-white">17</p>
              <p class="text-sm font-normal text-gray-600">Posts</p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p class="text-2xl font-bold text-navy-700 dark:text-white">
                9.7K
              </p>
              <p class="text-sm font-normal text-gray-600">Followers</p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <p class="text-2xl font-bold text-navy-700 dark:text-white">
                434
              </p>
              <p class="text-sm font-normal text-gray-600">Following</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
