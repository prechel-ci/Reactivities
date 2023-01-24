import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";

export default function Homepage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    Aktivitäten
                </Header>
                <Header as='h2' inverted content='Willkommen zu Aktivitäten'>
                    <Button as={Link} to='/activities' size='huge' inverted>
                        Aktivitäten anzeigen
                    </Button>
                </Header>
            </Container>
        </Segment>
    )
}