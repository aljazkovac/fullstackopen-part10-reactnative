/***
 *  This component is a wrapper for the React Native TextInput component.
 *  It is used to encapsulate the styling of the TextInput component.
 *  The style prop is used to pass in styles that are defined in the styles object.
 *  The rest of the props are passed to the TextInput component.
***/

import { TextInput as NativeTextInput } from 'react-native';

const TextInput = ({ style, ...props }) => {
    const textInputStyle = [style];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;