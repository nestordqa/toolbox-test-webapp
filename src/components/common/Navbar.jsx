import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { fetchFilesByName } from '../../utils/fetchingData';
import { setFilter, setLoading, setTheme, unSetFilter } from '../../store/actions';
import Swal from 'sweetalert2';

export const TopNavbar = () => {
    const dispatch = useDispatch(); // Inicializa dispatch para enviar acciones a la tienda Redux
    const { theme } = useSelector((state) => state); // Extrae el tema actual de la tienda Redux
    const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el término de búsqueda
    const [isToggled, setIsToggled] = useState(false); // Estado para controlar el modo oscuro/claro

    const handleToggle = () => {
        setIsToggled(!isToggled); // Cambia el estado de toggled
        if (isToggled) {
            dispatch(setTheme('dark')); // Establece el tema en oscuro
        } else {
            dispatch(setTheme('light')); // Establece el tema en claro
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value); // Actualiza el término de búsqueda
        // Si el campo de búsqueda está vacío, restablece el filtro
        if (!searchTerm.length || event.target.value.length === 0) {
            dispatch(setLoading(true));
            dispatch(unSetFilter());
            dispatch(setLoading(false));
        }
    };
  
    const handleSearch = async (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario
        if (!searchTerm.length) return; // Si no hay término de búsqueda, no hace nada
        dispatch(setLoading(true)); // Establece el estado de carga en verdadero
        fetchFilesByName(searchTerm)
            .then((res) => {
                // Si no se encuentran resultados, muestra un mensaje de error
                if (!res?.length || res === null) {
                    dispatch(unSetFilter());
                    Swal.fire(
                        'Ups!',
                        'No hemos encontrado coincidencias con el texto que ingresaste, intenta nuevamente',
                        'error'
                    );
                    return;
                }
                dispatch(setFilter(res)); // Despacha la acción para establecer el filtro con los resultados
            })
            .catch((e) => console.error(e)) // Registra cualquier error durante la búsqueda
            .finally(() => dispatch(setLoading(false))); // Establece el estado de carga en falso al final

    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme={theme} sticky="top">
            <Container fluid>
                <Navbar.Brand>Toolbox Test Web App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex jus" onSubmit={handleSearch}>
                        <Form.Control
                            placeholder="Search" // Placeholder del campo de búsqueda
                            className="me-2"
                            aria-label="Search"
                            value={searchTerm} // Valor del campo de búsqueda
                            onChange={handleInputChange} // Maneja el cambio en el campo de búsqueda
                        />
                        <Button variant="outline-success" type='submit'>Search</Button> {/* Botón de búsqueda */}
                    </Form>
                    <Button variant={isToggled ? 'dark' : 'light'} onClick={handleToggle} className="ms-auto">
                        {isToggled ? 'Dark Mode' : 'Light Mode'} {/* Cambia el texto según el estado del toggle */}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};