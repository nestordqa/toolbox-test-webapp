const API_URL = 'http://localhost:3001/api';

export const fetchFiles = async () => {
    try {
        // Realiza la solicitud a la API
        const request = await fetch(`${API_URL}/files/data`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Verifica si la respuesta fue exitosa
        if (request && request.status === 200) {
            // Convierte la respuesta a JSON
            const files = await request.json();
            return files; // Retorna los archivos obtenidos
        } else {
            console.error('Error en la solicitud:', request.status);
            return null; // Retorna null si la solicitud no fue exitosa
        }
    } catch (error) {
        console.error(
            'Ocurrió el siguiente error trayendo el listado de archivos',
            error
        );
        return null; // Retorna null en caso de error
    }
}

export const fetchFilesByName = async (name) => {
    try {
        // Realiza la solicitud a la API
        const request = await fetch(`${API_URL}/files/data?fileName=${name}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Verifica si la respuesta fue exitosa
        if (request && request.status === 200) {
            // Convierte la respuesta a JSON
            const files = await request.json();
            return files; // Retorna los archivos obtenidos
        } else {
            console.error('Error en la solicitud:', request.status);
            return null; // Retorna null si la solicitud no fue exitosa
        }
    } catch (error) {
        console.error(
            'Ocurrió el siguiente error trayendo el listado de archivos',
            error
        );
        return null; // Retorna null en caso de error
    }
}