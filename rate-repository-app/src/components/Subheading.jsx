// The Subheading component. A stepping stone between the Text and Heading components.

// *** IMPORTS ***
import { StyleSheet } from 'react-native';
import Text from "./Text";
import theme from '../theme';

// *** STYLES ***
const styles = StyleSheet.create({
    text: {
        color: theme.colors.textAlternative,
        fontFamily: theme.fonts.main,
        fontSize: theme.fontSizes.subheading,
        fontStyle: "italic",
        paddingBottom: 10,
        paddingTop: 10,
    },
    colorTextPrimary: {
        color: theme.colors.textPrimary,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    fontWeightNormal: {
        fontWeight: theme.fontWeights.normal,
    },
});

/// *** COMPONENT ***
/*
It is possible to specify style in more detail, e.g.
<Text style={{ paddingBottom: 10, fontSize: 23 }} fontWeightBold={true}
      color="textAlternative">Style Example</Text>
 */
const Subheading = ({ color, fontWeight, style, ...props }) => {
    const componentStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'textPrimary' && styles.colorTextPrimary,
        fontWeight === "normal" && styles.fontWeightNormal,
        style,
    ];

    return <Text style={componentStyle} {...props} />;
};

export default Subheading;
