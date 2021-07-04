// components/Header.js
import Link from "next/link";
import React from "react";
import { useAuth } from "../context/AuthUserContext";

const headerStyle = {
	width: "100%",
	height: "50px"
};



const Header = () => {
	const { authUser, loading } = useAuth();

	return (
		<div className="Header" style={headerStyle}>
			{
				authUser ? (
					<ul className="inline">
						<li>
							<Link href="app-settings">
								<a>App settings</a>
							</Link>
						</li>
						<li>
							<Link href="users">
								<a>Users</a>
							</Link>
						</li>
						<li>
							<Link href="ranks">
								<a>Ranks</a>
							</Link>
						</li>
						<li>
							<Link href="badges">
								<a>Badges</a>
							</Link>
						</li>
					</ul>
				) : (
					<Link href="/sign_up">
						<a>Sign in </a>
					</Link>
				)
			}
		</div>
	);
}

export default Header;