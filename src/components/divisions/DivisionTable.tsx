import { Table, TablePaginationConfig } from "antd";
import { ColumnFilterItem } from "antd/lib/table/interface";
import { useState } from "react";
import { IParseDivision } from "../../entities/parserDivisions";
import { sorterByKeyNumber, sorterByKeyString } from "../helpers/sort";

interface IProps {
	divisions: IParseDivision[];
	pagination: TablePaginationConfig;
	setPagination: (pagination: TablePaginationConfig) => void;
	setCurrentPage: (page: number) => void;
}

export const DivisionTable = ({
	divisions,
	pagination,
	setPagination,
	setCurrentPage,
}: IProps) => {
	const [filteredInfo, setFilteredInfo] = useState<any>({});
	const [sortedInfo, setSortedInfo] = useState<any>({});
	const handleChange = (
		pagination: TablePaginationConfig,
		filters: any,
		sorter: any
	) => {
		setCurrentPage(pagination.current || 1);
		setPagination(pagination);
		setFilteredInfo(filters);
		setSortedInfo(sorter);
	};

	const divisionFilters = (
		key: "division" | "parentDivision" | "level"
	): ColumnFilterItem[] => {
		const filters: ColumnFilterItem[] = [];
		for (const division of divisions) {
			if (filters.find((filter) => filter.text === division[key])) {
				continue;
			}

			filters.push({ text: division[key], value: division[key] || "" });
		}
		return filters;
	};

	const columns = [
		{
			title: "Division",
			dataIndex: "division",
			key: "division",
			filters: divisionFilters("division"),
			filteredValue: filteredInfo.division || null,
			onFilter: (value: any, record: any) =>
				record.division.includes(value),
			sorter: (a: any, b: any) => sorterByKeyString(a, b, "division"),
			sortOrder: sortedInfo.columnKey === "division" && sortedInfo.order,
			ellipsis: true,
		},
		{
			title: "División superior",
			dataIndex: "parentDivision",
			key: "parentDivision",
			filters: divisionFilters("parentDivision"),
			filteredValue: filteredInfo.parentDivision || null,
			onFilter: (value: any, record: any) =>
				record.parentDivision.includes(value),
			sorter: (a: any, b: any) =>
				sorterByKeyString(a, b, "parentDivision"),
			sortOrder:
				sortedInfo.columnKey === "parentDivision" && sortedInfo.order,
			ellipsis: true,
		},
		{
			title: "Colaboradores",
			dataIndex: "numCollaborators",
			key: "numCollaborators",
			sorter: (a: any, b: any) =>
				sorterByKeyNumber(a, b, "numCollaborators"),
			sortOrder:
				sortedInfo.columnKey === "numCollaborators" && sortedInfo.order,
			ellipsis: true,
		},
		{
			title: "Nivel",
			dataIndex: "level",
			key: "level",
			filters: divisionFilters("level"),
			filteredValue: filteredInfo.level || null,
			onFilter: (value: any, record: any) => record.level === value,
			sorter: (a: any, b: any) => sorterByKeyNumber(a, b, "level"),
			sortOrder: sortedInfo.columnKey === "level" && sortedInfo.order,
			ellipsis: true,
		},
		{
			title: "Subdivisiones",
			dataIndex: "numSubdivisions",
			key: "numSubdivisions",
			sorter: (a: any, b: any) =>
				sorterByKeyNumber(a, b, "numSubdivisions"),
			sortOrder:
				sortedInfo.columnKey === "numSubdivisions" && sortedInfo.order,
			ellipsis: true,
		},
		{
			title: "Embajadores",
			dataIndex: "ambassador",
			key: "ambassador",
			sorter: (a: any, b: any) => sorterByKeyString(a, b, "ambassador"),
			sortOrder:
				sortedInfo.columnKey === "ambassador" && sortedInfo.order,
			ellipsis: true,
		},
	];

	const rowSelection = {
		onChange: (selectedRowKeys: any, selectedRows: any) => {
			console.log(
				`selectedRowKeys: ${selectedRowKeys}`,
				"selectedRows: ",
				selectedRows
			);
		},
		onSelect: (record: any, selected: any, selectedRows: any) => {
			console.log(record, selected, selectedRows);
		},
		onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
			console.log(selected, selectedRows, changeRows);
		},
	};

	return (
		<div className="table">
			<Table
				columns={columns}
				dataSource={divisions}
				onChange={handleChange}
				pagination={pagination}
				rowSelection={rowSelection}
			/>
			<p className="table__total">Total divisiones: {pagination.total}</p>
		</div>
	);
};
