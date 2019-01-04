import React from 'react';
import { Show, TextField, SimpleShowLayout, ReferenceField } from 'react-admin';

export const AdminTechnologyTypeShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <ReferenceField label="Name" source="name.id" reference="TranslatedString">
                <TextField source="en" />
            </ReferenceField>
            <ReferenceField label="Name" source="name.id" reference="TranslatedString">
                <TextField source="fr" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);