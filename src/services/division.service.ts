import { IDivisionsAndPagination } from "../entities/divisionAndPagination";
import { APIManager } from "./api";

export const getDivisions = async (quantity: number = 10, page: number = 1) => {
	try {
		const params = {
			quantity,
			page,
		};
		const { data } = await APIManager.get<IDivisionsAndPagination>(
			"divisions",
			params
		);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const searchDivisions = async (
	quantity: number = 10,
	page: number = 1,
	query: string = "",
	column: string = "name"
) => {
	try {
		const params = {
			quantity,
			page,
			q: query,
			column,
		};
		const { data } = await APIManager.get<IDivisionsAndPagination>(
			"divisions/search",
			params
		);
		return data;
	} catch (err) {
		console.log(err);
	}
};
