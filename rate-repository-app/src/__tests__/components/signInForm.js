import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignIn from "../../components/SignIn";

describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            // render the SignInContainer component, fill the text inputs and press the submit button
            const onSubmit = jest.fn();
            render (<SignIn onSubmit={onSubmit}/>);
            fireEvent.changeText(screen.getByTestId('usernameField'), 'kalle');
            fireEvent.changeText(screen.getByTestId('passwordField'), 'password');
            fireEvent.press(screen.getByTestId('submitButton'));

            await waitFor(() => {
                // expect the onSubmit function to have been called once and with a correct first argument
                expect(onSubmit).toHaveBeenCalledTimes(1);
                expect(onSubmit.mock.calls[0][0]).toEqual({
                    username: 'kalle',
                    password: 'password',
                });
            });
        });
    });
});