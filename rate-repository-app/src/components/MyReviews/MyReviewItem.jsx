import {View, Text, StyleSheet, Button, Alert} from "react-native";
import {useNavigate} from "react-router-native";
import {useMutation} from "@apollo/client";
import {GET_REPOSITORIES, GET_USER} from "../../graphql/queries";
import {DELETE_REVIEW} from "../../graphql/mutations";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 10,
        alignSelf: 'center'
    },
    buttonRow: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between',
    },
    viewRepoButton: {
        margin: 5,
    },
    deleteReviewButton: {
        margin: 5,
        color: 'red',
    },
    spacer: {
        width: 10,
    },
    review: {
        flexDirection: 'row',
        margin: 5,
    },
    details: {
        flex: 1,
    },
    rating: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'blue',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    ratingText: {
        color: 'blue',
        fontWeight: 'bold',
    },
    repositoryName: {
        fontWeight: 'bold',
    },
    reviewText: {
        margin: 5,
        flexShrink: 1,
    },
});

const MyReviewItem = ({ myReview }) => {

    console.log("MyReview:", myReview)

    const [mutate, result] = useMutation(DELETE_REVIEW);

    const navigate = useNavigate();

    const formattedDate = myReview.createdAt.split('T')[0];

    const handleViewRepository = (id) => () => {
        console.log(id);
        navigate(`/${id}`);
    }

    const createTwoButtonAlert = () =>
        Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'Delete',
                onPress: () => deleteReview(myReview.id),
            },
        ]);
    const handleDeleteReview = async (id) => {
        console.log(id);
        createTwoButtonAlert();
    }

    const deleteReview = async (id) => {
        console.log("Deleting review:", id);
        try {
            return await mutate({
                variables: {id},
                refetchQueries: [{query: GET_USER, variables: {includeReviews: true}}, {query: GET_REPOSITORIES}]
            })
        } catch (error) {
            console.error('Error in createReview function', error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.review}>
                <View style={styles.rating}>
                    <Text style={styles.ratingText}>{myReview.rating}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.repositoryName}>{myReview.repository.fullName}</Text>
                    <Text>{formattedDate}</Text>
                    <Text>{myReview.text}</Text>
                </View>
            </View>
            {<View style={styles.buttonRow}>
                <Button style={styles.viewRepoButton} title="View repository" onPress={handleViewRepository(myReview.repository.id)} />
                <View style={styles.spacer} />
                <Button style={styles.deleteReviewButton} color="red" title="Delete review" onPress={() => handleDeleteReview(myReview.repository.id)} />
            </View>}
        </View>
    );
}

export default MyReviewItem;