import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthUserContext";

export default function Home() {

  return (
    <div className="text-center">
          <h2>The warzone report</h2>
		  
		  <Link href="/sign_up">
			  <a>Sign in </a>
		  </Link>
    </div>
  );
}
