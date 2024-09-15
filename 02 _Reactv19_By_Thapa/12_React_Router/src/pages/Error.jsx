import { NavLink, useRouteError } from "react-router-dom"

export const Error = () => {
  const error = useRouteError()

  console.log(error)
  if(error.status === 404) {
    return (
      <section className="error-section">
        <div className="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/media/0f1c45dcf80e887f41b3c0080660fd37.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">. The page you were looking for could not be found</p>
            {/* <p className="p-b">... Back to Previous Page</p> */}
          </div>
        </div>
        <NavLink className="btn" to="/">Back to Home Page</NavLink>
      </section>
    );
  }
  return (
    <div>The Page you were looking does not exist</div>
  )
}
