import React from "react";
import { Lock } from "lucide-react";
import {Link} from 'react-router-dom';


const LockPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md border border-black rounded-2xl p-8 text-center">

                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-black">
                        <Lock className="w-8 h-8 text-black" />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-black mb-2">
                    Access Restricted
                </h1>

                <p className="text-sm text-gray-700 mb-6">
                    You must be logged in to access this page.
                    Please log in first to continue.
                </p>

                <Link
                    to="/login"
                    className="inline-block w-full py-3 border border-black rounded-full font-semibold text-black transition hover:bg-black hover:text-white"
                >
                    Go to Login
                </Link>

            </div>
        </div>
    );
};

export default LockPage;
