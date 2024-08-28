import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../features/CustomerSupport/window.module.css";
import { MessageFilled, QuestionCircleFilled } from "@ant-design/icons";
import FAQ from "../features/CustomerSupport/FAQ";
import ChatBox from "../features/CustomerSupport/ChatBox";

export const tabs = [
  {
    icon: <QuestionCircleFilled color="red" />,
    label: "FAQ",
    content: <FAQ></FAQ>,
  },
  { icon: <MessageFilled />, label: "Live Chat Support", content: <ChatBox /> },
];
export default function CustomerSupport() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center bg-slate-600">
      <div className={styles.window}>
        <div className="w-[900px] flex flex-col">
          <nav className={styles.nav}>
            <div className={styles.ul}>
              {tabs.map((item) => (
                <div
                  key={item.label}
                  className={`${styles.li} ${
                    item === selectedTab ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedTab(item)}
                >
                  <p className="mb-0 font-bold text-lg ">
                    {item.icon} {item.label}
                  </p>
                  {item === selectedTab ? (
                    <motion.div
                      className={styles.underline}
                      layoutId="underline"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </nav>
          <main className={styles.main}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {selectedTab ? selectedTab.content : "😋"}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
