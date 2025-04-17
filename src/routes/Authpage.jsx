import { useState } from "react";
import Image from "../components/Image";

function Authpage() {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-4xl shadow-md">
        <Image path={"/general/logo.png"} width={36} height={36} />
        <h1>{isRegister ? "Create an account" : "Login to your account"}</h1>
        {isRegister ? (
          <form className="w-full flex flex-col gap-4" key={"register"}>
            <div className="flex flex-col gap-2">
              {/* formGroup */}
              <label className="text-sm" htmlFor="username">
                Username
              </label>
              <input
                className="p-4 border-2 border-[#e0e0e0] rounded-2xl"
                type="username"
                placeholder="username"
                required
                name="username"
              />
            </div>
            <div className="flex flex-col gap-2">
              {/* formGroup */}
              <label className="text-sm" htmlFor="displayName">
                Name
              </label>
              <input
                className="p-4 border-2 border-[#e0e0e0] rounded-2xl"
                type="displayName"
                placeholder="Name"
                required
                name="displayName"
              />
            </div>
            <div className="flex flex-col gap-2">
              {/* formGroup */}
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="p-4 border-2 border-[#e0e0e0] rounded-2xl"
                type="email"
                placeholder="Email"
                required
                name="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              {/* formGroup */}
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                className="p-4 border-2 border-[#e0e0e0] rounded-2xl"
                type="password"
                placeholder="password"
                required
                name="password"
              />
            </div>
            <button
              className="bg-[#e50829] p-4 border-none rounded-4xl text-white cursor-pointer font-bold"
              type="submit"
            >
              Register
            </button>
            <p
              className="text-sm text-center cursor-pointer"
              onClick={() => setIsRegister(false)}
            >
              {`Already have an account?`} <b>Login</b>
            </p>
            {error && <p className="text-[#e50829]">{error}</p>}
          </form>
        ) : (
          <form className="w-full flex flex-col gap-4" key={"login"}>
            <div className="flex flex-col gap-2">
              {/* formGroup */}
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="p-4 border-2 border-[#e0e0e0] rounded-2xl"
                type="email"
                placeholder="Email"
                required
                name="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              {/* formGroup */}
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                className="p-4 border-2 border-[#e0e0e0] rounded-2xl"
                type="password"
                placeholder="password"
                required
                name="password"
              />
            </div>
            <button
              className="bg-[#e50829] p-4 border-none rounded-4xl text-white cursor-pointer font-bold"
              type="submit"
            >
              Login
            </button>
            <p
              className="text-sm text-center cursor-pointer"
              onClick={() => setIsRegister(true)}
            >
              {`Don't have an account?`} <b>Register</b>
            </p>
            {error && <p className="text-[#e50829]">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

export default Authpage;
