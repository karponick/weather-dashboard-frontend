import { rest } from 'msw';

export const handlers = [
    rest.get(`${process.env.REACT_APP_API_CITY_URL}`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                { data: [] }
            )
        )
    }),
];