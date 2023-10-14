import {StatusBar, StyleSheet, View} from 'react-native';
import AppBar from "./AppBar/AppBar";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
    main: {
        marginTop: StatusBar.currentHeight || 0,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: "#e1e4e8",
    },
});
const Main = () => {
    return (
        <View style={styles.main}>
            <AppBar />
            <RepositoryList />
        </View>
    );
};

export default Main;