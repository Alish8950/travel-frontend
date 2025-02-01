import React, { useContext } from "react";
import { logoutCurrentUser } from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { HomePen, WelcomeNoteBg } from "../assets";

const Home = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);

  const logoutUser = async () => {
    try {
      const res = await logoutCurrentUser();
      if (res.statusCode === 200) {
        localStorage.removeItem("userId");
        dispatch({ type: "SET_USER", payload: res.data });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pt-10 px-10 mx-auto w-full flex justify-center h-full">
        <div className="flex justify-center h-full w-full">
          <div className="relative">
            <div className="welcome-card-box-shadow z-[20] max-w-[252px] w-[100%] relative rounded-tr-[26px] bg-gray-shade1 flex flex-col center pt-7 px-4 pb-5 overflow-hidden">
              <div className="font-cursive z-20 text-xl">
                Welcome to journaling!
              </div>
              <div className="z-20">
                Here you can record your experiences and events as and when you
                feel like it. The process is therapeutic and would relieve you
                of stress by offering you a private space to vent over your
                feelings or make logs so that you may manage to stay productive
                as much as you can.
              </div>
              <img
                src={WelcomeNoteBg}
                alt="note"
                className="absolute top-0 left-0 rounded-tr-[26px] z-10"
              />
            </div>
            <div className="absolute top-[250px] right-[-100px]">
              <div className="welcome-card-box-shadow min-h-[280px] max-w-[252px] w-[100%] relative rounded-tr-[26px] bg-gray-shade1 flex flex-col justify-center center pt-7 px-4 pb-5 overflow-hidden">
                <div className="z-[2]">
                  “People who wonder if the glass is half empty or full forget
                  the point. The glass is refillable”
                </div>
                <img
                  src={WelcomeNoteBg}
                  alt="note"
                  className="absolute top-0 left-0 rounded-tr-[26px] z-[1]"
                />
              </div>
            </div>
          </div>
          <div className="z-[30]">
            <img src={HomePen} alt="pen" />
          </div>
          <div className="h-full w-full pb-10 max-w-[580px] max-h-[638px] ml-[-72px]">
            <div className="h-full notebok-linear-gradient  w-full relative notebook-box-shadow rounded-e-2xl">
              <div className="bg-purple-primary h-full w-[55px] absolute left-0 top-0"></div>
              <div className="text-white font-cursive text-3xl flex justify-center items-end h-full pb-[120px]">
                Alish's Travel Journal
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
