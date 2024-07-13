function LoginWelcomeText() {
  return (
    <div className="text-zinc-200 text-2xl col-span-full">
      <p className="text-xl">G5Tech</p>
      <p className="text-4xl">Log in to your account</p>
      <p>
        Don't have an account?{" "}
        <a className="text-blue-500 hover:underline" href="#">
          Create one.
        </a>
      </p>
    </div>
  );
}

export default LoginWelcomeText;
