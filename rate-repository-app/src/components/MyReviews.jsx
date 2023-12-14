import {FlatList} from "react-native";
import ReviewItem from "./../components/RepoItem/ReviewItem";
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_USER} from "../graphql/queries";

const MyReviews = () => {

    const [myReviews, setMyReviews] = useState([]);

    const { data } = useQuery(GET_USER, {
        variables: { includeReviews: true}
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
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={(item) => item.id} // Make sure 'item' is not destructured since it's a single item from 'reviews'
        />
    );
}

export default MyReviews ;