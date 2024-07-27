import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {MyAccountControlPanel} from "../features/MyAccount/MyAccount-Control-Panel";
import { UserProfile } from "../features/MyAccount/UserProfile";
import { UserAddress } from "../features/MyAccount/UserAddress";

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

  const userInfo = { firstName, lastName, email, phoneNumber, birthDay };

  const testAddressesInfo = {
    addresses: [
      {receiver:" Đẹp Văn Trai ", tel: "(+84) 0123456789", 
        location: {street: "227 Nguyễn Văn Cừ", district: "Phường 4, Quận 5, Thành phố Hồ Chí Minh"},
        postal: "500000" },
  
      {receiver:" Bùi Vũ Bảo Minh ", tel: "(+84) 9876543210", 
        location: {street: "601 Cách Mạng Tháng 8", district: "Phường 15, Quận 10, Thành phố Hồ Chí Minh"},
        postal: "500000"
      },
  
      {receiver:" Nguyễn Thị Xinh Gái ", tel: "(+84) 0123456789", 
        location: {street: "227 Nguyễn Văn Cừ", district: "Phường 4, Quận 5, Thành phố Hồ Chí Minh"},
        postal: "500000"
      }
    ],

    defaultAddress: 0,
  }

  const [addressesInfo, setAddressesInfo] = useState(testAddressesInfo);
  
  return (
    <div className="flex w-full h-screen items-center py-32 px-12">
      <div className="w-1/3 h-fit flex justify-center">
        <MyAccountControlPanel selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}></MyAccountControlPanel>
      </div>
      <div className="w-2/3 flex flex-row justify-center self-start">
        {
          selectedIndex === 0 && 
          <UserProfile 
            userInfo={userInfo}
          >
          </UserProfile>
        }

        {
          selectedIndex === 1 &&
          <UserAddress addressesInfo={addressesInfo} setAddressesInfo={setAddressesInfo}>

          </UserAddress>
        }
      </div>

    </div>
  );
}
