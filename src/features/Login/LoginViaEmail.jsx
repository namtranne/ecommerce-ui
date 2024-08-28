import { useState } from "react";


export default function LoginViaEmail({ credentials, setCredentials }) {

  return (
    <div className="col-span-full flex flex-col text-zinc-200 space-y-7">
      <div className="space-y-3">
        <p className="text-2xl m-0 ">Email</p>
        <input
          type="email"
          value={credentials.username}
          onChange={(e) => {
            setCredentials({ ...credentials, username: e.target.value });
          }}
          placeholder="Enter your email"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors
                    hover:border-cyan-400 hover:outline-0
                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
        />
      </div>

      <div className="space-y-3">
        <p className="text-2xl m-0">Password</p>
        <input
          type="password"
          value={credentials.password}
          onChange={(e) => {
            setCredentials({ ...credentials, password: e.target.value });
          }}
          placeholder="Enter your password"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors
                    hover:border-orange-400 hover:outline-0
                    focus:border-orange-300 focus:outline-0 focus:shadow-orange-400 focus:shadow"
        />
      </div>

      <a className="text-blue-500 self-end hover:underline" href="#">
        Forgot your password?
      </a>
    </div>
  );
}
