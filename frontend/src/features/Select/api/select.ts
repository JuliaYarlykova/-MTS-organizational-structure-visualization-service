
import axios from 'axios'

export const postHomework = async (
	data: 
): Promise<string> => {
	try {
		const response = await axios.post(
			'http://localhost:3000/api/post_homework',
			data
		)
		return response.data
	} catch (e) {
		console.error('Error post homework:', e)
		throw e
	}
}
