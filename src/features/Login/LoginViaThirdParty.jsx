import { SiFacebook, SiGoogle } from "react-icons/si";
import LoginOption from "./LoginOption";

export const LoginViaThirdParty = () => {
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
};
