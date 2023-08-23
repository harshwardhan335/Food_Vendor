import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("logo should load on loading header", ()=> {
    const header= render(
    <StaticRouter>
        <Provider store={store}>
        <Header/>
    </Provider>
    </StaticRouter>
    );

    //check if logo is loaded
    const logo = header.getAllByTestId("logo");
    
    expect(logo[0].src).toBe("http://localhost/dummy.png");
});

//check if online or not
test("Online status should be green on loading header", ()=> {
    const header= render(
    <StaticRouter>
        <Provider store={store}>
        <Header/>
    </Provider>
    </StaticRouter>
    );

    //check if logo is loaded
    const onlineStatus = header.getByTestId("online-status");
    
    expect(onlineStatus.innerHTML).toBe("🟢");
});
// check for iart item is empty
test("Cart should have 0 item on loading header", ()=> {
    const header= render(
    <StaticRouter>
        <Provider store={store}>
        <Header/>
    </Provider>
    </StaticRouter>
    );

    //check if logo is loaded
    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart- 0 items");
});