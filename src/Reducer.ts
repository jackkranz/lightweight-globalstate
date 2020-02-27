export const stateReducer = <T>() => (state: T, newState: any) => ({
  ...state,
  ...newState
});
