import React from 'react';
import { Show, TextField, SimpleShowLayout, ReferenceField } from 'react-admin';

export const AdminTechnologyShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <ReferenceField label="Description" source="description.id" reference="TranslatedString">
                <TextField source="en" />
            </ReferenceField>
            <ReferenceField label="Type" source="type.id" reference="TechnologyType">
                <ReferenceField label="Name" source="name.id" reference="TranslatedString">
                    <TextField source="en" />
                </ReferenceField>
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);