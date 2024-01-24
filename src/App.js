import logo from './logo.svg';
import './App.css';
import TodoTemplate from "./component/todo/TodoTemplate";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Join from "./component/user/Join";
import Login from "./component/user/Login";
import {Route, Routes} from "react-router-dom";
import todoTemplate from "./component/todo/TodoTemplate";

function App() {
    return (
        <>
            <Header/>

            <Routes>
                <Route path='/' element={<TodoTemplate/>}/>
                <Route path='/join' element={<Join/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
