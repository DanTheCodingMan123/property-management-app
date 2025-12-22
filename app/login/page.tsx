import {ForgotPasswordButton, LoginButton, LoginInput, SignUpButton} from "../components/Login"
import Image from "next/image";



function Title() {

    return (
        <header className="flex items-center gap-3 ">
            <Image src="/logo.png" alt="Logo" width={55} height={68}/>
            <h1 className="
                m-0
                text-center
                font-gaegu 
                pl-2
                pt-2
                text-[39px]
                leading-none
                tracking-normal 
                text-[#456882]" > Chicken Coop</h1>
        </header>
    )
}


function LoginBox() {
    return (<div className="
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
            </div>)
       
}


export default function LoginPage() {
    return (
        <main className="min-h-screen">
            <div className="relative">
                <Title />
            </div>
            
            <div className="flex pt-5 items-center justify-center">
                <LoginBox />
            </div>
            
        </main>
    );
}