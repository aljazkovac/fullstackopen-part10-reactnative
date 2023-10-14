import { StyleSheet, View} from 'react-native';
import { Route, Routes, Navigate } from "react-router-native";
import AppBar from "./AppBar/AppBar";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
    main: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: "#e1e4e8",
    },
});
const Main = () => {
    return (
        <View style={styles.main}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path={"*"} element={<Navigate to="/" replace />} />
            </Routes>
            <RepositoryList />
        </View>
    );
};

export default Main;