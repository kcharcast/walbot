# Walbot

## Adding phrases

- Create a module in `app/responses`
- This should export a function with parameters `user, request, respond`
- Call the `respond` function with an object containing a `text` property. This is what gets posted into Slack chat
- Add your phrase into the `phrases` variable in walbot.js

test