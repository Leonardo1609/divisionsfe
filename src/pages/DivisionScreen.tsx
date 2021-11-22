import { TablePaginationConfig } from "antd";
import { useEffect, useState } from "react";
import { DivisionHeader } from "../components/divisions/DivisionHeader";
import { DivisionTable } from "../components/divisions/DivisionTable";
import {
	ISearchFields,
	SearchDivision,
} from "../components/divisions/SearchDivision";
import { parseDivisions } from "../components/helpers/parseDivisions";
import { IParseDivision } from "../entities/parserDivisions";
import { getDivisions, searchDivisions } from "../services/division.service";

export const DivisionScreen = () => {
	const [divisions, setDivisions] = useState<IParseDivision[]>([]);
	const [pagination, setPagination] = useState<TablePaginationConfig>({
		current: 1,
		pageSize: 10,
	});
	const [currentPage, setCurrentPage] = useState<number>(1);

	const [searchFields, setSearchFields] = useState<ISearchFields>({
		column: "",
		search: "",
	});

	useEffect(() => {
		const gettingDvisions = async () => {
			const resp = await getDivisions(
				pagination.pageSize,
				pagination.current
			);

			const parserDivisions = parseDivisions(resp?.data || []);
			setDivisions(parserDivisions);

			setPagination({
				...pagination,
				current: resp?.current_page,
				total: resp?.total,
			});
		};

		const searchingDivisions = async () => {
			const resp = await searchDivisions(
				pagination.pageSize,
				pagination.current,
				searchFields.search,
				searchFields.column || "name"
			);

			const parserDivisions = parseDivisions(resp?.data || []);

			setDivisions(parserDivisions);

			setPagination({
				...pagination,
				current: resp?.current_page,
				total: resp?.total,
			});
		};

		if (searchFields.search) {
			searchingDivisions();
		} else {
			gettingDvisions();
		}
	}, [currentPage, searchFields]);

	return (
		<section id="division">
			<DivisionHeader />
			<div className="division__main container">
				<div className="division__options">
					<span className="division__option division__option-active">
						Listado
					</span>
					<span className="division__option">Árbol</span>
				</div>
				<div className="division__search">
					<SearchDivision
						setSearchFields={setSearchFields}
						pagination={pagination}
					/>
				</div>
			</div>
			<div className="division__table container">
				<DivisionTable
					pagination={pagination}
					setPagination={setPagination}
					divisions={divisions}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</section>
	);
};
