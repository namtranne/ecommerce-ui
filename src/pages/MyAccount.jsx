import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

  return (
    <div className="w-full h-screen">
      <h2>User Profile</h2>
      <div>
        <strong>ID:</strong> {id}
      </div>
      <div>
        <strong>First Name:</strong> {firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {lastName}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Username:</strong> {username}
      </div>
      <div>
        <strong>Phone Number:</strong> {phoneNumber}
      </div>
      <div>
        <strong>Birth Day:</strong> {birthDay}
      </div>
      <div>
        <strong>Avatar:</strong>{" "}
        {avatar ? <img src={avatar} alt="Avatar" /> : "No Avatar"}
      </div>
      <div>
        <strong>Account Non Expired:</strong> {accountNonExpired ? "Yes" : "No"}
      </div>
      <div>
        <strong>Account Non Locked:</strong> {accountNonLocked ? "Yes" : "No"}
      </div>
      <div>
        <strong>Credentials Non Expired:</strong>{" "}
        {credentialsNonExpired ? "Yes" : "No"}
      </div>
      <div>
        <strong>Enabled:</strong> {enabled ? "Yes" : "No"}
      </div>
      <div>
        <strong>Authorities:</strong>{" "}
        {authorities ? authorities.join(", ") : "No Authorities"}
      </div>
    </div>
  );
}
