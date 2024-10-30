// Definición de constantes para los tipos de acciones
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'; // Acción para solicitar datos
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'; // Acción para indicar que los datos se han obtenido con éxito
export const FILTER_BY_NAME = 'FILTER_BY_NAME'; // Acción para filtrar datos por nombre
export const UNFILTER_BY_NAME = 'UNFILTER_BY_NAME'; // Acción para quitar el filtro por nombre
export const CHANGE_THEME = 'CHANGE_THEME'; // Acción para cambiar el tema de la aplicación

// Creador de acción para cambiar el tema
export const setTheme = (theme) => ({
    type: CHANGE_THEME, // Tipo de acción
    payload: theme, // Carga útil que contiene el nuevo tema
});

// Creador de acción para establecer el estado de carga
export const setLoading = (isLoading) => ({
    type: FETCH_DATA_REQUEST, // Tipo de acción
    payload: isLoading, // Carga útil que indica si está cargando
});

// Creador de acción para establecer los datos obtenidos
export const setData = (data) => ({
    type: FETCH_DATA_SUCCESS, // Tipo de acción
    payload: data, // Carga útil que contiene los datos obtenidos
});

// Creador de acción para filtrar los datos
export const setFilter = (filter) => ({
    type: FILTER_BY_NAME, // Tipo de acción
    payload: filter, // Carga útil que contiene el filtro aplicado
});

// Creador de acción para quitar el filtro
export const unSetFilter = () => ({
    type: UNFILTER_BY_NAME // Tipo de acción para quitar el filtro
});