// The Text component. The most basic component for text rendering.

// *** IMPORTS ***
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

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
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
});

/// *** COMPONENT ***
/*
It is possible to specify style in more detail, e.g.
<Text style={{ paddingBottom: 10, fontSize: 23 }} fontWeightBold={true}
      color="textAlternative">Style Example</Text>
 */
const Text = ({ color, fontWeight, style, ...props }) => {
    const componentStyle= [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'textAlternative' && styles.colorTextAlternative,
        fontWeight === "bold" && styles.fontWeightBold,
        style,
    ];

    return <NativeText style={componentStyle} {...props} />;
};

export default Text;