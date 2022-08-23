import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import MainStack from '../MyProject/src/navigation/StackNavigate';
import {store, persistor} from '../MyProject/src/reduxLogic/store';

const App= ()  => {

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <MainStack/>
       </PersistGate>
      </Provider>
  );
};


export default App;
