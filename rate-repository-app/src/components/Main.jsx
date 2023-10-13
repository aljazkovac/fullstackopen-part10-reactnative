import {View} from 'react-native';
import AppBar from "./AppBar";
import Subheading from "./Subheading";
import RepositoryList from "./RepositoryList";
import {styles} from "../styles";

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Subheading>Rate Repository Application</Subheading>
            <RepositoryList />
        </View>
    );
};

export default Main;