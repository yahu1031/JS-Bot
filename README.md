# JS Bot 🤖
A Bot for searching JS libraries and modules which is written JS itself.

## Usage
Create a .env file and add these lines in it.

```env
BOT_TOKEN=your_bot_token
```

* installl the dependencies
    ```console
    $ npm install discord.js
    $ npm install dotenv
    $ npm install nodemon
    $ npm install discord.js-docs
    $ npm install node-fetch
    ```

* run the bot 
    ```console
    $ nodemon ./src/bot.js
    ```
    
    or

    ```console
    $ node ./src/bot.js
    ```
# Usage in server

* Mention the bot to greet your self.
* `%kick User_ID` to kick someone.
* `%ban User_ID` to ban someone.
* `%delete no.of_messages` to delete messages.
* `!Object/Property` to know about it more.
* `?all Object/Property` to know what all have this Object/Property. 

**NOTE:** Make sure, `kick`, `ban`, `delete` commands can be only used by dedicated users.