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

  const [fieldEmptyErr, setFieldEmptyErr] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (credentials.username.length === 0) {
      toast.error("Email cannot be empty! Please enter a valid email.");
      return;
    }

    if (credentials.password.length === 0) {
      toast.error("Password cannot be empty! Please enter your password.");
      return;
    }

    try {
      setIsLoading(true);
      await loginUser(credentials);
      setIsLoading(false);
      toast.success("Login successfully");
      navigate("/");
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      toast.error(
        "Can not loggin, please check your credentials and try again!"
      );
    }
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
