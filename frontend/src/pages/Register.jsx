import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { InputField } from "../components/InputField";
import Loading from "./Loading";
import useAuth from "../hooks/useAuth";
import { useRecoilState, useRecoilValue } from "recoil";
import { loadingAtom, usernameAtom } from "../store";

export const Register = () => {
  useAuth();
  const navigate = useNavigate();
  const username = useRecoilValue(usernameAtom);
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const [usernameInput, setUsernameInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // send user to home if already logged in
  useEffect(() => {
    if (!loading && username != null) {
      navigate("/home", { replace: true });
    }
  }, [loading, navigate, username]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const link = import.meta.env.VITE_REVIEWLINK + "/auth/register";
      const response = await axios.post(link, {
        email: email,
        password: password,
        username: username,
      });
      if (response.data.success == true) {
        toast.success(response.data.message);
      }
      if (response.data.path) {
        navigate("/" + response.data.path, { replace: true });
      }
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      if (error.response.data.message) toast.error(error.response.data.message);
      else toast.error("An error occurred");
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <InputField
                label={`Email`}
                value={email}
                onchange={(e) => setEmail(e.target.value)}
                placeholder={"xxxxx@iitism.ac.in"}
                type={"email"}
              />
              <InputField
                label={`Username`}
                value={usernameInput}
                onchange={(e) => setUsernameInput(e.target.value)}
                placeholder={"Eg:- John Doe"}
                type={"text"}
              />
              <InputField
                label={`Password`}
                value={password}
                onchange={(e) => setPassword(e.target.value)}
                placeholder={"••••••••"}
                type={"password"}
              />

              <button
                type="submit"
                className="w-full text-white bg-primary-600 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  className="cursor-pointer font-medium text-blue-400 hover:underline dark:text-primary-500"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/login", { replace: true });
                  }}
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
