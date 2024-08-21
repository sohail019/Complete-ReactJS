import { useParams } from "react-router-dom"

export const User = () => {

    const {userid} = useParams()
    console.log(userid);

  return (
    <div>User : {userid}  </div>
  )
}
