import {FlatList} from "react-native";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import {useParams} from "react-router-native";
import useReviews from "../../hooks/useReviews";

const RepositoryItemWithReviews = () => {
    const { id } = useParams();
    const { reviews, fetchMore } = useReviews(id, 5);

    const onEndReach = () => {
        console.log("You have reached the end of the list");
        fetchMore(); 
    }

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={(item) => item.id} // Make sure 'item' is not destructured since it's a single item from 'reviews'
            ListHeaderComponent={<RepositoryItem singleView={true} />}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    );
}

export default RepositoryItemWithReviews;