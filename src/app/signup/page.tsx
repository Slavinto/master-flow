import { login, signup } from "./actions";

export default function LoginPage() {
    return (
        <main>
            <form className='flex flex-col gap-2 m-auto my-[140px] px-[60px] py-[30px] border-slate-300 border-[1.4px] rounded-md shadow-md'>
                <div className='flex flex-col'>
                    <label
                        className='text-dark font-medium text-lg'
                        htmlFor='email'
                    >
                        Email:
                    </label>
                    <input
                        className='!bg-white px-4 py-2 outline-none !text-dark shrink-0 grow font-sans border-[1.4px] border-slate-300 rounded-md text-md shadow-sm'
                        id='email'
                        name='email'
                        type='email'
                        required
                    />
                </div>
                <div className='flex flex-col'>
                    <label
                        className='text-dark font-medium text-lg'
                        htmlFor='password'
                    >
                        Password:
                    </label>
                    <input
                        className='px-4 py-2 !bg-white outline-none text-gray shrink-0 grow font-sans border-[1.4px] border-slate-300 rounded-md text-md shadow-sm'
                        id='password'
                        name='password'
                        type='password'
                        required
                    />
                </div>
                <div className='flex gap-2 self-center'>
                    {/* <button formAction={login}>Log in</button> */}
                    <button
                        className='mt-2 btn-form text-dark'
                        formAction={signup}
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </main>
    );
}
