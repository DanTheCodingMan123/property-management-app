import {ForgotPasswordButton, LoginButton, LoginInput, SignUpButton} from "../components/Login"

export default function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="
                w-[400px]
                bg-[#D9D9D9]
                rounded-[10px]
                shadow-[0_4px_4px_rgba(0,0,0,0.25)]
                px-10
                py-8
                flex
                flex-col
                gap-5
            ">
            <h1 className="
                m-0
                text-center
                font-gaegu 
                text-[48px]
                leading-none
                tracking-widest 
                text-[#1B3C53]
            ">
                Login
            </h1>
            <SignUpButton />
            <LoginInput default="email address" type = "email" />
            <LoginInput default="password" type = "password" />
            <LoginButton />
            <ForgotPasswordButton />
            </div>
        </main>
    );
}