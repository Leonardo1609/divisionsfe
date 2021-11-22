import { AvatarIcons } from "./AvatarIcons";
import { Navbar } from "./Navbar";

export const Header = () => {
	return (
		<header className="header">
			<div className="header-container container">
				<Navbar />
				<AvatarIcons />
			</div>
		</header>
	);
};
