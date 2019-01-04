import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const AdminImageCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="src" />
            <TextInput source="alt"/>
        </SimpleForm>
    </Create>
);