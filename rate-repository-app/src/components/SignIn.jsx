import { View, Pressable } from "react-native";
import { Formik } from "formik";
import Text from "./Basic/Text";
import FormikTextInput from "./Basic/FormikTextInput";

const onSubmit = (values) => {
    console.log(values);
};

const SignInForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput name="username" placeholder="username" />
            <FormikTextInput name="password" placeholder="password" secureTextEntry />
            <Pressable onPress={onSubmit}>
                <Text>Submit</Text>
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
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
}
export default SignIn;