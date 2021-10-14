import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import { store } from "./store/store";

function App() {
	console.log(process.env);
	console.log(process.env.local);

    return (
        <Provider store={store}>
           <AppRouter />
        </Provider>
    );
}
export default App;
