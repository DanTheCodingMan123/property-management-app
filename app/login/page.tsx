import {
     LoginBox
} from "./components/Login";
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


export default function LoginPage() {
     return (
          <main className="min-h-screen relative">
               <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0"
               >
                    <Image
                         src="/footprints.png"
                         alt="Background"
                         fill
                         className="object-contain"
                         priority // Makes page render this background with priority!!!
                    />
               </div>
               <div className="relative">
                    <Title />

                    <div className="flex pt-5 items-center justify-center">
                         <div className="translate-y-10">
                              <LoginBox />
                         </div>
                    </div>
               </div>

          </main>
     );
}
