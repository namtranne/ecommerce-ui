import { motion } from "framer-motion";
import { LoginViaThirdParty } from "../features/Login/LoginViaThirdParty";
import { LoginButton } from "../features/Login/LoginButton";
import LoginViaEmail from "../features/Login/LoginViaEmail";
import LoginWelcomeText from "../features/Login/LoginWelcomeText";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login({ onSignUpClick, loginUser }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    await loginUser(credentials);
    toast.success("Login successfully");
    navigate("/");
  };

  return (
    <section className="px-4 py-12 min-h-screen flex-wrap">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-2xl grid-flow-dense grid-cols-12 gap-4"
      >
        <LoginWelcomeText onSignUpClick={onSignUpClick}></LoginWelcomeText>
        <LoginViaThirdParty></LoginViaThirdParty>
        <LoginViaEmail
          credentials={credentials}
          setCredentials={setCredentials}
        ></LoginViaEmail>
        <LoginButton handleLogin={handleLogin}></LoginButton>
      </motion.div>
    </section>
  );
}

export default Login;
