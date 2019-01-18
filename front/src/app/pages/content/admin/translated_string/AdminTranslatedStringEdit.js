import React from 'react';
import { Edit, SimpleForm, DisabledInput, LongTextInput } from 'react-admin';

export const AdminTranslatedStringEdit = (props) => {
    console.log(props);
    return <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="ID" source="id" />
            <LongTextInput source="en" />
            <LongTextInput source="fr"/>
        </SimpleForm>
    </Edit>
};