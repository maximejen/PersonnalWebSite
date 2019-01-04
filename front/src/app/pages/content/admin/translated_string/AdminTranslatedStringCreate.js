import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const AdminTranslatedStringCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="en" />
            <TextInput source="fr"/>
        </SimpleForm>
    </Create>
);