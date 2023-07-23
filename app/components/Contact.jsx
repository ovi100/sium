// "use client";
import { useForm } from "react-hook-form";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const api_url = "http://localhost:4000/";
  const api_url = "https://api-portfolio-pfu4.onrender.com/";

  const formSubmit = (data) => {
    try {
      console.log(data);
      fetch(api_url + "contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.status) {
            let message = data.message;
            toast.success(message, {
              hideProgressBar: true,
              theme: "colored",
            });
          } else {
            let message = data.message;
            toast.error(message, {
              hideProgressBar: true,
              theme: "colored",
            });
          }
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-20">
      <ToastContainer transition={Slide} />
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
          contact
        </div>
        <div className="line bg-[#333] w-[80px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[40px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto mt-10">
        <div className="text-info">
          <div className="phone flex gap-5 mb-4">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <div className="text text-[#f5f5f5] text-lg">+8801921208964</div>
          </div>
          <div className="address flex gap-5 mb-4">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <div className="text text-[#f5f5f5] text-lg">
              164/c east kuril, vatara road no: 2,Dhaka 1229
            </div>
          </div>
          <div className="email flex gap-5">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="text text-[#f5f5f5] text-lg">
              ashiqul.islam3@northsouth.edu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
