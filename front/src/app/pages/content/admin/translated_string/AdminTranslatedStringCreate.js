import React from 'react';
import { Create, SimpleForm, LongTextInput } from 'react-admin';

export const AdminTranslatedStringCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <LongTextInput source="en" />
            <LongTextInput source="fr"/>
        </SimpleForm>
    </Create>
);