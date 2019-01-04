import React from 'react';
import { Edit, SimpleForm, TextInput, DisabledInput } from 'react-admin';

export const AdminImageEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="ID" source="id" />
            <TextInput source="src" />
            <TextInput source="alt"/>
        </SimpleForm>
    </Edit>
);