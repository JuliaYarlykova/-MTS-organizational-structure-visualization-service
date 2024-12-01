export interface Label {
	label: string
}
export interface NodeToNode {
	source: string
	target: string
}
export interface Data {
	id: string
	data: Label
	node: NodeToNode
	id_employee: number
}

export interface Edge {
	id: string
	source: string
	target: string
}

export interface Coord {
	x: number
	y: number
}

export interface Node {
	id: string
	data: Label
	position: Coord
}
