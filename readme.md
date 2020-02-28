Lightweight global state management for React + Typescript.



## To Setup

1. `npm i lightweight-globalstate`

1. import `StateProvider` from 'lightweight-globalstate';

1. Wrap it around your application and optionally pass in a Type for your App state.

1. Optionally pass in an initial state


```typescript
import React from 'react';
import { StateProvider } from 'lightweight-globalstate'; // 1. Import
const initialState = {
  ...whatever
}
const App: React.FC = () => {
  return (
     <StateProvider<T> initialState={initialState}> // 2. Wrap it up
        {... your app}
    </StateProvider>
  );
};

export default App;

```

## To Consume

The useGlobalState hook returns an array containing: your state object and an update function. eg.

```typescript
import { useGlobalState } from 'lightweight-globalstate';
  const [state,updateState] = useGlobalState<T>(); 
```

## To Update

1. Call the updateState method
2. Pass in an object containing the state you want to update


``` typescript
updateState({stateObject: newValue})
```

### NOTE:

 this works differently to React.useState().
updateState will not replace the state object. I will spread it into the existing state.


``` typescript
newState = {...state, ...newValue};
```
