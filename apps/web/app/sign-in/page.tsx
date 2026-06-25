"use client";

import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
    return (
        <button
            onClick={() =>
                authClient.signIn.social({
                    provider: "github",
                })
            }
        >
            Sign in with GitHub
        </button>
    );
}