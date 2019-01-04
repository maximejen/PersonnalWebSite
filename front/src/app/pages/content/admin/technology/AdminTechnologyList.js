import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton, ShowButton } from 'react-admin';

export const AdminTechnologyList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <ReferenceField label="Description" source="description.id" reference="TranslatedString">
                <TextField source="en" />
            </ReferenceField>
            <ReferenceField label="Type" source="type.id" reference="TechnologyType">
                <TextField source="slug_name" />
            </ReferenceField>
            <EditButton/>
            <ShowButton />
        </Datagrid>
    </List>
);