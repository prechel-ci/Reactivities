import { observer } from 'mobx-react-lite';
import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import ProfilePhotos from './ProfilePhotos';

interface Props {
    profile: Profile
}

export default observer(function ProfileContent({profile}: Props) {
    const panes = [
        {menuItem: 'Über', render: () => <Tab.Pane>Über</Tab.Pane> },
        {menuItem: 'Fotos', render: () => <ProfilePhotos profile={profile}/> },
        {menuItem: 'Ereignisse', render: () => <Tab.Pane>Ereignisse</Tab.Pane> },
        {menuItem: 'Follower', render: () => <Tab.Pane>Follower</Tab.Pane> },
        {menuItem: 'folgen', render: () => <Tab.Pane>folgen</Tab.Pane> }
    ];

    return (
        <Tab
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={panes}
        />
    )
})