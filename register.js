import { Reaction } from "/server/api";

Reaction.Endpoints.add("get", "/health", (req, res) => {
    Reaction.Endpoints.sendResponse(res, {
        data: "Reaction is running"
    });
});