import { useContext, useEffect } from "react";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { getCurrentUser } from "./services/auth.service";
import { UserContext } from "./context/UserContext";
import Header from "./components/Header";

function App() {
  const { dispatch } = useContext(UserContext);

  const getUser = async () => {
    try {
      const res = await getCurrentUser();
      if (res.statusCode === 200) {
        dispatch({ type: "SET_USER", payload: res.data });
        localStorage.setItem("user", JSON.stringify(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div className="bg-primary-background">
        <Header />
        <div className="h-[calc(100vh-80px)]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
