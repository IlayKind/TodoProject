import {useSelector} from "react-redux"
import {userSelector} from "../store/Selector";


export function useAuth () {
  const {email, token, id} = useSelector(userSelector)

  return {
    isAuth: !!email,
    email,
    token,
    id
  }
}