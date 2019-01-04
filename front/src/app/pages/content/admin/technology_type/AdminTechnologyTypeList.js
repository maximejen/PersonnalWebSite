import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton, ShowButton } from 'react-admin';

export const AdminTechnologyTypeList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <ReferenceField label="Name" source="name.id" reference="TranslatedString">
                <TextField source="en" />
            </ReferenceField>
            <EditButton/>
            <ShowButton />
        </Datagrid>
    </List>
);