import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { ActivityFormValues } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { categoryOptions } from '../../../app/common/options/categoryOptions';
import MyDateInput from '../../../app/common/form/MyDateInput';
import {v4 as uuid} from 'uuid';

export default observer(function ActivityForm() {
    const { activityStore } = useStore();
    const { loadActivity, loadingInitial, createActivity, updateActivity } = activityStore;
    const { id } = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<ActivityFormValues>(new ActivityFormValues());

    const validationSchema = Yup.object({
        title: Yup.string().required('Titel wird vorausgesetzt...'),
        description: Yup.string().required('Beschreibung wird vorausgesetzt...'),
        category: Yup.string().required(),
        date: Yup.string().required('Datum wird vorausgesetzt...').nullable(),
        venue: Yup.string().required(),
        city: Yup.string().required()
    })

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(new ActivityFormValues(activity)))
    }, [id, loadActivity])

    function handleFormSubmit(activity: ActivityFormValues) {
        if (!activity.id) {
            activity.id = uuid();
            createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }

    }

    if (loadingInitial) return <LoadingComponent content='Lade aktivit??t...' />

    return (
        <Segment clearing>
            <Header content='Details zur Aktivit??t' sub color='teal' />
            <Formik 
            validationSchema={validationSchema}
            enableReinitialize 
            initialValues={activity} 
            onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='title' placeholder='Titel' />
                        <MyTextArea rows={3} placeholder='Beschreibung' name='description' />
                        <MySelectInput options={categoryOptions} placeholder='Kategorie' name='category' />
                        <MyDateInput 
                            placeholderText='Datum' 
                            name='date'
                            showTimeSelect
                            timeCaption='Zeit'
                            dateFormat='MMMM d, yyyy h:mm aa' />
                        <Header content='Ortdetails' sub color='teal' />
                        <MyTextInput placeholder='Ort' name='city' />
                        <MyTextInput placeholder='Veranstaltungsort' name='venue' />
                        <Button 
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={isSubmitting} floated='right' positive type='submit' content='??bernehmen' />
                        <Button as={Link} to='/activities' floated='right' type='button' content='Schlie??en' />
                    </Form>
                )}
            </Formik>

        </Segment>
    )
})