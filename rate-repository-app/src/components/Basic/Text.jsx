// The Text component. The most basic component for text rendering.

// *** IMPORTS ***
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../../theme';

// *** STYLES ***
const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorTextAlternative: {
        color: theme.colors.textAlternative,
    },
    colorTextWhite: {
        color: theme.colors.textWhite,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
    backgroundColorPrimary: {
        backgroundColor: theme.colors.textAlternative,
    }
});

/// *** COMPONENT ***
/*
It is possible to specify style in more detail, e.g.
<Text style={{ paddingBottom: 10, fontSize: 23 }} fontWeightBold={true}
      color="textAlternative">Style Example</Text>
 */
const Text = ({ color, fontWeight, backgroundColor, style, ...props }) => {
    const componentStyle= [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'textAlternative' && styles.colorTextAlternative,
        color === 'textWhite' && styles.colorTextWhite,
        fontWeight === "bold" && styles.fontWeightBold,
        backgroundColor === "primary" && styles.backgroundColorPrimary,
        style,
    ];

    return <NativeText style={componentStyle} {...props} />;
};

export default Text;