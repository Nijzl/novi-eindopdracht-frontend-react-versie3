import { useEffect, useState, createContext, useContext } from "react";
import {auth, emailprovider, provider} from "../Firebase";

function useUserInternal() {
    const [userState, setUserState] = useState({
        user: auth.currentUser,
        isLoading: auth.currentUser === null ? true : false,
        error: null,
    });
    const { user, isLoading, error } = userState;
    const isSignedIn = user !== null;
    const userId = isSignedIn ? user.uid : undefined;

    useEffect(() => {

        const onChange = (currentUser) => {
            setUserState({ user: currentUser, isLoading: false, error: null });
        };

        const onError = (error) => {
            console.error(error);
            setUserState({ user: null, isLoading: false, error });
        };

        const unsubscribe = auth.onAuthStateChanged(onChange, onError);

        return unsubscribe;
    }, []);

    const signIn = async () => {
        setUserState({ user: null, isLoading: true, error: null });
        try {
            const credentials = await auth.signInWithPopup(provider);
            setUserState({ user: credentials.user, isLoading: false, error: null });
        } catch (error) {
            console.error(error);
            setUserState({ user: null, isLoading: false, error });
        }
    };

    const signOut = async () => {
        setUserState({ user: userState.user, isLoading: true, error: null });
        try {
            await auth.signOut();
            setUserState({ user: null, isLoading: false, error: null });
        } catch (error) {
            console.error(error);
            setUserState({ user: userState.user, isLoading: false, error });
        }
    };

    return {
        user,
        userId,
        isLoading,
        isSignedIn,
        error,
        signIn,
        signOut,
    };
}

const UserContext = createContext(null);

function UserProvider({ children }) {
    const userState = useUserInternal();
    /* CHECK IF PROVIDER IS MISSING BY COMPARING CONTEXT VALUE TO DEFAULT */
    if (userState === null){
        throw new Error("useUser needs to have a UserProvider component as a parent in the React tree")
    };
    return <UserContext.Provider value={ userState }> { children } </UserContext.Provider>;
}

function useUser() {
    const userState = useContext(UserContext);
    if (userState === null) {
        throw new Error(
            "useUser needs to have a UserProvider component as a parent in the React tree."
        );
    }
    return userState;
}

export default useUser;

export { UserContext, UserProvider };