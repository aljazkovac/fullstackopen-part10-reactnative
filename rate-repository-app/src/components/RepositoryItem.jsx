import {Text, View} from "react-native";
import {styles} from "../styles";

const RepositoryItem = ({fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount,}) => {
    return(
        <View style={styles.item}>
            <Text>Full name: {fullName}</Text>
            <Text>Description: {description}</Text>
            <Text>Language: {language}</Text>
            <Text>Forks: {forksCount}</Text>
            <Text>Stars: {stargazersCount}</Text>
            <Text>Rating: {ratingAverage}</Text>
            <Text>Reviews: {reviewCount}</Text>
        </View>
        )
}

export default RepositoryItem;