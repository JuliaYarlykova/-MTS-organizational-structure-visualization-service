import axios from 'axios'

export interface SearchI {
	str: string
}

export interface Response {
	subdiv1: string
	func_block: string | null
	subdiv2: string | null
	subdiv3: string | null
	subdiv4: string | null
	background: string | null
	role: string | null
	surname: string | null
	name: string | null
	phone: string | null
	city: string | null
	address: string | null
	email: string | null
}

export const getSearched = async (data: SearchI): Promise<Response[]> => {
	try {
		const response = await axios.get(
			`https://6d72-95-191-39-62.ngrok-free.app/Search/fio/${data.str}`
		)
		console.log(response.data)
		return response.data
	} catch (e) {
		console.error('Error fetching employees:', e)
		throw e
	}
}
