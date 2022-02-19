import { EXTRA_COMPONENTS } from "@misago/hooks"
import Message from "./Message"

const register = () => {
  EXTRA_COMPONENTS.TEST.push(Message)
}

export default register