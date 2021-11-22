import { Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import logo from "../../assets/images/mandu-logo.png";

interface INavItem {
	navKey: string;
	name: string;
	hasSubmenu: boolean;
	active: boolean
}

const navItems: INavItem[] = [
	{
		navKey: "dashboard",
		name: "Dashboard",
		hasSubmenu: false,
		active: false
		// it doesn't necesary in this case
		// redirect: ''
		// submenu: [
		// 	{
		// 		...
		// 	}
		// ]
	},
	{
		navKey: "organizacion",
		name: "Organizacion",
		hasSubmenu: false,
		active: true
	},
	{
		navKey: "modelos",
		name: "Modelos",
		hasSubmenu: true,
		active: false
	},
	{
		navKey: "seguimiento",
		name: "Seguimiento",
		hasSubmenu: true,
		active: false
	},
];

export const Navbar = () => {
	return (
		<nav className="navbar">
			<img className="navbar__logo" src={logo} alt="logo" />
			<Menu className="navbar__list" mode="horizontal">
				{navItems.map(({ navKey, hasSubmenu, name, active }) => (
					<Menu.Item
						className={`${
							active ? "ant-menu-item-active" : ""
						} navbar__link`}
						key={navKey}
						itemIcon={
							hasSubmenu ? (
								<DownOutlined className="navbar__icon" />
							) : null
						}
					>
						{name}
					</Menu.Item>
				))}
			</Menu>
		</nav>
	);
};
