import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiEdit } from "react-icons/ci";
import { TbPencilCancel } from "react-icons/tb";
import { MdDone } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export const UserProfile = ({firstName, lastName, email, phoneNumber, birthDay}) => {
    return (
        <div className="w-full space-y-16">
            <UserProfileWelcome
                firstName={firstName}
                lastName={lastName}
            >
            </UserProfileWelcome>
            <UserProfileInfo
                firstName={firstName}
                lastName={lastName}
                email={email}
                phoneNumber={phoneNumber}
                birthDay={birthDay}
            >
            </UserProfileInfo>
        </div>
    );
}

const UserProfileInfo = ({firstName, lastName, email, phoneNumber, birthDay}) => {

    const [isEditing, setIsEditing] = useState(false);

    var tempFirstName = firstName;
    var tempLastName = lastName;
    var tempEmail = email;
    var tempPhoneNumber = phoneNumber;
    var tempBirthDay = birthDay;

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // Save functionality
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        // Cancel functionality
        tempFirstName = firstName;
        tempLastName = lastName;
        tempEmail = email;
        tempPhoneNumber = phoneNumber;
        tempBirthDay = birthDay;
    };

    return (
        <div className="flex flex-col border-2 border-zinc-100 rounded-3xl shadow-lg shadow-zinc-800 w-full p-8 space-y-5">
            {/* Name */}
            <div className="grid grid-flow-col space-x-4">
                <div className=" space-y-3">
                    <p className="text-2xl m-0 text-zinc-800">First Name</p>
                    <input
                        placeholder={tempFirstName}
                        disabled={!isEditing}
                        // value={credentials.firstName}
                        // onChange={(e) =>
                        // setCredentials({ ...credentials, firstName: e.target.value })
                        // }
                        className="w-full rounded border bg-zinc-100 px-3 py-1.5 transition-colors
                                    hover:border-cyan-400 hover:outline-0
                                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
                    />
                </div>
                <div className=" space-y-3">
                    <p className="text-2xl m-0 text-zinc-800">Last Name</p>
                    <input
                        value={tempLastName}
                        disabled={!isEditing}
                        // value={credentials.lastName}
                        // onChange={(e) =>
                        // setCredentials({ ...credentials, lastName: e.target.value })
                        // }
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
                        type="email"
                        placeholder={tempEmail}
                        disabled={!isEditing}
                        // value={credentials.email}
                        // onChange={(e) =>
                        //     setCredentials({ ...credentials, email: e.target.value })
                        // }
                        className="w-full rounded border bg-zinc-100 px-3 py-1.5 transition-colors
                                    hover:border-cyan-400 hover:outline-0
                                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
                    />

                </div>

                {/* Phone number */}
                <div className="space-y-3">
                    <p className="text-2xl m-0 text-zinc-800">Phone Number</p>
                    <input
                        type="tel"
                        placeholder={tempPhoneNumber}
                        disabled={!isEditing}
                        // value={credentials.phoneNumber}
                        // onChange={(e) =>
                        //     setCredentials({ ...credentials, phoneNumber: e.target.value })
                        // }
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
                        type="date"
                        disabled={!isEditing}
                        placeholder={tempBirthDay}
                        // value={credentials.birthDay}
                        // onChange={(e) =>
                        //     setCredentials({ ...credentials, birthDay: e.target.value })
                        // }
                        className="w-full rounded border bg-zinc-100 px-3 py-1.5 transition-colors
                                    hover:border-cyan-400 hover:outline-0
                                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
                    />
            </div>

            <div className="flex flex-row relative pt-12 space-x-2 justify-end">
                {isEditing && (<ProfileButton buttonIcon={MdDone} buttonName="Save" onClick={handleSaveClick}></ProfileButton>)
                }
                {isEditing ? 
                    (<ProfileButton buttonIcon={TbPencilCancel} buttonName="Cancel" onClick={handleCancelClick}></ProfileButton>) : 
                    (<ProfileButton buttonIcon={CiEdit} buttonName="Edit" onClick={handleEditClick}></ProfileButton>)
                }
            </div>

        </div>
    );
}

const UserProfileWelcome = ({firstName, lastName, avatar}) => {
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