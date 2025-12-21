
'use client';

export function LoginButton() {
    return (<div className="flex items-center justify-center">
        <button className = "font-gaegu text-lg pt-10" onClick = {() => alert("Login clicked")}>Login</button>
    </div>)
}


export function LoginInput (props: {label: string, type?: string}) {
    return (
        <label className="flex font-gaegu items-center justify-center text-lg gap-3 pb-10"> {props.label}
            <input className = "outline-solid rounded-lg font-gaegu px-3 py-2" type={props.type || 'text'}></input>
        </label>
    )

}