import rootReducer from './root';

test('should create the initial state', () => {
  expect(rootReducer({}, {})).toEqual({ basket: {
    numberOfCakes: 0,
  } });
});
