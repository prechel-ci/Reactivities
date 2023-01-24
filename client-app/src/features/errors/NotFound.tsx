import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Upps - wir haben überall geschaut, aber nichts gefunden, wonach du suchst.
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities'>
                    Zurück zu Aktivitäten
                </Button>
            </Segment.Inline>
        </Segment>
    )
}