import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import  store  from "./reduxtoolkit/store.jsx";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// Create the persistor using the store
const persistor = persistStore(store);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
