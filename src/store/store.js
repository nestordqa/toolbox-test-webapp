// Importa las funciones necesarias de Redux
import { createStore, applyMiddleware } from 'redux';
// Importa el rootReducer que combina todos los reducers de la aplicación
import rootReducer from './reducers';
// Importa el middleware thunk para manejar acciones asíncronas
import { thunk } from 'redux-thunk';

// Crea el store de Redux
const store = createStore(
    rootReducer, // El reducer raíz que maneja el estado de la aplicación
    applyMiddleware(thunk) // Aplica el middleware thunk para permitir acciones asíncronas
);

// Exporta el store para que pueda ser utilizado en la aplicación
export default store;
