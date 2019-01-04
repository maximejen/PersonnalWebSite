import React from 'react';
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput } from 'react-admin';

export const AdminTechnologyCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="more_info_link"/>
            <ReferenceInput label="Description" source="description.id" reference="TranslatedString">
                <SelectInput optionText="en" />
            </ReferenceInput>
            <ReferenceInput label="Type" source="type.id" reference="TechnologyType">
                <SelectInput optionText="slug_name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);