/***
 * This is a component for the SignIn form.
 * The Formik component is used to manage the state of the form.
 * The Formik component takes an onSubmit prop that is used to define the function that is called when the form is submitted.
***/

import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";
import Text from "./Basic/Text";
import FormikTextInput from "./Basic/FormikTextInput";

const onSubmit = (values, formikHelpers) => {
    console.log(values);
    formikHelpers.resetForm();
};

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

const SignInForm = ({ handleSubmit }) => {
    return (
        <View style={styles.form}>
            <FormikTextInput name="username" placeholder="username" style={styles.inputField} />
            <FormikTextInput name="password" placeholder="password" secureTextEntry style={styles.inputField} />
            <Pressable onPress={handleSubmit} style={({pressed}) => [
                {
                backgroundColor: pressed ? "black" : "#0366d6",
                },
                styles.submitField
            ]}
            >
                <Text style={styles.submitText}>Sign In</Text>
            </Pressable>
        </View>
    );
};

const SignIn = () => {
    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            onSubmit={onSubmit}
        >
            {formikProps => <SignInForm {...formikProps} />}
        </Formik>
    );
}
export default SignIn;