import {Text, View} from 'react-native';
import RepositoryList from "./RepositoryList";
import {styles} from "../styles";

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Rate Repository Application</Text>
            <RepositoryList />
        </View>
    );
};

export default Main;