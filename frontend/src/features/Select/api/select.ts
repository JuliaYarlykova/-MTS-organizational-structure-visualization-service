import axios from 'axios'

export interface SelectI {
	dep?: string
	block?: string
	back?: string
	city?: string
	role?: string
}

export interface ResponseData {
	subdiv1: string | null
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

export const getSelected = async (data: SelectI): Promise<ResponseData[]> => {
	try {
		const response = await axios.get(
			'https://6d72-95-191-39-62.ngrok-free.app/Search/filter',
			{
				params: data,
			}
		)
		console.log(response.data)
		return response.data
	} catch (e) {
		console.error('Error fetching employees:', e)
		throw e
	}
}
