const BASE_URL = 'https://course-backend-alpha.vercel.app';
const token = window.localStorage.getItem('token');

export class CourseRequest {
    GET_ALL_COURSES = () => {
		return {
			url: `${BASE_URL}/get-all-courses`,
		};
	};

    ADD_COURSE = () => {
		return {
			url: `${BASE_URL}/add-course`,
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