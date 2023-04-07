import { useState, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    username: null,
    password: null,
  });

  useEffect(() => {
    if (sessionStorage.getItem("username")) {
      setInfo({
        username: sessionStorage.getItem("username"),
        password: sessionStorage.getItem("password"),
      });
      navigate('/home')
    }
    else{
      navigate('/')
    }
  },[]);

  const [login, setLogin] = useState(null);

  const fillDetails = (arr) => {
    setInfo(arr);
    sessionStorage.setItem("username", arr.username);
    sessionStorage.setItem("password", arr.password);
    navigate("/home");
  };

  return (
    <Routes>
      <Route
        path="/home"
        element={info.username != null ? <Home info={info} /> : null}
      />
      <Route path="/" element={<Login fillDetails={fillDetails} />} />
    </Routes>
  );
}

export default App;
