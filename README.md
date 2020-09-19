# JS Bot 🤖
A Bot for searching JS libraries and modules which is written JS itself.

## Usage
Create a .env file and add these lines in it.

```env
BOT_TOKEN=your_bot_token
```

* installl the dependencies
    ```console
    $npm install discord.js
    $npm install dotenv
    $npm install nodemon
    ```

* run the bot 
    ```console
    $nodemon ./src/bot.json
    ```
    
    or

    ```console
    node ./src/bot.json
    ```
# Usage in server

* Mention the bot to greet your self.
* `%kick User_ID` to kick someone.
* `%ban User_ID` to ban someone.

**NOTE:** Make sure, `kick` and `ban` commands can be only used by dedicated users.