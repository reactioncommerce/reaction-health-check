import Reaction from "/imports/plugins/core/core/server/Reaction";

Reaction.Endpoints.add("get", "/health", (req, res) => {
    Reaction.Endpoints.sendResponse(res, {
        data: "Reaction is running"
    });
});
