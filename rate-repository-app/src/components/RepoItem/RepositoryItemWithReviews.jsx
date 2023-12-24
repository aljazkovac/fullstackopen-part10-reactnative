import {FlatList} from "react-native";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import {useParams} from "react-router-native";
import useReviews from "../../hooks/useReviews";
import {memo} from "react";

const RepositoryItemWithReviews = () => {
    const { id } = useParams();
    const { reviews, fetchMore, loading } = useReviews(id, 8);
    const ReviewItemMemo = memo(ReviewItem);

    const onEndReach = () => {
        console.log("You have reached the end of the list");
        if(!loading) {
            console.log("fetching more reviews");
            fetchMore();
        }
    }
    
    const reviewsNodes = reviews && reviews.edges
        ? reviews.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={reviewsNodes}
            renderItem={({ item }) => <ReviewItemMemo review={item} />}
            keyExtractor={ (item) =>  item.id } 
            ListHeaderComponent={<RepositoryItem singleView={true} />}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.2}
        />
    );
}

export default RepositoryItemWithReviews;