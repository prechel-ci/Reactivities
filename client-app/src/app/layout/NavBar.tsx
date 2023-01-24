import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reactivities von Eugen Prechel
                </Menu.Item>
                <Menu.Item as={NavLink} to="/activities" name='Aktivitäten'/>
                <Menu.Item as={NavLink} to="/errors" name='Fehlerprüfung'/>
                <Menu.Item>
                    <Button as={NavLink} to="/createActivity" positive content='Aktivität erstellen' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}