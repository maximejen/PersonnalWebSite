import React from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput, ReferenceArrayInput, SelectArrayInput } from 'react-admin';

export const AdminProjectEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput label="Description" source="description.id" reference="TranslatedString">
                <SelectInput optionText="en" />
            </ReferenceInput>
            <ReferenceInput label="Complete Description" source="complete_description.id" reference="TranslatedString">
                <SelectInput optionText="en" />
            </ReferenceInput>
            <ReferenceArrayInput label="Technologies" source="technologies.id" reference="Technology">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <ReferenceArrayInput label="Images" source="images.id" reference="Image">
                <SelectArrayInput optionText="alt" />
            </ReferenceArrayInput>
            <TextInput source="github_link" />
            <TextInput source="testing_link" />
            <DateInput source="beginning_date" />
            <DateInput source="ending_date" />
        </SimpleForm>
    </Edit>
);