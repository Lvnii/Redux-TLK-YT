import Home from "../Pages/Home";
import Users from "../Pages/Users";
import { Route, Routes } from "react-router-dom";

const MyRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/users" element={<Users />}/>
        </Routes>
    )
}

export default MyRouter;