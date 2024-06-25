import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



export function MovieDisplay() {

    const { id } = useParams()

    const [movie, setMovie] = useState({})

    useEffect( () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWVjMDBkY2JhYWU0Mjk1NWMzMDQxZDZkMTI5NmI0YyIsIm5iZiI6MTcxOTI1MTcwOC43ODM5NTgsInN1YiI6IjY2NzMyMmRjYWNiYTRiYTlhYWQ4MDRiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QqhTrO9vhWuAfREWRhotyTUyLAo0jeItdTeGUWtJYjs'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                setMovie(response)
                console.log(response)
            })
            .catch(err => console.error(err));
    },[id])


    return(
        <>
            <Header />

            <Container className="MovieContainer">
                <Row>
                    <Col className="movie_Right">
                        <h1> {movie.title} </h1>
                        <h2> Rating {movie.vote_average}/10 </h2>
                        <p> {movie.overview} </p>
                    </Col>
                    <Col className="movie_Left">
                       <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} thumbnail />
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}