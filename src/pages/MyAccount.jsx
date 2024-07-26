import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {MyAccountControlPanel} from "../features/MyAccount/MyAccount-Control-Panel";
import { UserProfile } from "../features/MyAccount/UserProfile";

export default function MyAccount() {
  const {
    accountNonExpired,
    accountNonLocked,
    authorities,
    avatar,
    birthDay,
    credentialsNonExpired,
    email,
    enabled,
    firstName,
    id,
    lastName,
    password,
    phoneNumber,
    username,
  } = useContext(UserContext) || {};
  const navigate = useNavigate();
  const isUserLoggedIn = username != null && username != undefined;
  if (!isUserLoggedIn) {
    toast.error("You haven't logged in!!!");
    navigate("/login");
  }

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex w-full h-screen items-center py-32 px-12">
      <div className="w-1/3 h-fit flex justify-center">
        <MyAccountControlPanel selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}></MyAccountControlPanel>
      </div>
      <div className="w-2/3 flex justify-center">
        {
          selectedIndex === 0 && 
          <UserProfile 
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNumber={phoneNumber}
            birthDay={birthDay}
          >
          </UserProfile>
        }
      </div>

    </div>
  );
}
