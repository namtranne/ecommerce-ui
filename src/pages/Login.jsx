import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import LoginOption from "../features/Login/LoginOption";
import { SiGoogle, SiFacebook } from "react-icons/si";

function Login() {
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
                <LoginWelcomeText></LoginWelcomeText>
                <LoginViaThirdParty></LoginViaThirdParty>
                <LoginViaEmail></LoginViaEmail>
                <LoginButton></LoginButton>
            </motion.div>
        </section>
    );
}

const LoginWelcomeText = () => {
    return (
        <div className="text-zinc-200 text-2xl col-span-full">
            <p className="text-xl">G5Tech</p>
            <p className="text-4xl">Log in to your account</p>
            <p>Don't have an account? <a  className="text-blue-500 hover:underline" href="#">Create one.</a></p>
        </div>
    );
}

const LoginViaThirdParty = () => {
    return (
        <>
            <a className="col-span-6 row-span-1" href="#">
                <LoginOption
                    className="
                        max-h-fit
                        text-zinc-200
                        text-xl
                        p-2.5
                        flex
                        justify-center
                        items-center
                        "

                >
                    <SiGoogle></SiGoogle>
                </LoginOption>
            </a>

            <a className="col-span-6 row-span-1" href="#">
                <LoginOption
                    className="
                        max-h-fit
                        text-zinc-200
                        text-xl
                        p-2.5
                        flex
                        justify-center
                        items-center
                        "
                >
                    <SiFacebook></SiFacebook>
                </LoginOption>
            </a>

            <a className="col-span-full" href="#">
                <LoginOption
                    className="
                        max-h-fit
                        text-zinc-200
                        text-xl
                        flex
                        justify-center
                        items-center
                        p-2
                        "
                >
                    <p className="m-0"> Log in with phone number</p>
                </LoginOption>
            </a>
            
            <div className="col-span-full flex flex-row justify-center items-center space-x-4 py-8">
                <span className="bg-zinc-200 flex-1 h-[1px]"></span>
                <p className="m-0 text-zinc-200"> OR </p>
                <span className="bg-zinc-200 flex-1 h-[1px]"></span>
            </div>
        </>
    );
}

const LoginViaEmail = () => {
    return (
        <div className="col-span-full flex flex-col text-zinc-200 space-y-7">
            <div className="space-y-3">
                <p className="text-2xl m-0 ">Email</p>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors
                    hover:border-cyan-400 hover:outline-0
                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
                />
            </div>

            <div className="space-y-3">
                <p className="text-2xl m-0">Password</p>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors
                    hover:border-orange-400 hover:outline-0
                    focus:border-orange-300 focus:outline-0 focus:shadow-orange-400 focus:shadow"
                />
            </div>

            <a className="text-blue-500 self-end hover:underline" href="#">Forgot your password?</a>

        </div>
    );
}

const LoginButton = () => {
    return (
        <a className="col-span-full flex flex-col" href="#">
            <motion.button
            
            className="bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg transition duration-0.2 
            hover:scale-105 hover:shadow-cyan-600 hover:shadow active:scale-95">
            <p className="m-0 p-2 text-zinc-200 text-xl font-semibold">Log in </p>
            </motion.button>
        </a>

    );
}

export default Login;
