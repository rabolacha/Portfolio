import { Container, Row, Col } from 'react-bootstrap';
import poster from "../../Assets/Projects/howl/movie.png";
import poster2 from "../../Assets/Projects/howl/movie2.png";


function MoviePoster() {
    return (
        <Container>
            <Row style={{ paddingTop: 50 }} className='project-row-1'>
                <Col>
                    <img src={poster2} className="img-fluid" alt="Poster" />
                </Col>
                <Col>
                    <p>
                        This was a submission for the movie poster design challenge of the multimedia content
                        production course. The prompt was to make a poster for a movie.
                    </p>
                    <p>
                        For my movie poster I wanted to make something for my long time favorite Howl's Moving Castle!
                    </p>
                </Col>
            </Row>

            <h1 style={{ paddingBottom: 20, textAlign: 'left' }} className="projects-title">Approach</h1>
            <Row className='project-row-1'>
                <Col>
                    <p>
                        This is a movie that had many posters and different dvd covers so I had trouble on deciding
                        what to do as I didn't want it to turn out similar.
                        That being said I still wanted to keep the prairie with the mountains in the background
                        and of course the castle.
                    </p>
                    <p>
                        For the main element of the poster I wanted to have howl and sophie standing in the
                        middle and from the different poses I ended up chosing the kiss scene for a more romantic feel.
                    </p>
                    <p>
                        Having this I still thought it looked a bit plain. It lacked drama.
                        I thought it was the composition at first but i still liked that idea so it came to me
                        that changing from day to night could have a bigger impact as it would make it more
                        dramatic and also look more fantasy like.
                        I then decided to stick with that and see how it would turn out.
                    </p>
                    <p>
                        I then iterated with with placing stuff and painting some shadows and lights.
                    </p>
                    <p>
                        As i was quite satisfied with the look I started working on the lettering part of the poster.
                        The movie is originally in japanese but is also very popular in the west so I decided 
                        to write the title in both languages. This also applies for the voice actors' names.
                        I took some part of the billing block from other posters and added the studio ghibli 
                        logo on the corner.I also added a white line to frame the whole thing.

                    </p>
                
                    <figure>
                        <img src={poster} className="img-fluid" alt="lemon image" />
                        <figcaption className='fig-caption'>Final Poster</figcaption>
                    </figure>
                </Col>
            </Row>







        </Container>
    )
}
export default MoviePoster;