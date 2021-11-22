import {
	DownloadOutlined,
	PlusOutlined,
	UploadOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { IconButton } from "./IconButton";

export const DivisionHeader = () => {
	return (
		<div className="division-header">
			<Row className="container">
				<Col span={12} className="division-header__main">
					<h1 className="division-header__title">Organización</h1>
					<div className="division-header__tabs">
						<span className="division-header__tab division-header__tab-active">
							Divisiones
						</span>
						<span className="division-header__tab">
							Colaboradores
						</span>
					</div>
				</Col>
				<Col span={12} className="division-header__icons">
					<IconButton
						className="division-header__icon"
						icon={<PlusOutlined />}
						onClick={() => console.log("add")}
					/>
					<IconButton
						className="division-header__icon"
						icon={<UploadOutlined />}
						onClick={() => console.log("add")}
						light={true}
					/>
					<IconButton
						className="division-header__icon"
						icon={<DownloadOutlined />}
						onClick={() => console.log("add")}
						light={true}
					/>
				</Col>
			</Row>
		</div>
	);
};
