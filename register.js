Reaction.Endpoints.add("get", "/health", (req, res) => {
    Reaction.Endpoints.sendResponse(res, {
        data: "Reaction is running"
    });
});