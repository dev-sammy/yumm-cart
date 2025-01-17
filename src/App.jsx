import { Provider } from "react-redux";
import Header from "./components/Layout/Header";
import Products from "./components/Product/Products";
import store from "./store";

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Products />
    </Provider>
  );
}

export default App;
