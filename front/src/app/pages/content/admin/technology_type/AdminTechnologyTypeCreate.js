import React from 'react';
import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput } from 'react-admin';

export const AdminTechnologyTypeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="slug_name" />
            <ReferenceInput label="Name" source="name.id" reference="TranslatedString">
                <SelectInput optionText="en" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);