"use client";
import Link from "next/link";
import { useState } from "react";

export function SignupInput(props: { name: string; placeholder: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
     return (
          <input
               name={props.name}
               type={props.type || "text"}
               placeholder={props.placeholder}
               value={props.value}
               onChange={props.onChange}
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

export function RoleSelector({ userRole, setUserRole }: { userRole: "landlord" | "tenant" | null; setUserRole: (role: "landlord" | "tenant" | null) => void }) {
     return (
          <div className="flex flex-col gap-3">
               <label className="font-gaegu text-[22px] text-[#1B3C53]">I am a:</label>
               <div className="flex gap-4">
                    <button
                         type="button"
                         onClick={() => setUserRole(userRole === "landlord" ? null : "landlord")}
                         className={`
                         flex-1
                         px-4
                         py-2
                         rounded-[8px]
                         font-gaegu
                         text-[22px]
                         transition-all
                         ${userRole === "landlord"
                              ? 'bg-[#526D82] text-white'
                              : 'bg-white border-2 border-[#526D82] text-[#526D82] hover:bg-[#F0F0F0]'
                         }
                    `}
                    >
                         Landlord
                    </button>
                    <button
                         type="button"
                         onClick={() => setUserRole(userRole === "tenant" ? null : "tenant")}
                         className={`
                         flex-1
                         px-4
                         py-2
                         rounded-[8px]
                         font-gaegu
                         text-[22px]
                         transition-all
                         ${userRole === "tenant"
                              ? 'bg-[#526D82] text-white'
                              : 'bg-white border-2 border-[#526D82] text-[#526D82] hover:bg-[#F0F0F0]'
                         }
                    `}
                    >
                         Tenant
                    </button>
               </div>
          </div>
     );
}

export function JoinNowButton({ isDisabled }: { isDisabled: boolean }) {
     return (
          <button type="submit"
               disabled={isDisabled}
               className={`
                w-full
                rounded-[10px]
                py-1
                text-[32px]
                font-gaegu
                text-white
                transition-opacity
                ${isDisabled 
                     ? 'bg-gray-400 cursor-not-allowed opacity-60' 
                     : 'bg-[#526D82] hover:opacity-90'
                }
            `}
               onClick={() => alert("Account Created")}
          >
               Join Now!
          </button>
     );
}

export function SignupBox() {
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [passwordConfirm, setPasswordConfirm] = useState("");
     const [userRole, setUserRole] = useState<"landlord" | "tenant" | null>(null);

     const isFormComplete = 
          firstName.trim() !== "" &&
          lastName.trim() !== "" &&
          email.trim() !== "" &&
          password.trim() !== "" &&
          passwordConfirm.trim() !== "" &&
          userRole !== null;

     async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
          event.preventDefault();
          console.log({
               firstName,
               lastName,
               email,
               password,
               passwordConfirm,
               userRole,
          });
     }

     return (
          <form onSubmit={handleSubmit}>
               <div
                    className="
                    w-full
                    max-w-[500px]
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
                         Sign Up
                    </h1>
               <div className = "flex gap-4">
                    {/* First Name */}
                    <div className="flex flex-col gap-2">
                         <label className="font-medium text-[#1B3C53]">First Name</label>
                         <input
                              type="text"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              className="
                              w-full
                              px-4
                              py-2
                              border-2
                              border-[#526D82]
                              rounded-[8px]
                              focus:outline-none
                              focus:border-[#1B3C53]
                         "
                              placeholder="Enter your first name"
                         />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col gap-2">
                         <label className="font-medium text-[#1B3C53]">Last Name</label>
                         <input
                              type="text"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              className="
                              w-full
                              px-4
                              py-2
                              border-2
                              border-[#526D82]
                              rounded-[8px]
                              focus:outline-none
                              focus:border-[#1B3C53]
                         "
                              placeholder="Enter your last name"
                         />
                    </div>
               </div>
               

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                         <label className="font-medium text-[#1B3C53]">Email Address</label>
                         <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="
                              w-full
                              px-4
                              py-2
                              border-2
                              border-[#526D82]
                              rounded-[8px]
                              focus:outline-none
                              focus:border-[#1B3C53]
                         "
                              placeholder="Enter your email address"
                         />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-2">
                         <label className="font-medium text-[#1B3C53]">Password</label>
                         <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="
                              w-full
                              px-4
                              py-2
                              border-2
                              border-[#526D82]
                              rounded-[8px]
                              focus:outline-none
                              focus:border-[#1B3C53]
                         "
                              placeholder="Enter your password"
                         />
                    </div>

                    {/* Password Confirmation */}
                    <div className="flex flex-col gap-2">
                         <label className="font-medium text-[#1B3C53]">Confirm Password</label>
                         <input
                              type="password"
                              value={passwordConfirm}
                              onChange={(e) => setPasswordConfirm(e.target.value)}
                              className="
                              w-full
                              px-4
                              py-2
                              border-2
                              border-[#526D82]
                              rounded-[8px]
                              focus:outline-none
                              focus:border-[#1B3C53]
                         "
                              placeholder="Confirm your password"
                         />
                    </div>

                    {/* Role Selection */}
                    <div className="flex flex-col gap-3">
                         <label className="font-medium text-[#1B3C53]">I am a:</label>
                         <div className="flex gap-4">
                              <button
                                   type="button"
                                   onClick={() => setUserRole(userRole === "landlord" ? null : "landlord")}
                                   className={`
                                   flex-1
                                   px-4
                                   py-2
                                   rounded-[8px]
                                   font-medium
                                   transition-all
                                   ${userRole === "landlord"
                                        ? 'bg-[#526D82] text-white'
                                        : 'bg-white border-2 border-[#526D82] text-[#526D82] hover:bg-[#F0F0F0]'
                                   }
                              `}
                              >
                                   Landlord
                              </button>
                              <button
                                   type="button"
                                   onClick={() => setUserRole(userRole === "tenant" ? null : "tenant")}
                                   className={`
                                   flex-1
                                   px-4
                                   py-2
                                   rounded-[8px]
                                   font-medium
                                   transition-all
                                   ${userRole === "tenant"
                                        ? 'bg-[#526D82] text-white'
                                        : 'bg-white border-2 border-[#526D82] text-[#526D82] hover:bg-[#F0F0F0]'
                                   }
                              `}
                              >
                                   Tenant
                              </button>
                         </div>
                    </div>

                    {/* Join Now Button */}
                    <JoinNowButton isDisabled={!isFormComplete} />
               </div>
          </form>
     );
}