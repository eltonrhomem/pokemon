import { http } from '.';


export default {

	listar:() => {
		return http.get('pokemon/charmander/');
	}

    
};
