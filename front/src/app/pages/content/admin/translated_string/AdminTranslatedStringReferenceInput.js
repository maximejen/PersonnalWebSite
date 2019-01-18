import React, { Fragment } from 'react';

import { ReferenceInput, SelectInput } from 'react-admin';
import AdminTranslatedStringQuickCreate from '../project/AdminTranslatedStringQuickCreate';

const AdminTranslatedStringReferenceInput = (props) => (
    <Fragment>
        <ReferenceInput {...props}>
            <SelectInput optionText="en" />
        </ReferenceInput>
        <AdminTranslatedStringQuickCreate source={props.source}/>
    </Fragment>
);

export default AdminTranslatedStringReferenceInput;