import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, {persistor} from "./reduxtoolkit/store.jsx"
import { PersistGate } from "redux-persist/integration/react";

const Loading = () => (
  <div className="min-h-screen bg-amber-400 flex items-center justify-center  text-white">
    {/* Aap spinner component ya skeleton yahan laga sakte ho */}
    <div className="text-lg font-medium">Loading...</div>
  </div>
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={<Loading /> } persistor={persistor}>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);