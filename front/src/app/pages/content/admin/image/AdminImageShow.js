import React from 'react';
import { Show, TextField, SimpleShowLayout, ImageField } from 'react-admin';

export const AdminImageShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="alt" />
            <ImageField source="src" title='alt'/>
        </SimpleShowLayout>
    </Show>
);