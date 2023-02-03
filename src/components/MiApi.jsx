import { useState, useEffect } from "react";
const MiApi = (props) => {
    const [books, setBooks] = useState([]); //Variable para almacenar el listado de los libros
    const [nombreBusqueda, setNombreBusqueda] = useState("") //Variable para guardar lo que se indica en el imput

    useEffect(() => {
        consultarInformacion();
    }, []); //Llamará la función consultarInformacion() al montar el componente
    const consultarInformacion = async () => {
        const url = 'https://openlibrary.org/search.json?title=the+lord+of+the+rings&limit=500';
        const response = await fetch(url) //Consulta y respuesta de la API
        const data = await response.json() //Convierte en json

        setBooks(data.docs.map(book => {
            return {
                titulo: book.title,
                key: book.key.replace("/works/", ""),
                autor: book.author_name,
                year: book.first_publish_year
            } //Sólo extrae y guarda en books la información de título, key, autor, año de publicación
        }).sort((a, b) => a.year < b.year)) //Ordena la búsqueda del libro por año de mayor a menor
    }

    return (
        <div className="container my-3">
            <input className="form-control mr-sm-2" type="search" onChange={(e) => setNombreBusqueda(e.target.value)} placeholder="Busca según título" aria-label="Search"></input>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Año Publicacion</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Identificador</th>
                    </tr>
                </thead>
                <tbody>
                    {books.filter(b => b.titulo.toLowerCase().includes(nombreBusqueda.toLowerCase())).map(b => {
                        return <tr>
                            <th scope="row">{b.year}</th>
                            <td>{b.autor}</td>
                            <td>{b.titulo}</td>
                            <td>{b.key}</td>
                        </tr>
                    })} 
                </tbody>
            </table>
        </div>
    ) //Se muestra la información del arreglo de books
}
export default MiApi