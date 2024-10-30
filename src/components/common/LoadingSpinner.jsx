import Spinner from 'react-bootstrap/Spinner';

export const LoadingSpinner = () => {
  return (
    <Spinner 
      animation="border" // Tipo de animación del spinner
      role="status" // Rol accesible para lectores de pantalla
      variant='primary' // Variante de color del spinner
      style={{
        width: "10rem", // Ancho del spinner
        height: "10rem", // Alto del spinner
        position: 'absolute', // Posicionamiento absoluto
        top: '50%', // Centrado verticalmente
        left: '45%' // Centrado horizontalmente
      }}
    >
      <span className="visually-hidden">Loading...</span> {/* Texto oculto para accesibilidad */}
    </Spinner>
  );
}

export default LoadingSpinner; // Exporta el componente para su uso en otros archivos