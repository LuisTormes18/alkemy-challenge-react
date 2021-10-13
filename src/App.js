import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import { store } from "./store/store";

function App() {
	console.log('llego App')
    return (
        <Provider store={store}>
           <AppRouter />
        </Provider>
    );
}
export default App;
