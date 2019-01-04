import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    DateInput,
    ReferenceArrayInput,
    SelectArrayInput
} from 'react-admin';
import AdminTranslatedStringReferenceInput from "../translated_string/AdminTranslatedStringReferenceInput"

export class AdminProjectCreate extends React.Component {

    render() {
        return (
            <Create {...this.props}>
                <SimpleForm>
                    <TextInput source="name"/>

                    <AdminTranslatedStringReferenceInput
                        label="Description"
                        source="description.id"
                        reference="TranslatedString"
                    />

                    <AdminTranslatedStringReferenceInput
                        label="Complete Description"
                        source="complete_description.id"
                        reference="TranslatedString"
                    />

                    <ReferenceArrayInput label="Technologies" source="technologies.id" reference="Technology">
                        <SelectArrayInput optionText="name"/>
                    </ReferenceArrayInput>
                    <ReferenceArrayInput label="Images" source="images.id" reference="Image">
                        <SelectArrayInput optionText="alt"/>
                    </ReferenceArrayInput>
                    <TextInput source="github_link"/>
                    <TextInput source="testing_link"/>
                    <DateInput source="beginning_date"/>
                    <DateInput source="ending_date"/>
                </SimpleForm>
            </Create>
        );
    }
};