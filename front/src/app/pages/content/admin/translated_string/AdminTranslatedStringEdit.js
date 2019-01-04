import React from 'react';
import { Edit, SimpleForm, DisabledInput, TextInput } from 'react-admin';

export const AdminTranslatedStringEdit = (props) => {
    console.log(props);
    return <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="ID" source="id" />
            <TextInput source="en" />
            <TextInput source="fr"/>
        </SimpleForm>
    </Edit>
};