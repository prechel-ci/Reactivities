import { Form, Formik } from "formik";
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup';
import { Button } from "semantic-ui-react";
import MyTextArea from "../../app/common/form/MyTextArea";
import MyTextInput from "../../app/common/form/MyTextInput";
import { observer } from "mobx-react-lite";

interface Props {
    setEditMode: (editMode: boolean) => void;
}

export default observer(function ProfileEditForm({ setEditMode }: Props) {
    const { profileStore: { profile, updateProfile } } = useStore();

    return (
        <Formik
            initialValues={{ displayName: profile?.displayName, bio: profile?.bio }}
            onSubmit={values => {
                updateProfile(values).then(() => {
                    setEditMode(false);
                })
            }}
            validationSchema={Yup.object({ displayName: Yup.string().required() })}
        >
            {({ isSubmitting, isValid, dirty }) => (
                <Form className='ui form'>
                    <MyTextInput placeholder='Anzeigename' name='displayName' />
                    <MyTextArea rows={3} placeholder='Füge deine Biographie hier ein' name='bio' />
                    <Button
                        positive
                        type='submit'
                        loading={isSubmitting}
                        content='aktualisieren'
                        floated='right'
                        disabled={!isValid || !dirty}
                    />
                </Form>
            )}
        </Formik>
    )
})