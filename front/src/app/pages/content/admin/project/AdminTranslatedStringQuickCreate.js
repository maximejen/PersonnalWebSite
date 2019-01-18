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

// import buildOpenCrudProvider from 'ra-data-opencrud';
import buildPrismaProvider from '../../../../utils/adaptator/index';

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
        submit('translatedstring-quick-create');
    };

    handleSubmit = values => {
        const {change, crudGetMatching, fetchStart, fetchEnd, showNotification} = this.props;
        fetchStart();

        buildPrismaProvider({
            clientOptions: {
                uri: "http://164.132.227.234:4466"
            }
        }).then(dataProvider => {
            dataProvider(CREATE, 'TranslatedString', {data: values})
                .then(({data}) => {
                    crudGetMatching(
                        'TranslatedString',
                        'TranslatedString@' + this.props.source,
                        { page: 1, perPage: 25 },
                        { field: 'id', order: 'DESC' },
                        {}
                    );
                    change(REDUX_FORM_NAME, this.props.source, data.id);
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
                    <DialogTitle>Create Translated String</DialogTitle>
                    <DialogContent>
                        <SimpleForm
                            form="translatedstring-quick-create"
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
    isSubmitting: isSubmitting('translatedstring-quick-create')(state)
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
