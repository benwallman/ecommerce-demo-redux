import addCake from './addCake';

test('addCake should dispatch an action to add a cake to the users basket', async () => {
  const expectedAction = {
    type: 'ADD_CAKE',
  };
  const dispatch = jest.fn();
  await addCake()(dispatch);
  expect(dispatch).toBeCalledWith(expectedAction);
});
