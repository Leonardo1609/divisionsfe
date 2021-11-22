import { SearchOutlined } from "@ant-design/icons";
import { Field, Formik, FormikProps, Form } from "formik";
import { searchDivisions } from "../../services/division.service";
import { parseDivisions } from "../helpers/parseDivisions";

export interface ISearchFields {
	column: string;
	search: string;
}

interface ISelect {
	value: string;
	text: string;
}

const selects: ISelect[] = [
	{
		value: "name",
		text: "Division",
	},
	{
		value: "parentDivision",
		text: "Division superior",
	},
	{
		value: "num_collaborators",
		text: "Colaboradores",
	},
	{
		value: "level",
		text: "Nivel",
	},
	{
		value: "ambassador",
		text: "Embajador",
	},
];

export const SearchDivision = ({ setSearchFields, pagination }: any) => {
	return (
		<Formik
			initialValues={{ column: "", search: "" }}
			onSubmit={async (values) => {
				setSearchFields({ ...values });
			}}
		>
			{(props: FormikProps<ISearchFields>) => (
				<Form className="search__form">
					<Field className="search__select" as="select" name="column">
						<option value="">Columnas</option>
						{selects.map(({ value, text }) => (
							<option key={value} value={value}>
								{text}
							</option>
						))}
					</Field>
					<Field
						className="search__input"
						type="text"
						name="search"
						placeholder="Buscar"
					/>
					<button className="search__button" type="submit">
						<SearchOutlined />
					</button>
				</Form>
			)}
		</Formik>
	);
};
