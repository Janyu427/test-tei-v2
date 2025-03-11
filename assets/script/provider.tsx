
"use client"

import { Provider } from "react-redux";

import store from "@/redux/store";

import Loading from "../../src/app/components/loading"

const App = ({ children }: any) => {
    return (
        <>
            <Provider store={store}>
                <Loading />
                {children}
            </Provider>
        </>
    );
};

export default App;
