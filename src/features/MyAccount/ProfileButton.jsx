import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";


export const ProfileButton = ({buttonIcon: Icon, buttonName, onClick, optionalClassName}) => {
    return (
        <motion.div 
        className={twMerge(
            `flex flex-grow w-44 max-w-44 h-fit max-h-fit p-2 space-x-2 rounded-xl items-center place-content-center
             bg-zinc-800 text-zinc-200 text-xl border-2 border-zinc-800 transition duration-200 hover:cursor-pointer
             hover:scale-105 active:scale-95 hover:bg-zinc-600 hover:border-zinc-600`,
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
