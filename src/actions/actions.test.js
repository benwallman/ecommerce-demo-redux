import signIn from './signIn';

test('signIn should dispatch an action to sign the user in', async () => {
  const expectedAction = {
    type: 'SIGN_IN',
  };
  const dispatch = jest.fn();
  await signIn()(dispatch);
  expect(dispatch).toBeCalledWith(expectedAction);
});
