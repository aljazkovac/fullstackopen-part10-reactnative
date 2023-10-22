import { Platform } from 'react-native';

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        textAlternative: '#0366d6',
        textWhite: '#ffffff',
    },
    fontSizes: {
        body: 14,
        subheading: 18,
        title: 22,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System',
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
};

export default theme;