"use client"
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from '@/config/firebase';
import { useRouter } from "next/navigation";

const AboutPage = () => {
    const router = useRouter()
    const handleSignOut = () => {
        signOut(auth)
        router.push('/')
    }

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-6">
            {/* Top Header */}
            <div className="flex justify-between items-center mb-12">
                <div className="text-2xl font-bold text-blue-600">
                    {/* Replace with actual logo if available */}
                    MyAppLogo
                </div>
                <button onClick={handleSignOut} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">
                    Sign out
                </button>
            </div>

            {/* About Content */}
            <div className="max-w-2xl mx-auto  text-center">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">{`Welcome ${auth?.currentUser?.displayName || " to Firebase"}`}</h1>
                <p className="text-gray-600">
                    Welcome to MyApp! We’re passionate about building simple and powerful solutions
                    that improve your everyday life. Our mission is to create user-friendly,
                    fast, and beautiful tools with love and care.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
