import React from 'react';
import { Show, TextField, SimpleShowLayout } from 'react-admin';

export const AdminTranslatedStringShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="en" />
            <TextField source="fr" />
        </SimpleShowLayout>
    </Show>
);