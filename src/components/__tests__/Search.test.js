import "@testing-library/jest-dom";
import Body from "../Body";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data"
import Shimmer from "../Shimmer";


global.fetch=jest.fn(()=> {
    return Promise.resolve({
        json: ()=> {
            return Promise.resolve(RESTAURANT_DATA);
        },
    });
});
test("Shimmer should load on homepage",()=> {
    const body = render(
        <StaticRouter>
        <Provider store={store}>
            <Body/>
        </Provider>
        </StaticRouter>
    );
    const shimmer=body.getByTestId("shimmer");
    console.log(shimmer);
    expect(shimmer.children.length).toBe(20);
});

test("Restaurants should load on homepage", async ()=> {
    const body = render(
        <StaticRouter>
        <Provider store={store}>
            <Body/>
        </Provider>
        </StaticRouter>
    );
    await waitFor(()=> expect(body.getByTestId("search-btn")));
    const resList=body.getByTestId("res-list");
    expect(resList.children.length).toBe(20);
});

test("Search for string (food) on homepage", async ()=> {
    const body = render(
        <StaticRouter>
        <Provider store={store}>
            <Body/>
        </Provider>
        </StaticRouter>
    );
    await waitFor(()=> expect(body.getByTestId("search-btn")));
    
    const input=body.getByTestId("search-input");

    fireEvent.change(input,{
            target: {
                value: "pizza",
            },
        });
    const searchBtn = body.getByTestId("search-btn");

    fireEvent.click(searchBtn);

    const resList = body.getByTestId("res-list")

    expect(resList.children.length).toBe(2);
});