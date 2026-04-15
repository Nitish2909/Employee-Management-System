import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localstorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // useEffect(() => {
  //   setLocalStorage()
  // })

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser('admin');
    } else if (email == "user@me.com" && password == "123") {
      setUser('user');
    } else {
      alert("Invalid email and password");
    }
  };

  const data = useContext(AuthContext)

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin@me.com" ? <AdminDashboard /> : <EmployeeDashboard />}

      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  );
};

export default App;
