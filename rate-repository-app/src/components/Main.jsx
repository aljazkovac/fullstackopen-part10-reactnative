import {StyleSheet, View} from 'react-native';
import {Route, Routes, Navigate, useNavigate} from "react-router-native";
import AppBar from "./AppBar/AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import useSignIn from "../hooks/useSignIn";
import RepositoryItemWithReviews from "./RepoItem/RepositoryItemWithReviews";
import Review from "./RepoItem/ReviewForm";
import useReviews from "../hooks/useReviews";
import SignUp from "./SignUp";
import useSignUp from "../hooks/useSignUp";
import MyReviews from "./MyReviews/MyReviews";

const styles = StyleSheet.create({
    main: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: "#e1e4e8",
    },
});
const Main = () => {
    const [signIn] = useSignIn();
    const [signUp] = useSignUp();
    const {createReview, result} = useReviews();

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
    const onSubmitSignUp = async (values, formikHelpers) => {
        console.log(values);
        const {username, password, passwordConfirmation} = values;
        try {
            const resultSignUp = await signUp({username, password, passwordConfirmation});
            console.log("signUp data", resultSignUp.data)
            if (resultSignUp.data && resultSignUp.data.createUser) {
                const resultSignIn = await signIn({username, password});
                console.log("signIn data", resultSignIn.data)
                if (resultSignIn.data && resultSignIn.data.authenticate) {
                    navigate("/");
                }
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
            if (data && data.createReview) {
                const repositoryId = data.createReview.repositoryId;
                handleNavigateAway(repositoryId);
            }
        } catch (e) {
            console.log("Error:", e);
        }
        formikHelpers.resetForm();
    };

    const handleNavigateAway = (repositoryId) => {
        console.log("handleNavigateAway called")
        console.log("repositoryId", repositoryId)
        navigate(`/${repositoryId}`);
    };

    return (
        <View style={styles.main}>
            <AppBar/>
            <Routes>
                <Route path="/" element={<RepositoryList/>}/>
                <Route path="/signin" element={<SignIn onSubmit={onSubmitSignIn}/>}/>
                <Route path="/signup" element={<SignUp onSubmit={onSubmitSignUp}/>}/>
                <Route path="/createReview" element={<Review onSubmit={onSubmitReview} error={result.error} reset={result.reset}/>}/>
                <Route path="/myReviews" element={<MyReviews />}/>
                <Route path="/:id" element={<RepositoryItemWithReviews/>}/>
                <Route path={"*"} element={<Navigate to="/" replace/>}/>
            </Routes>
        </View>
    );
};

export default Main;