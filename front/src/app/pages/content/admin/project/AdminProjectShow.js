import React from 'react';
import { Show, TextField, SimpleShowLayout, ReferenceField } from 'react-admin';

export const AdminProjectShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <ReferenceField label="Description" source="description.id" reference="TranslatedString">
                <TextField source="en" />
            </ReferenceField>
            <ReferenceField label="Complete Description" source="complete_description.id" reference="TranslatedString">
                <TextField source="en" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);