import {StyleSheet, View} from 'react-native';
import {Route, Routes, Navigate, useNavigate} from "react-router-native";
import AppBar from "./AppBar/AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import useSignIn from "../hooks/useSignIn";
import RepositoryItemWithReviews from "./RepoItem/RepositoryItemWithReviews";
import Review from "./RepoItem/ReviewForm";
import useCreateReview from "../hooks/useCreateReview";

const styles = StyleSheet.create({
    main: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: "#e1e4e8",
    },
});
const Main = () => {
    const [signIn] = useSignIn();
    const [createReview, { error }, resetError] = useCreateReview();

    const navigate = useNavigate();
    const onSubmitSignIn = async (values, formikHelpers) => {
        console.log(values);
        const {username, password} = values;
        try {
            const {data} = await signIn({username, password});
            if (data && data.authenticate) {
                navigate("/");
            }
        } catch (e) {
            console.log("Error:", e);
        }
        formikHelpers.resetForm();
    };
    const onSubmitReview = async (values, formikHelpers) => {
        console.log(values);
        const {ownerName, repoName, rating, reviewText} = values;
        try {
            const {data} = await createReview({ownerName, repoName, rating, reviewText});
            console.log("data", data)
            if (data && data.authenticate) {
                handleNavigateAway();
            }
        } catch (e) {
            console.log("Error:", e);
        }
        formikHelpers.resetForm();
    };

    const handleNavigateAway = () => {
         resetError();
        navigate("/:id");
    };

    return (
        <View style={styles.main}>
            <AppBar/>
            <Routes>
                <Route path="/" element={<RepositoryList/>}/>
                <Route path="/signin" element={<SignIn onSubmit={onSubmitSignIn}/>}/>
                <Route path="/createReview" element={<Review onSubmit={onSubmitReview} error={error} resetError={resetError}/>}/>
                <Route path="/:id" element={<RepositoryItemWithReviews/>}/>
                <Route path={"*"} element={<Navigate to="/" replace/>}/>
            </Routes>
        </View>
    );
};

export default Main;