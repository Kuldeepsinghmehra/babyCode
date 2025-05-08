import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import AddStudent from "./AddStudent"
import StudentDetails from "../Components/StudentDetails"

const AppRoutes =()=>{
    return(
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/add" element={<PrivateRoute><AddStudent /></PrivateRoute>}></Route>
            <Route path="/student/:id" element={<PrivateRoute><StudentDetails /></PrivateRoute>}></Route>
        </Routes>
    )
}
export default AppRoutes