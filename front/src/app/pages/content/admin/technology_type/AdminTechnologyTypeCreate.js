import React from 'react';
import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput } from 'react-admin';
import AdminTranslatedStringReferenceInput from "../translated_string/AdminTranslatedStringReferenceInput";

export const AdminTechnologyTypeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="slug_name" />
            <AdminTranslatedStringReferenceInput
                label="Name"
                source="name.id"
                reference="TranslatedString"
            />
        </SimpleForm>
    </Create>
);