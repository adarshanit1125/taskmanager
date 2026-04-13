import axios from "axios";
import { useState } from "react";

export default function Login() {
    const [data, setData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const login = async () => {
        if (!data.email || !data.password) {
            return alert("Please fill all fields");
        }

        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:5000/api/auth/login",
                data
            );

            localStorage.setItem("token", res.data.token);
            window.location = "/dashboard";

        } catch (err) {
            alert(err.response?.data || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4">Login</h2>

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
                    onClick={login}
                    className="w-full bg-blue-500 text-white p-2 rounded"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <p className="mt-3 text-sm text-center">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-blue-500">
                        Signup
                    </a>
                </p>
            </div>
        </div>
    );
}