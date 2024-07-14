import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { useSignup } from "../hooks/useAuthentication";
import { Spin } from "antd";

function SignUp({ onSignUpClick }) {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    phoneNumber: "",
    birthDay: null,
  });
  const { signUp, isLoading } = useSignup();

  const handleSignup = () => {
    const signUpCredentials = { ...credentials, username: credentials.email };
    signUp(signUpCredentials);
  };

  return (
    <section className="px-4 py-12 w-full min-h-screen flex flex-row">
      <div className="w-1/2">
        <SignUpSideBanner></SignUpSideBanner>
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-2xl grid-flow-dense grid-cols-12 gap-4"
      >
        <SignUpWelcomeText onSignUpClick={onSignUpClick}></SignUpWelcomeText>
        <SignUpInfoForm
          credentials={credentials}
          setCredentials={setCredentials}
        ></SignUpInfoForm>
        <SignUpButton signUp={handleSignup} isLoading={isLoading}>
          Sign Up
        </SignUpButton>
      </motion.div>
    </section>
  );
}

const SignUpWelcomeText = ({onSignUpClick}) => {
  return (
    <div className="col-span-full space-y-0 text-zinc-200">
      <p className=" text-4xl">Join us</p>
      <p className="">
        Already had an account?{" "}
        <button
          onClick={onSignUpClick}
          className="text-blue-500 hover:underline"
        >
          Go to login.
        </button>
      </p>
    </div>
  );
};

const SignUpInfoForm = ({ credentials, setCredentials }) => {
  return (
    <div className="col-span-full flex flex-col text-zinc-200 space-y-6">
      {/* Name */}
      <div className="grid grid-flow-col space-x-4">
        <div className=" space-y-3">
          <p className="text-2xl m-0">First Name</p>
          <input
            placeholder="Enter your first name"
            value={credentials.firstName}
            onChange={(e) =>
              setCredentials({ ...credentials, firstName: e.target.value })
            }
            className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors
                        hover:border-cyan-400 hover:outline-0
                        focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
          />
        </div>
        <div className=" space-y-3">
          <p className="text-2xl m-0">Last Name</p>
          <input
            placeholder="Enter your last name"
            value={credentials.lastName}
            onChange={(e) =>
              setCredentials({ ...credentials, lastName: e.target.value })
            }
            className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors
                        hover:border-cyan-400 hover:outline-0
                        focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-3">
        <p className="text-2xl m-0 ">Email</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors
                    hover:border-cyan-400 hover:outline-0
                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
        />
        <p className="text-sm text-zinc-600 m-0">
          {" "}
          You will use this email to log in.
        </p>
      </div>

      {/* Password */}
      <div className="space-y-3">
        <p className="text-2xl m-0 ">Password</p>
        <input
          type="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          placeholder="Enter your password"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors
                    hover:border-cyan-400 hover:outline-0
                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
        />
      </div>

      {/* Phone number */}
      <div className="space-y-3">
        <p className="text-2xl m-0 ">Phone Number</p>
        <input
          type="tel"
          value={credentials.phoneNumber}
          onChange={(e) =>
            setCredentials({ ...credentials, phoneNumber: e.target.value })
          }
          placeholder="Enter your phone number"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors
                    hover:border-cyan-400 hover:outline-0
                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
        />
      </div>

      {/* date of birth */}
      <div className="space-y-3">
        <p className="text-2xl m-0 ">Birthday</p>
        <input
          type="date"
          value={credentials.birthDay}
          onChange={(e) =>
            setCredentials({ ...credentials, birthDay: e.target.value })
          }
          placeholder="Enter your date of birth"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors
                    hover:border-cyan-400 hover:outline-0
                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
        />
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-3">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            // checked={termsChecked}
            // onChange={(e) => setTermsChecked(e.target.checked)}
            className="form-checkbox h-5 w-5 text-cyan-400 border border-zinc-700 bg-zinc-800 transition-colors
                        hover:border-cyan-400 focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
          />
          <span className="text-sm text-zinc-200">
            I agree to the{" "}
            <a href="/#" className="text-cyan-400 underline">
              Terms and Conditions
            </a>
          </span>
        </label>
      </div>
    </div>
  );
};

const SignUpButton = ({ signUp, isLoading }) => {
  return (
    <a className="col-span-full flex flex-col my-12" href="#">
      <motion.button
        className="bg-gradient-to-r from-amber-400 to-cyan-600 rounded-lg transition duration-0.2 
            hover:scale-105 hover:shadow-cyan-600 hover:shadow active:scale-95"
        onClick={() => signUp()}
      >
        {isLoading ? (
          <Spin />
        ) : (
          <p className="m-0 p-2 text-zinc-200 text-xl font-semibold">Sign up</p>
        )}
      </motion.button>
    </a>
  );
};

const SignUpSideBanner = () => {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="relative">
        {/* Blurred background */}
        <div className="absolute inset-0 z-0 w-full h-full bg-explore-techverse bg-cover bg-center filter blur-lg scale-110 -rotate-1 rounded-lg"></div>
        {/* Image */}
        <div className="relative z-10 -rotate-1 border-4 rounded-lg">
          <img src="src/features/SignUp/Images/signup_banner.png" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
