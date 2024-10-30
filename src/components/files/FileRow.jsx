import React from 'react';

export const FileRow = ({ file }) => {
  return (
    <>
      {file && file.lines?.length && // Verifica si el archivo y sus líneas existen
        file.lines.map((item, index) => { // Mapea sobre las líneas del archivo
          return (
            <tr key={index}> {/* Asigna una clave única a cada fila */}
              <td>{file.file}</td> {/* Muestra el nombre del archivo */}
              <td>{item.text}</td> {/* Muestra el texto de la línea */}
              <td>{item.number}</td> {/* Muestra el número de la línea */}
              <td>{item.hex}</td> {/* Muestra el valor hexadecimal de la línea */}
            </tr>
          );
        }
      )}
    </>
  );
};