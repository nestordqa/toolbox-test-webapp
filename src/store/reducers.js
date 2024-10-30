// Estado inicial de la aplicación
const initialState = {
    data: null, // Almacena los datos obtenidos
    render: null, // Almacena los datos que se van a renderizar
    loading: false, // Indica si la aplicación está en proceso de carga
    theme: 'dark' // Establece el tema inicial de la aplicación
};

// Reducer raíz que maneja el estado de la aplicación
const rootReducer = (state = initialState, action) => {
    // Se utiliza un switch para manejar diferentes tipos de acciones
    switch (action.type) {
        // Acción para solicitar datos
        case 'FETCH_DATA_REQUEST':
            return { ...state, loading: action.payload }; // Actualiza el estado de loading

        // Acción para cambiar el tema de la aplicación
        case 'CHANGE_THEME':
            return { ...state, theme: action.payload }; // Actualiza el tema según el payload

        // Acción para manejar la respuesta exitosa de la solicitud de datos
        case 'FETCH_DATA_SUCCESS':
            return { 
                ...state, 
                loading: false, // Cambia loading a false
                data: action.payload, // Almacena los datos obtenidos
                render: action.payload // Establece los datos a renderizar
            };

        // Acción para filtrar los datos por nombre
        case 'FILTER_BY_NAME':
            return { 
                ...state, 
                loading: false, // Cambia loading a false
                render: action.payload // Actualiza los datos a renderizar con los filtrados
            };

        // Acción para quitar el filtro por nombre
        case 'UNFILTER_BY_NAME':
            return { 
                ...state, 
                loading: false, // Cambia loading a false
                render: state.data // Restaura los datos a renderizar a los originales
            };

        // Si la acción no coincide con ningún caso, retorna el estado actual
        default:
            return state;
    }
};

// Exporta el rootReducer para que pueda ser utilizado en la creación del store
export default rootReducer;
