const BASE_URL = 'https://course-backend-alpha.vercel.app';
const token = window.localStorage.getItem('token');

export class ProfessorRequest {
    GET_ALL_PROFESSORS = () => {
		return {
			url: `${BASE_URL}/get-all/professor`,
		};
	};

    ADD_PROFESSOR = () => {
		return {
			url: `${BASE_URL}/add-professor`,
            headers: {
                Authorization: token,
            },
		};
	};

	DELETE_PROFESSOR = (id) => {
		return {
			url: `${BASE_URL}/professor/delete/${id}`,
            headers: {
                Authorization: token,
            },
		};
	};
}