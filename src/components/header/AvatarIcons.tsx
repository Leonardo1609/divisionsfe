import { DownOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import logoWhite from "../../assets/images/mandu-logo-white.png";
import {HeaderIcons} from "./HeaderIcons";

const fakeUser = {
	name: "Administrador",
};

export const AvatarIcons = () => {
	return (
		<div className="avatar-icons">
			<HeaderIcons />
			<Menu className="navbar__list" mode="horizontal">
				<Menu.Item
					className="navbar__link"
					key="avatar"
					itemIcon={
						<DownOutlined className="navbar__icon down-icon" />
					}
				>
				<span className="avatar-icons__letter">{fakeUser.name[0].toUpperCase()}</span>
					{fakeUser.name}
				</Menu.Item>
			</Menu>
			<img src={logoWhite} alt="logo-white" />
		</div>
	);
};
