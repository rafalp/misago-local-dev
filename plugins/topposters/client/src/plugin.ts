import hooks from "@misago/hooks"
import TopPosters from "./TopPosters"

const register = () => {
  hooks.THREADS_ALL_TOP.push(TopPosters)
}

export default register