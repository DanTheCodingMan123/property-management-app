"use client";
import Link from "next/link";

export function LoginButton() {
     return (
          <button type="submit"
               className="
                w-full
                rounded-[10px]
                bg-[#526D82]
                py-1
                text-[32px]
                font-gaegu
                text-white
                hover:opactiy-90
            "
               onClick={() => alert("Login clicked")}
          >
               Sign In
          </button>
     );
}

export function SignUpButton() {
     return (
          <div className="flex items-center justify-center gap-2 font-gaegu text-[22px]">
               <span className="text-gray-600"> Don't have an account?</span>
               <Link
                    href="/signup"
                    className="text-[#1B3C53] underline hover:text-gray-600 "
               >
                    Sign Up
               </Link>
          </div>
     );
}

export function LoginInput(props: { name: string; default: string; type?: string }) {
     return (
          <input
               name={props.name}
               type={props.type || "text"}
               placeholder={props.default}
               className="
                w-full
                rounded-[10px]
                px-2
                py-1
                text-[32px]
                text-[#1B3C53]
                font-gaegu
                bg-[#E6E6E6]
                placeholder:text-[#848484]
                outline-none
            "
          />
     );
}

export function ForgotPasswordButton() {
     return (
          <button
               className="
                font-gaegu
                text-center
                text-[22px]
                text-[#1B3C53]
                hover:underline
            "
               onClick={() => alert("Too Bad!")}
          >
               Forgot password?
          </button>
     );
}

export function LoginBox() {

     async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const email = data.get('email');
          const password = data.get('password');

          const response = await fetch('/api/login', {
               method: 'POST',
               body: data,
          })
          const responsejson = await response.json();
          console.log('Attempted login');
          console.log('email:', responsejson.email);
          console.log('password:', responsejson.password);
     }
     return (
          <div
               className="
                w-100
                bg-[#D9D9D9]
                rounded-[10px]
                shadow-[0_4px_4px_rgba(0,0,0,0.25)]
                px-10
                py-8
                flex
                flex-col
                gap-5
            "
          >
               <h1
                    className="
                m-0
                text-center
                font-gaegu 
                text-[48px]
                leading-none
                tracking-widest 
                text-[#1B3C53]
            "
               >
                    Login
               </h1>

               <SignUpButton />
               <form className="contents" onSubmit={handleSubmit}>
                    <LoginInput name='email' default="email address" type="email" />
                    <LoginInput name='password' default="password" type="password" />
                    <LoginButton />
               </form>
               <ForgotPasswordButton />
          </div>
     );
}