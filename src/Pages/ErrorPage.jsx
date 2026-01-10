import React from "react";
import { AlertTriangle } from "lucide-react";
import {Link} from 'react-router-dom'


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md border border-black rounded-2xl p-8 text-center">

                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-black">
                        <AlertTriangle className="w-8 h-8 text-black" />
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-black mb-2">404</h1>

                <h2 className="text-xl font-semibold text-black mb-2">
                    Page Not Found
                </h2>

                <p className="text-sm text-gray-700 mb-6">
                    You have entered a wrong route.
                    The page you are looking for does not exist.
                </p>

                <div className="flex flex-col gap-3">
                    <Link
                        to="/"
                        className="py-3 border border-black rounded-full font-semibold text-black transition hover:bg-black hover:text-white"
                    >
                        Go to Home
                    </Link>

                    <Link
                        to="/login"
                        className="py-3 border border-black rounded-full font-semibold text-black transition hover:bg-black hover:text-white"
                    >
                        Go to Login
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;
