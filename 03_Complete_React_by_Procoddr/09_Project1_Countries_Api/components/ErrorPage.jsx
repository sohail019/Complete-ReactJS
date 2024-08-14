import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {

    const error = useRouteError()

  return (
    <h1>Something Went Wrong: {error.status}</h1>
  )
}
