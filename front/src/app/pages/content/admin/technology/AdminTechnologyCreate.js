import React from 'react';
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput } from 'react-admin';
import AdminTranslatedStringReferenceInput from "../translated_string/AdminTranslatedStringReferenceInput";

export const AdminTechnologyCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="more_info_link"/>
            <AdminTranslatedStringReferenceInput
                label="Description"
                source="description.id"
                reference="TranslatedString"
            />
            <ReferenceInput label="Type" source="type.id" reference="TechnologyType">
                <SelectInput optionText="slug_name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);