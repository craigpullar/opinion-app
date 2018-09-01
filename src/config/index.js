import firebase from "firebase";
import FirebaseConfig from "./firebase.config";
import AppStore from "./redux.config";
import AppRoutes from "./routes.config";


export const initFirebase = () => { firebase.initializeApp(FirebaseConfig); };
export const ReduxAppStore = AppStore;
export const Routes = AppRoutes;
