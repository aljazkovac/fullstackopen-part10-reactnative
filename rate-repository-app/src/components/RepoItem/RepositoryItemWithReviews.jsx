import {FlatList} from "react-native";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import {useParams} from "react-router-native";
import {useEffect, useState} from "react";
import useReviews from "../../hooks/useReviews";

const RepositoryItemWithReviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const {fetchReviews} = useReviews();

    useEffect(() => {
        const fetch = async () => {
            const reviewsData = await fetchReviews(id);
            if (reviewsData !== undefined && reviewsData !== null)
            {
                setReviews(reviewsData.edges.map(edge => edge.node));
            }
            console.log("ReviewsData:", reviewsData.edges.node);
        };
        fetch();
    }, [id]);

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={(item) => item.id} // Make sure 'item' is not destructured since it's a single item from 'reviews'
            ListHeaderComponent={<RepositoryItem singleView={true} />}
        />
    );
}

export default RepositoryItemWithReviews;