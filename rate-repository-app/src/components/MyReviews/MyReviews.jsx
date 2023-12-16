import {FlatList} from "react-native";
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_USER} from "../../graphql/queries";
import MyReviewItem from "./MyReviewItem";

const MyReviews = () => {

    const [myReviews, setMyReviews] = useState([]);

    const { data } = useQuery(GET_USER, {
        variables: { includeReviews: true, fetchPolicy: 'network-only' }
    });

    useEffect(() => {
        if (data?.me?.reviews)
        {
            setMyReviews(data.me.reviews.edges.map(edge => edge.node));
        }
    }, [data]);

    console.log("MyReviewsData:", myReviews);

    return (
        <FlatList
            data={myReviews}
            renderItem={({ item }) => <MyReviewItem myReview={item} />}
            keyExtractor={(item) => item.id} // Make sure 'item' is not destructured since it's a single item from 'reviews'
        />
    );
}

export default MyReviews ;