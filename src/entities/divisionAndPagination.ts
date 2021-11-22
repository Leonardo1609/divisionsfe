export interface IDivisionsAndPagination {
	current_page?: number;
	data?: Division[];
	first_page_url?: string;
	from?: number;
	last_page?: number;
	last_page_url?: string;
	links?: Link[];
	next_page_url?: null;
	path?: string;
	per_page?: number;
	prev_page_url?: null;
	to?: number;
	total?: number;
}

export interface Division {
	id?: number;
	name?: string;
	division_id?: number;
	ambassador_id?: number;
	num_collaborators?: number;
	level?: number;
	created_at?: Date;
	updated_at?: Date;
	division?: Division;
	ambassador?: Ambassador;
	divisions?: any[];
}

export interface Ambassador {
	id?: number;
	name?: string;
	created_at?: Date;
}

export interface Link {
	url?: null | string;
	label?: string;
	active?: boolean;
}
