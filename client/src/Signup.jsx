import axios from "axios";
import { useState } from "react";

export default function Signup() {
    const [data, setData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const signup = async () => {
        if (!data.email || !data.password) {
            return alert("Please fill all fields");
        }

        try {
            setLoading(true);
            await axios.post("http://localhost:5000/api/auth/signup", data);
            alert("Signup successful");
            window.location = "/";
        } catch (err) {
            alert(err.response?.data || "Signup failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md w-80">

                <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

                <input
                    className="w-full p-2 border mb-3 rounded"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    }
                />

                <input
                    className="w-full p-2 border mb-3 rounded"
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />

                <button
                    onClick={signup}
                    className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                >
                    {loading ? "Signing up..." : "Signup"}
                </button>

                <p className="mt-3 text-sm text-center">
                    Already have an account?{" "}
                    <a href="/" className="text-blue-500 hover:underline">
                        Login
                    </a>
                </p>

            </div>
        </div>
    );
}