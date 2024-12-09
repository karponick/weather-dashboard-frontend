import { rest } from "msw";
import { server } from "../../mocks/server";
import SearchBar from "./SearchBar";
import { screen, render } from "@testing-library/react";

// 1. City Search Input: Verify that there is a text input which allows user to enter the City name.
test("test for City Search Input", async () => {
    render(<SearchBar />);
    const ele = await screen.findByRole("input[type='text']");
    expect(ele).toBeInTheDocument();
});
// 2. Dropdown Rendering: Confirm the dropdown displays the correct options based on user input.
test("test for correct Dropdown Rendering", async () => {
    render(<SearchBar />);
    const ele = await screen.findByRole("divitem");
    //TODO
    expect(ele).toBeInTheDocument();
});

// 3. City Selection: Check that selecting a city triggers the weather data fetch and the API is properly called.
test("test for correct API triggers on city select", async () => {
    render(<SearchBar />);
    //TODO
});

// 4. Weather Data Rendering: Ensure weather details like temperature and description are correctly displayed.
test("test for correct weather data rendering", async () => {
    render(<SearchBar />);
    //TODO
});

// 5. Error Handling: Test that an error message appears if an API request fails or returns no results.
test("displays error message", async () => {
    server.use(
        rest.get(`${process.env.REACT_APP_API_CITY_URL}`, (res, req, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({ message: "OK" })
            );
        })
    );
    render(<SearchBar />);
    const errorMes = await screen.findByText(/No results/i);
    expect(errorMes).toBeInTheDocument();
});
// 6. Link Functionality: Check that clicking each Link in the navbar routes to the intended page.
test("display correct city information on link click", () => {
    render(<SearchBar />);
    // TODO
});

