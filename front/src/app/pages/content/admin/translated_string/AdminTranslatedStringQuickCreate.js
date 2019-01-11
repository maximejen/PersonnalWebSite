import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {change, submit, isSubmitting} from 'redux-form';
import {
    fetchEnd,
    fetchStart,
    required,
    showNotification,
    Button,
    SaveButton,
    SimpleForm,
    LongTextInput,
    CREATE,
    REDUX_FORM_NAME,
    crudGetMatching
} from 'react-admin';
import IconContentAdd from '@material-ui/icons/Add';
import IconCancel from '@material-ui/icons/Cancel';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import buildPrismaProvider from '../../../../utils/adaptator/index';
import {server_ip} from "../../../../../App";

class AdminTranslatedStringQuickCreate extends Component {
    state = {
        error: false,
        showDialog: false
    };

    handleClick = () => {
        this.setState({showDialog: true});
    };

    handleCloseClick = () => {
        this.setState({showDialog: false});
    };

    handleSaveClick = () => {
        const {submit} = this.props;
        submit('translated-string-quick-create');
    };

    handleSubmit = values => {
        const {change, crudGetMatching, fetchStart, fetchEnd, showNotification} = this.props;


        buildPrismaProvider({
            clientOptions: {
                uri: "http://164.132.227.234:4466"
            }
        }).then(dataProvider => {
            fetchStart();
            dataProvider(CREATE, 'TranslatedString', {data: values})
                .then(({data}) => {
                    crudGetMatching(
                        'TranslatedString',
                        'description@translated_string_id',
                        { page: 1, perPage: 25 },
                        { field: 'id' },
                        {}
                    );
                    change(REDUX_FORM_NAME, 'translated_string_id', data.id);
                    this.setState({showDialog: false});
                })
                .catch(error => {
                    showNotification(error.message, 'error');
                })
                .finally(() => {
                    fetchEnd();
                });
        })
    };

    render() {
        const {showDialog} = this.state;
        const {isSubmitting} = this.props;

        return (
            <Fragment>
                <Button onClick={this.handleClick} label="ra.action.create">
                    <IconContentAdd/>
                </Button>
                <Dialog
                    fullWidth
                    open={showDialog}
                    onClose={this.handleCloseClick}
                    aria-label="Create translated string"
                >
                    <DialogTitle>Create post</DialogTitle>
                    <DialogContent>
                        <SimpleForm
                            form="translated-string-quick-create"
                            resource="TranslatedString"
                            onSubmit={this.handleSubmit}
                            toolbar={null}
                        >
                            <LongTextInput
                                source="en"
                                validate={required()}
                            />
                            <LongTextInput
                                source="fr"
                                validate={required()}
                            />
                        </SimpleForm>
                    </DialogContent>
                    <DialogActions>
                        <SaveButton
                            saving={isSubmitting}
                            onClick={this.handleSaveClick}
                        />
                        <Button label="ra.action.cancel" onClick={this.handleCloseClick}>
                            <IconCancel/>
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    isSubmitting: isSubmitting('translated-string-quick-create')(state)
});

const mapDispatchToProps = {
    change,
    crudGetMatching,
    fetchStart,
    fetchEnd,
    showNotification,
    submit
};

export default connect(mapStateToProps, mapDispatchToProps)(
    AdminTranslatedStringQuickCreate
);