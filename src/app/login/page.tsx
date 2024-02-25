import React from "react";

const Login = async () => {
    const loginUser = async (formData: FormData) => {
        "use server";
        console.log({ formData });
    };

    return (
        <div>
            <form action={loginUser}>
                <input className='border-slate-500 border-2' name='login' />
                <input className='border-slate-500 border-2' name='password' />
            </form>
        </div>
    );
};

export default Login;
