// From Other Files 
import { Header } from '../components/Header';
import { getAllReviewsByMovieId } from '../services/Movies.Services';
// From Dependencies
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export function MovieDisplay() {
    const [movie, setMovie] = useState({})
    const [reviews, setReviews] = useState([])
    const { id } = useParams()

    useEffect(() => {
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
            })
            .catch(err => console.error(err));
    }, [id])

    useEffect(() => {
        getAllReviewsByMovieId(id)
            .then(res => {
                setReviews(res)
            })
            .catch(() => { })
    }, [])





    return (
        <div className='movieDisplay'>
            <Header />

            <Container className='movieDisplay-Container'>
                <Row>
                    <Col className='movieDisplay-Info'>
                        <h1 className='movieDisplay-Text-Heading'> {movie.title} </h1>

                        <h2 className='movieDisplay-Text-Heading'> Rating: {movie.vote_average}/10 </h2>

                        <p className='movieDisplay-Text'> {movie.overview} </p>

                        <button className='movieDisplay-Button'>
                            <Link to={`/movies/review/${movie.id}`}>Leave a Review</Link>
                        </button>

                    </Col>
                    <Col>
                        <Image className='movieDisplay-Image' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    </Col>
                </Row>
                <Row>
                    <div className='movieDisplay-Reviews'>
                        <h3 className='movieDisplay-Text-Heading'>Reviews:</h3>
                        <div className='movieDisplay-Review-Holder'>
                            {
                                reviews.map((review) => (
                                    <div className='movieDisplay-Review-Card' key={review._id}>
                                        <h3 className='movieDisplay-Text-Heading'> Rating: {review.rating} </h3>
                                        <p className='movieDisplay-Text'> {review.review_body} </p>
                                        {
                                            review.recommend == true
                                                ? <p className='movieDisplay-Text'> Recommendation: Give it a watch </p>
                                                : <p className='movieDisplay-Text'> Recommendation: Don't waste your time </p>
                                        }
                                        <button className='movieDisplay-Button'>
                                            <Link to={`/movies/review/display/${review._id}`}>
                                                Go to Review
                                            </Link>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
