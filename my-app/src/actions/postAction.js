import axios from "axios";

const API_URL = 'http://localhost:3001/api/v1/user/login'

// Login
const login = async (userData) => {
  const response = await axios.post(API_URL, userData)
    if (response.data.status === 200) {
      localStorage.setItem("token", JSON.stringify(response.data.body.token))
     /* const token = response.data.body.token*/
    }
  return response.data.body.token
}
// Logout 
const logout = () => localStorage.removeItem("token")

const loginService = {
  logout,
  login,
}

export default loginService
export { logout, login } 