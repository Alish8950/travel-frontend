import { useContext, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { getCurrentUser } from "./services/auth.service";
import { UserContext } from "./context/UserContext";
import Header from "./components/Header";

function App() {
  const { dispatch } = useContext(UserContext);

  const getUser = async (localId) => {
    try {
      const response = await getCurrentUser(localId);
      if (response.statusCode === 200) {
        dispatch({ type: "SET_USER", payload: response.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const localId = localStorage.getItem("userId");
    if (!localId) {
      return;
    }
    getUser(localId);
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
