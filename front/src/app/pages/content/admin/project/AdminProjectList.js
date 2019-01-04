import React from 'react';
import { List, Datagrid, TextField, DateField, ReferenceField, EditButton, ShowButton } from 'react-admin';

export const AdminProjectList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="github_link"/>
            <ReferenceField label="Description" source="description.id" reference="TranslatedString">
                <TextField source="en" />
            </ReferenceField>
            <DateField source="beginning_date"/>
            <DateField source="ending_date"/>
            <EditButton/>
            <ShowButton />
        </Datagrid>
    </List>
);