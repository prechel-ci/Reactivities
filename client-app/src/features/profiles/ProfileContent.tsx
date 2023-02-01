import { observer } from 'mobx-react-lite';
import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';
import ProfileAbout from './ProfileAbout';
import ProfileFollowings from './ProfileFollowings';
import ProfilePhotos from './ProfilePhotos';

interface Props {
    profile: Profile
}

export default observer(function ProfileContent({profile}: Props) {
    const {profileStore} = useStore();

    const panes = [
        {menuItem: 'Über', render: () => <ProfileAbout /> },
        {menuItem: 'Fotos', render: () => <ProfilePhotos profile={profile}/> },
        {menuItem: 'Ereignisse', render: () => <Tab.Pane>Ereignisse</Tab.Pane> },
        {menuItem: 'Follower', render: () => <ProfileFollowings /> },
        {menuItem: 'folgen', render: () => <ProfileFollowings /> }
    ];

    return (
        <Tab
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={panes}
            onTabChange={(e, data) => profileStore.setActiveTab(data.activeIndex)}
        />
    )
})