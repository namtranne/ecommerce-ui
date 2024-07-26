import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CiEdit } from "react-icons/ci";
import { TbPencilCancel } from "react-icons/tb";
import { MdDone } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export const UserProfile = ({ userInfo }) => {
    return (
        <div className="w-full space-y-16">
            <UserProfileWelcome
                firstName={userInfo.firstName}
                lastName={userInfo.lastName}
            >
            </UserProfileWelcome>
            <UserProfileInfo
                userInfo={userInfo}
            >
            </UserProfileInfo>
        </div>
    );
}

const UserProfileInfo = ({ userInfo }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [tempUserInfo, setTempUserInfo] = useState({ ...userInfo });

    useEffect(() => {
        setTempUserInfo(userInfo);
    }, [userInfo]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // Save functionality, possibly send tempUserInfo to backend
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setTempUserInfo({ ...userInfo });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="flex flex-col border-2 border-zinc-100 rounded-3xl shadow-lg shadow-zinc-800 w-full p-8 space-y-5">
            {/* Name */}
            <div className="grid grid-flow-col space-x-4">
                <div className=" space-y-3">
                    <p className="text-2xl m-0 text-zinc-800">First Name</p>
                    <input
                        name="firstName"
                        value={tempUserInfo.firstName}
                        disabled={!isEditing}
                        onChange={handleChange}
                        className="w-full rounded border bg-zinc-100 px-3 py-1.5 transition-colors
                                    hover:border-cyan-400 hover:outline-0
                                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
                    />
                </div>
                <div className=" space-y-3">
                    <p className="text-2xl m-0 text-zinc-800">Last Name</p>
                    <input
                        name="lastName"
                        value={tempUserInfo.lastName}
                        disabled={!isEditing}
                        onChange={handleChange}
                        className="w-full rounded border bg-zinc-100 px-3 py-1.5 transition-colors
                                    hover:border-cyan-400 hover:outline-0
                                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
                    />
                </div>
            </div>

            <div className="grid grid-flow-col space-x-4">
                {/* Email */}
                <div className="space-y-3">
                    <p className="text-2xl m-0 text-zinc-800">Email</p>
                    <input
                        name="email"
                        type="email"
                        value={tempUserInfo.email}
                        disabled={!isEditing}
                        onChange={handleChange}
                        className="w-full rounded border bg-zinc-100 px-3 py-1.5 transition-colors
                                    hover:border-cyan-400 hover:outline-0
                                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
                    />
                </div>

                {/* Phone number */}
                <div className="space-y-3">
                    <p className="text-2xl m-0 text-zinc-800">Phone Number</p>
                    <input
                        name="phoneNumber"
                        type="tel"
                        value={tempUserInfo.phoneNumber}
                        disabled={!isEditing}
                        onChange={handleChange}
                        className="w-full rounded border bg-zinc-100 px-3 py-1.5 transition-colors
                                    hover:border-cyan-400 hover:outline-0
                                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
                    />
                </div>
            </div>

            {/* date of birth */}
            <div className="w-1/2 pr-2 space-y-3">
                <p className="text-2xl m-0 text-zinc-800">Birthday</p>
                <input
                    name="birthDay"
                    type="date"
                    value={tempUserInfo.birthDay}
                    disabled={!isEditing}
                    onChange={handleChange}
                    className="w-full rounded border bg-zinc-100 px-3 py-1.5 transition-colors
                                hover:border-cyan-400 hover:outline-0
                                focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
                />
            </div>

            <div className="flex flex-row relative pt-12 space-x-2 justify-end">
                {isEditing && (<ProfileButton buttonIcon={MdDone} buttonName="Save" onClick={handleSaveClick}></ProfileButton>)}
                {isEditing ? 
                    (<ProfileButton buttonIcon={TbPencilCancel} buttonName="Cancel" onClick={handleCancelClick}></ProfileButton>) : 
                    (<ProfileButton buttonIcon={CiEdit} buttonName="Edit" onClick={handleEditClick}></ProfileButton>)
                }
            </div>
        </div>
    );
}

const UserProfileWelcome = ({firstName, lastName}) => {
    return (
        <h1>
            Welcome, {lastName} {firstName}
        </h1>
    );
}

const ProfileButton = ({buttonIcon: Icon, buttonName, onClick, optionalClassName}) => {
    return (
        <motion.div 
        className={twMerge(
            `flex min-w-32 p-2 space-x-2 rounded-xl items-center place-content-center
             bg-zinc-800 text-zinc-200 text-xl transition duration-200 hover:cursor-pointer
             hover:scale-105 active:scale-95 hover:bg-zinc-600`,
            optionalClassName
        )}
        onClick={onClick}
        >
            <motion.div>
                <Icon/>
            </motion.div>
            <motion.div>
                {buttonName}
            </motion.div>
        </motion.div>
    );
}
