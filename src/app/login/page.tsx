import { login, signup } from "./actions";

export default function LoginPage() {
    return (
        <main>
            <form className='flex flex-col gap-8 m-auto py-[30px]'>
                <div className='flex gap-2'>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' name='email' type='email' required />
                </div>
                <div className='flex gap-2'>
                    <label htmlFor='password'>Password:</label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        required
                    />
                </div>
                <div className='flex gap-2 justify-between'>
                    <button formAction={login}>Log in</button>
                    <button formAction={signup}>Sign up</button>
                </div>
            </form>
        </main>
    );
}
