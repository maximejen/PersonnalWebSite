import React, { Fragment } from 'react';
import { Field } from 'redux-form';

import { ReferenceInput, SelectInput } from 'react-admin';
import AdminTranslatedStringQuickCreate from './AdminTranslatedStringQuickCreate';

const AdminTranslatedStringReferenceInput = (props) => (
    <Fragment>
        <ReferenceInput {...props}>
            <SelectInput optionText="en" />
        </ReferenceInput>
        <AdminTranslatedStringQuickCreate />

        <Field
            name="translated_string_id"
            component={({ input }) =>
                input.value && <AdminTranslatedStringQuickCreate id={input.value} />
            }
        />
    </Fragment>
);

export default AdminTranslatedStringReferenceInput;