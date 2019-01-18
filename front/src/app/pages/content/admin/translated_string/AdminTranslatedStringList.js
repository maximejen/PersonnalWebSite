import React from 'react';
import { List, Datagrid, TextField, EditButton, ShowButton, DeleteButton } from 'react-admin';

export const AdminTranslatedStringList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="en"/>
            <DeleteButton/>
            <EditButton/>
            <ShowButton />
        </Datagrid>
    </List>
);