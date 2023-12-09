/***
 * This is a component for the SignUp form.
 * The Formik component is used to manage the state of the form.
 * The Formik component takes an onSubmit prop that is used to define the function that is called when the form is submitted.
 ***/

import { View, Pressable, StyleSheet } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import Text from "./Basic/Text";
import FormikTextInput from "./Basic/FormikTextInput";

const styles = StyleSheet.create({
    form: {
        backgroundColor: "white",
        padding: 15,
    },
    inputField: {
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    inputFieldError: {
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#d73a4a",
    },
    submitField: {
        margin: 5,
        padding: 10,
        borderRadius: 5,
    },
    submitText: {
        color: "white",
        textAlign: "center",
    }
});

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required'),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null])
        .required('Password confirm is required')
});

const SignUpForm = ({handleSubmit, errors}) => {
    const usernameError = errors.username;
    const passwordError = errors.password;
    const passwordConfirmationError = errors.passwordConfirmation;
    return (
        <View style={styles.form}>
            <FormikTextInput testID="usernameField" name="username" placeholder="username"
                             style={usernameError ? styles.inputFieldError : styles.inputField} />
            <FormikTextInput testID="passwordField" name="password" placeholder="password" secureTextEntry
                             style={passwordError ? styles.inputFieldError : styles.inputField} />
            <FormikTextInput testID="passwordConfirmationField" name="passwordConfirmation" placeholder="password confirmation" secureTextEntry
                             style={passwordConfirmationError ? styles.inputFieldError : styles.inputField} />
            <Pressable testID="submitButton" onPress={handleSubmit} style={({pressed}) => [
                {
                    backgroundColor: pressed ? "black" : "#0366d6",
                },
                styles.submitField
            ]}
            >
                <Text style={styles.submitText}>Sign Up</Text>
            </Pressable>
        </View>
    );
};

const SignUp = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
                passwordConfirmation: "",
            }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {formikProps => <SignUpForm {...formikProps} />}
        </Formik>
    );
}
export default SignUp;