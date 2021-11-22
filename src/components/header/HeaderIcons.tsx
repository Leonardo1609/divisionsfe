import {
	BellFilled,
	QuestionCircleFilled,
	ShoppingFilled,
} from "@ant-design/icons";

export const HeaderIcons = () => {
	return (
		<div className="header-icons">
			<ul className="header-icons__list">
				<li className="header-icons__icon">{<ShoppingFilled />}</li>
				<li className="header-icons__icon">
					{<QuestionCircleFilled />}
				</li>
				<li className="header-icons__icon">
					{<BellFilled />}
					<span className="header-icons__icon-notification">3</span>
				</li>
			</ul>
		</div>
	);
};
