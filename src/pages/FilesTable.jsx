import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { FileRow } from '../components/files/FileRow';
import { TopNavbar } from '../components/common/Navbar';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { setData, setLoading } from '../store/actions';
import { fetchFiles } from '../utils/fetchingData';

export const FilesTable = () => {
    // Inicializa dispatch para enviar acciones a la tienda Redux
    const dispatch = useDispatch();
    // Extrae el estado de carga, los datos a renderizar y el tema de la tienda Redux
    const { loading, render, theme } = useSelector((state) => state);

    useEffect(() => {
        // Establece el estado de carga en verdadero antes de obtener los datos
        dispatch(setLoading(true));
        fetchFiles()
            .then((res) => {
                // Despacha la acción para establecer los datos obtenidos en la tienda
                dispatch(setData(res));
            })
            .catch((e) => console.error(e)) // Registra cualquier error durante la obtención
            .finally(() => {
                // Establece el estado de carga en falso después de completar la obtención de datos
                dispatch(setLoading(false));
            })
        //eslint-disable-next-line
    }, []); // La matriz de dependencias vacía significa que esto se ejecuta una vez al montar

    return (
        <div>   
            <TopNavbar /> {/* Renderiza la barra de navegación superior */}
            <Table striped bordered hover variant={theme}> {/* Tabla de Bootstrap con tema dinámico */}
                <thead>
                    <tr>
                        <th>Nombre del Archivo</th>
                        <th>Texto</th>
                        <th>Número</th>
                        <th>Hex</th>
                    </tr>
                </thead>
                <tbody>
                    {render && render.length && render.map((item, index) => (
                        // Renderiza cada fila de archivo usando el componente FileRow
                        <FileRow key={index} file={item}/>
                    ))}
                    {
                        loading && <LoadingSpinner /> // Muestra el spinner de carga si se están obteniendo datos
                    }
                </tbody>
            </Table>
        </div>
    )
}