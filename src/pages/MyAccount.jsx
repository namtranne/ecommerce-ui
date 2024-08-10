import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MyAccountControlPanel } from "../features/MyAccount/MyAccount-Control-Panel";
import { UserProfile } from "../features/MyAccount/UserProfile";
import { UserAddress } from "../features/MyAccount/UserAddress";
import { isLogin } from "../utils/axios";
import { UserProfileWelcome } from "../features/MyAccount/UserProfile";
import { UserAddressHeader } from "../features/MyAccount/UserAddress";

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
  if (!isLogin) {
    toast.error("You haven't logged in!!!");
    navigate("/login");
  }

  const [selectedIndex, setSelectedIndex] = useState(0);

  const userInfo = { firstName, lastName, email, phoneNumber, birthDay };

  return (
    <div className="flex flex-col w-full h-screen py-32 px-12">
      <div className="relative" style={{marginLeft: '33.33%'}}>
        {selectedIndex === 0 && <UserProfileWelcome firstName={firstName} lastName={lastName} />}
        {selectedIndex === 1 && <UserAddressHeader/>}
      </div>
  
      <div className="flex w-full h-screen items-start pb-32 px-12 pt-12">
        <div className="w-1/3 h-fit flex justify-center">
          <MyAccountControlPanel
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
        <div className="w-2/3 flex flex-row justify-center">
          {selectedIndex === 0 && <UserProfile userInfo={userInfo} />}
  
          {selectedIndex === 1 && <UserAddress />}
        </div>
      </div>
    </div>
  );
   
}
