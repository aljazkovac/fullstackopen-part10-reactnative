/***
 * This is a component for the Review form.
 * The Formik component is used to manage the state of the form.
 * The Formik component takes an onSubmit prop that is used to define the function that is called when the form is submitted.
***/

import { View, Pressable, StyleSheet } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import Text from "../Basic/Text";
import FormikTextInput from "../Basic/FormikTextInput";

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
    ownerName: yup
        .string()
        .required("Repository's owner name is required"),
    repoName: yup
        .string()
        .required('Repository name is required'),
    rating: yup
        .number()
        .min(0)
        .max(100)
        .required('Rating is a required number between 0 and 100'),
    reviewText: yup
        .string()
        .notRequired()
});

const ReviewForm = ({handleSubmit, errors}) => {
    const ownerNameError = errors.ownerName;
    const repoNameError = errors.repoName;
    const ratingError = errors.rating;

    return (
        <View style={styles.form}>
            <FormikTextInput testID="ownerNameField" name="owner name" placeholder="owner name"
                             style={ownerNameError ? styles.inputFieldError : styles.inputField} />
            <FormikTextInput testID="repoNameField" name="repo name" placeholder="repo name"
                             style={repoNameError ? styles.inputFieldError : styles.inputField} />
            <FormikTextInput testID="rating" name="rating" placeholder="rating"
                             style={ratingError ? styles.inputFieldError : styles.inputField} />
            <FormikTextInput testID="reviewTextField" name="review text" placeholder="review text" multiline
                             style={styles.inputField} />
            <Pressable testID="submitButton" onPress={handleSubmit} style={({pressed}) => [
                {
                backgroundColor: pressed ? "black" : "#0366d6",
                },
                styles.submitField
            ]}
            >
                <Text style={styles.submitText}>Submit review</Text>
            </Pressable>
        </View>
    );
};

const Review = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{
                ownerName: "",
                repoName: "",
                rating: "",
                reviewText: "",
            }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {formikProps => <ReviewForm {...formikProps} />}
        </Formik>
    );
}
export default Review;