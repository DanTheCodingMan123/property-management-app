import {
     LoginBox
} from "./components/Signup";
import Image from "next/image";

function Title() {
     return (
          <header className="flex items-center gap-3 p-3 ">
               <Image src="/logo.png" alt="Logo" width={50} height={65} />
               <h1
                    className="
                m-0
                text-center
                font-gaegu 
                pl-1
                pt-2
                text-[39px]
                leading-none
                tracking-normal 
                text-[#456882]"
               >
                    {" "}
                    Chicken Coop
               </h1>
          </header>
     );
}

export default function SignUpPage() {
    return (<h1> Hello World </h1>);
}