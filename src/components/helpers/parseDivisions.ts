import { Division } from "../../entities/divisionAndPagination";
import { IParseDivision } from "../../entities/parserDivisions";

export const parseDivisions = (divisions: Division[]): IParseDivision[] => {
	return divisions.map((division) => ({
		key: division.id,
		division: division.name,
		parentDivision: division?.division?.name || "-",
		numCollaborators: division.num_collaborators,
		level: division.level,
		numSubdivisions: division?.divisions?.length || "-",
		ambassador: division?.ambassador?.name || "-",
	}));
};
