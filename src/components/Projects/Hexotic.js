import { Container, Row, Col } from 'react-bootstrap';
import hex from "../../Assets/Projects/hex.png";

function Hexotic() {
    return (
        <Container>
            <Row style={{ paddingTop: 50 }} className='project-row-1'>
                <Col>
                    <img src={hex} className="img-fluid" alt="Hex" />
                </Col>
                <Col>
                    <p>
                        The objective behind this project was to create a board game based of the original hex board game.
                        This game has its own story behind and a clear set of rules, as described in the linked pdf.
                    </p>
                    <p>
                        The process involved doing the illustrations and design of the board and various game elements, 
                        as well as the game book. 
                    </p>
                    <p>
                        Finally, all of the pieces were printed, painted ,and assembled (in the case of the board itself,
                        a piece of acryllic was cut in the shape of the board).
                    </p>
                </Col>

            </Row>

            


            



        </Container>
    )
}
export default Hexotic;