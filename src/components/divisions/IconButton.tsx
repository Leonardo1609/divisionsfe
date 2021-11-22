import { ReactElement } from "react";

interface IProps {
	icon: ReactElement;
	light?: boolean;
	onClick: () => void;
	className: string;
}

export const IconButton = ({
	icon,
	light = false,
	onClick,
	className = "",
}: IProps) => {
	return (
		<button
			className={`icon-button ${light ? "light" : ""} ${className}`}
			onClick={onClick}
		>
			{icon}
		</button>
	);
};
