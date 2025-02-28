import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
  const {user, ready} = useContext(UserContext);

    return (
      <div className="items-center my-auto py-32 lg:py-0">
            <div className="flex flex-col my-auto items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="rounded-lg border bg-white text-gray-800 shadow-xl md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 mx-auto justify-center">
                        {ready && user ? (
                          <>
                            Signed in as {user?.name} <br />
                            <button className="inline-flex gap-2 w-full btn">Sign out</button>
                          </>
                        ) : (
                          <>
                            <h2 className="mb-2 text-lg font-semibold">Entre com sua conta no Discord</h2>
                            <a href="http://localhost:3000/login">
                              <button className="inline-flex gap-2 w-full btn">
                                <span>Login com Discord</span>
                                <FaDiscord />
                              </button>
                            </a>
                          </>
                        )}
                    </div>
                </div>
            </div>
      </div>
    );
  }
  