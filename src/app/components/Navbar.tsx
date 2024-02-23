"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <>
      <div className="font-Onest mx-auto px-10 max-w-screen-xl py-2">
        <header className="pt-2">
          <nav className="flex flex-col sm:flex-row gap-6 items-center">
            <Link
              className="sm:mr-auto border border-transparent hover:scale-x-105 duration-200"
              href={`/`}
            >
              <h1 className="font-black">Shorten URL</h1>
            </Link>

            {session?.user?.email && (
              <Link
                className="rounded-full border-2 border-blue-700 px-4 py-1 font-semibold hover:text-blue-700 hover:bg-slate-200/50 bg-blue-700 text-white active:translate-y-0.5"
                href={`/dashboard/${session?.user?.id}`}
              >
                Dashboard
              </Link>
            )}
            {status === "authenticated" ? (
              <button
                className="rounded-full border-2 border-orange-400 px-4 py-1 font-semibold text-orange-400 bg-slate-200 hover:bg-orange-400 hover:text-white active:translate-y-0.5"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Log out
              </button>
            ) : (
              <>
                <Link
                  className="rounded-full border-2 border-orange-400 px-4 py-1 font-semibold hover:text-orange-400 hover:bg-slate-200 bg-orange-400 text-white active:translate-y-0.5"
                  href="/api/auth/signin"
                >
                  Sign in
                </Link>
              </>
            )}
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
