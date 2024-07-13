import { motion } from "framer-motion";
import { CiLogin } from "react-icons/ci";
import { LoginViaThirdParty } from "../features/Login/LoginViaThirdParty";
import { LoginButton } from "../features/Login/LoginButton";
import LoginViaEmail from "../features/Login/LoginViaEmail";
import LoginWelcomeText from "../features/Login/LoginWelcomeText";
import { useLogin } from "../hooks/useAuthentication";
import { useState } from "react";

function Login({ onSignUpClick }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { login, isLoading } = useLogin();

  const handleLogin = () => {
    login(credentials);
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
        <LoginButton
          handleLogin={handleLogin}
          isLoading={isLoading}
        ></LoginButton>
      </motion.div>
    </section>
  );
}

export default Login;
