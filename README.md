# Steam-Discount-Notifier

Steam Discount Notifier is a simple tool that helps Steam users keep track of game discounts on their wishlists. This open-source project allows users to receive notifications whenever a game on their Steam wishlist goes on sale, making it easier to catch great deals and save money on their favorite games.

# Features #

Automatically checks your Steam wishlist for discounts.
Sends desktop notifications when a discounted game is found.
Configurable to run at specific intervals throughout the day.
Easy setup and usage.
Getting Started:

To get started, simply download the repository, set up the required dependencies, and configure the task scheduler to run the script at your preferred intervals.

# Prerequisites #

Before you begin, make sure you have the following prerequisites installed on your system:

Node.js (Recommended version: 14 or higher)

npm

# Installation #

Clone this repository to your local machine:

git clone https://github.com/YourUsername/steam-discount-notifier.git

# Navigate to the project folder #

cd steam-discount-notifier

# Install the required Node.js modules #

npm install

# Configuration #

Change Your Wishlist URL:

Open the wishlist-notifier.js file in a text editor of your choice.

# Find the following line #

" const wishlistUrl = " 'https://store.steampowered.com/wishlist/profiles/ Your Whishlist ID' " ( line 8 maybe )

Replace the URL with your Steam wishlist URL. You can find this URL by visiting your Steam profile, navigating to your wishlist, and copying the URL from your browser's address bar.

# Schedule the Script (Windows) #

Open the Task Scheduler on Windows.
Click on "Create Task."
Go to the "Triggers" tab, click "New," and configure the task to run at your preferred intervals (e.g., daily, multiple times per day).
In the "Actions" tab, select "Start a Program" and browse to the run-script.bat file in your project folder.
Complete the wizard to create the task.

# Contributing #

Contributions to this project are welcome! Feel free to open issues, suggest enhancements, or submit pull requests to help improve Steam Discount Notifier.

# Author #

Devan M
