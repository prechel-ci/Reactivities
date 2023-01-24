import React from "react";
import { Calendar } from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function ActivityFilters() {
    return (
        <>
            <Menu vertical size='large' style={{ width: '100%', marginTop: 27}}>
                <Header icon='filter' attached color='teal' content='Filter' />
                <Menu.Item content='alle Aktivitäten' />
                <Menu.Item content='Ich gehe hin' />
                <Menu.Item content='Ich verwalte es' />
            </Menu>
            <Header />
            <Calendar></Calendar>
        </>
    )
}