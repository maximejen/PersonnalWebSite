import React from 'react';
import { Edit, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';

export const AdminTechnologyTypeEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="ID" source="id" />
            <TextInput source="slug_name" />
            <ReferenceInput label="Name" source="name.id" reference="TranslatedString">
                <SelectInput optionText="en" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);