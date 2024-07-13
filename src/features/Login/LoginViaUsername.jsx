export const LoginViaUsername = ({ userCredentials, setUserCredentials }) => {
  return (
    <div className="col-span-full flex flex-col text-zinc-200 space-y-7">
      <div className="space-y-3">
        <p className="text-2xl m-0 ">Username</p>
        <input
          type="text"
          placeholder="Enter your username"
          value={userCredentials.username}
          onChange={(e) => {
            setUserCredentials({
              ...userCredentials,
              username: e.target.value,
            });
          }}
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors
                    hover:border-cyan-400 hover:outline-0
                    focus:border-cyan-400 focus:outline-0 focus:shadow-cyan-400 focus:shadow"
        />
      </div>

      <div className="space-y-3">
        <p className="text-2xl m-0">Password</p>
        <input
          type="password"
          placeholder="Enter your password"
          value={userCredentials.password}
          onChange={(e) => {
            setUserCredentials({
              ...userCredentials,
              password: e.target.value,
            });
          }}
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
};
