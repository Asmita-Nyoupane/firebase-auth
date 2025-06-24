"use client"; // if using App Router
import { auth, githubProvider, googleProvider } from '@/config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)
    const router = useRouter()

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            router.push('/about')
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log("🚀 ~ handleSignIn ~ error:", error)
            setError(error)
        }

    };

    const handleGoogleSignIn = async () => {
        try {

            await signInWithPopup(auth, googleProvider)
            router.push('/about')
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log("🚀 ~ handleGoogleSignIn ~ error:", error)
            setError(error)
        }

    };
    const handleGithubSignIn = async () => {
        try {

            await signInWithPopup(auth, githubProvider)
            router.push('/about')
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log("🚀 ~ handleGithubSignIn ~ error:", error)
            setError(error)
        }

    };

    return (
        <div className="flex items-center justify-center  text-gray-800 ">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {
                        error && <p className='text-red-600 text-sm'>{error?.message?.split(' (')[0].split('Firebase:')[1] || error}</p>
                    }
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-500">or</div>
                <div className='flex justify-between items-center gap-5'>

                    <button
                        onClick={handleGoogleSignIn}
                        className="mt-4 w-full py-2 px-4 border text-gray-800 border-gray-300 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100"
                    >

                        Google
                    </button>
                    <button
                        onClick={handleGithubSignIn}
                        className="mt-4 w-full py-2 px-4 border text-gray-800 border-gray-300 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100"
                    >

                        Github
                    </button>
                </div>


            </div>
        </div>
    );
}
