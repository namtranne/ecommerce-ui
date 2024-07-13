import React, { createContext, useState } from "react";
import { motion } from "framer-motion";
import LoginWelcomeText from "../features/Login/LoginWelcomeText";
import { LoginViaThirdParty } from "../features/Login/LoginViaThirdParty";
import { LoginViaUsername } from "../features/Login/LoginViaUsername";
import { LoginButton } from "../features/Login/LoginButton";
import { useLogin } from "../hooks/useAuthentication";

const LoginContext = createContext();

function Login() {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const { login, isLoading } = useLogin();

  const handleLogin = () => {
    login(userCredentials);
  };

  return (
    <section className="px-4 py-12 bg-gradient-to-r from-zinc-950 to-zinc-800 min-h-screen">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-2xl grid-flow-dense grid-cols-12 gap-4"
      >
        <LoginWelcomeText />
        <LoginViaThirdParty />
        <LoginViaUsername
          userCredentials={userCredentials}
          setUserCredentials={setUserCredentials}
        />
        <LoginButton handleLogin={handleLogin} isLoading={isLoading} />
      </motion.div>
    </section>
  );
}

export default Login;
