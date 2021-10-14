import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import { store } from "./store/store";

function App() {
	
	console.log(process.env);

    return (
        <Provider store={store}>
           <AppRouter />
        </Provider>
    );
}
export default App;
