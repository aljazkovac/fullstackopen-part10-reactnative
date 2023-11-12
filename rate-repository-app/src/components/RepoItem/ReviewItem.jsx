import { View, Text } from "react-native";

const ReviewItem = ({ review }) => {
    console.log("Review:", review)
    return (
        <View>
            <Text>Rating: {review.rating}</Text>
            <Text>Reviewer: {review.user.username}</Text>
            <Text>{review.createdAt}</Text>
            <Text>{review.text}</Text>
        </View>
    );
}

export default ReviewItem;