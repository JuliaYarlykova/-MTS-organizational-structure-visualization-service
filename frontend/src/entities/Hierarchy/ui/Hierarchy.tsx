import { useEffect, useState } from 'react'
import ReactFlow from 'react-flow-renderer'
import { Data, Edge, Node } from '../lib/types'

// const initialNodes = [
// 	{
// 		id: '1',

// 		data: { label: "User's Input" },
// 		position: { x: 500, y: 100 },
// 	},
// 	{
// 		id: '2',
// 		data: { label: 'Process Input' },

// 		position: { x: 500, y: 200 },
// 	},
// 	{
// 		id: '3',
// 		data: { label: 'Print yes' },
// 		position: { x: 200, y: 350 },
// 	},
// 	{ id: '4', data: { label: 'Print No' }, position: { x: 500, y: 350 } },
// 	{ id: '5', data: { label: 'Retake test' }, position: { x: 850, y: 350 } },
// 	{
// 		id: '6',
// 		data: { label: 'Retake Test Yes' },
// 		position: { x: 1050, y: 450 },
// 	},
// 	{ id: '7', data: { label: 'Retake Test No' }, position: { x: 700, y: 450 } },
// 	{
// 		id: '8',

// 		data: { label: "User's Output / End application" },
// 		position: { x: 500, y: 650 },
// 	},
// ]

// const initialEdges = [
// 	{ id: 'el1-2', source: '1', target: '2' },
// 	{ id: 'el2-3', source: '2', target: '3' },
// 	{ id: 'el2-4', source: '2', target: '4' },
// 	{ id: 'el2-5', source: '2', target: '5' },
// 	{ id: 'el6-1', source: '1', target: '6' },
// ]

export const Flow = () => {
	const [node, setNode] = useState<Node[]>()
	const [edge, setEdge] = useState<Edge[]>()

	useEffect(() => {
		const data: Data[] = []
		const nodes: Node[] = []
		const edges: Edge[] = []
		data?.map(d => {
			const oneNode = {
				id: d.id,
				data: d.data,
				position: {
					x: 500,
					y: Number(d.id) * 10,
				},
			} as Node
			nodes.push(oneNode)
			const oneEdge = {
				id: d.id,
				source: d.node.source,
				target: d.node.target,
			} as Edge
			edges.push(oneEdge)
		})
		setEdge(edges)
		setNode(nodes)
	}, [])

	return <ReactFlow nodes={node} edges={edge}></ReactFlow>
}
