import React from 'react';
import { Edit, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput } from 'react-admin';

export const AdminTechnologyEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="ID" source="id" />
            <TextInput source="name" />
            <ReferenceInput label="Description" source="description.id" reference="TranslatedString">
                <SelectInput optionText="en" />
            </ReferenceInput>
            <ReferenceInput label="Type" source="type.id" reference="TechnologyType">
                <SelectInput optionText="slug_name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);