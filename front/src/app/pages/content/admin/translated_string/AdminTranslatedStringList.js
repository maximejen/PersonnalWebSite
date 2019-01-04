import React from 'react';
import { List, Datagrid, TextField, EditButton, ShowButton } from 'react-admin';

export const AdminTranslatedStringList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="en"/>
            <EditButton/>
            <ShowButton />
        </Datagrid>
    </List>
);