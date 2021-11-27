import axios from 'axios'

export const baseUrl = ' https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': '1452ca7697msh2e1aa44958bbd17p19fba3jsn5163466cbc0f',
		},
	})
	return data
}
