const LoginWelcomeText = ({ onSignUpClick }) => {
  return (
    <div className="text-zinc-200 text-2xl col-span-full">
      <p className="text-xl">G5Tech</p>
      <p className="text-4xl">Log in to your account</p>
      <p>
        Don't have an account?{" "}
        <button
          onClick={onSignUpClick}
          className="text-blue-500 hover:underline"
        >
          Create one.
        </button>
      </p>
    </div>
  );
};

export default LoginWelcomeText;
