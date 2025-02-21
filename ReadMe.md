# 🚀 Auto Bump Selfbot 2Hrs

## 📌 Overview
Auto Bump Selfbot is a Discord selfbot designed to automate the bumping process for servers using the Disboard bot. This selfbot ensures that your server remains visible by automatically running the `/bump` command at the required interval.

## ✨ Features
- ✅ **Automated Bumping**: Runs the `/bump` command at the correct interval without manual input.
- ⏳ **Customizable Interval**: Set the bump timer according to your needs.
- ⚡ **Easy Setup**: Simple configuration using environment variables.
- 💡 **Lightweight & Efficient**: Minimal resource usage.

## 📋 Requirements
- 🖥️ A Discord alt account.
- 🔧 Node.js (latest LTS version recommended).
- 🔑 A valid Discord bot token (used for selfbot operation).

## 📥 Installation
1. 📂 Clone the repository:
   ```sh
   git clone https://github.com/BigglesDevs/auto-bump-selfbot.git
   cd auto-bump-selfbot
   ```
2. 📦 Install dependencies:
   ```sh
   npm install
   ```
3. ⚙️ Create a `.env` file in the root directory and add the following:
   ```env
   DISCORD_TOKEN=your_discord_token_here
   CHANNEL_ID=your_channel_id_here
   ```
4. ▶️ Run the bot:
   ```sh
   node bot.js
   ```

## 🛠️ Usage
- 🤖 The bot will automatically run the `/bump` command in the specified channel at the configured interval.
- 📢 Ensure that the Disboard bot is present in the server and has the necessary permissions.
- ❌ To stop the bot, simply close the terminal or stop the Node.js process.

## ⚠️ Notes
- 🚨 **Use at Your Own Risk**: Selfbots violate Discord's Terms of Service, and using them may result in account suspension.
- 🔄 **No Support for Multiple Servers**: Currently, the bot only supports a single server at a time.

## 📜 License
This project is provided for educational purposes only. The author is not responsible for any misuse.

## ⚠️ Disclaimer
Using a selfbot is against Discord's Terms of Service. Proceed with caution. This repository is for educational and research purposes only.

