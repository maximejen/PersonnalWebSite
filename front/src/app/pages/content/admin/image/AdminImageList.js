import React from 'react';
import { List, Datagrid, TextField, EditButton, ShowButton, ImageField } from 'react-admin';

export const AdminImageList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <ImageField source="src" title='alt'/>
            <TextField source="alt"/>
            <EditButton/>
            <ShowButton />
        </Datagrid>
    </List>
);