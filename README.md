# Bounteous JavaScript Coding Challenge

## The Setup

In order to perform this test you need to install the project with the necessary node_modules.

First, run the following code:

### `npm install`

Once the modules are properly installed, run the next code:

### `npm run dev`

This will make your browser open the URL http://192.168.2.18:8080

You may also run a test to see if the code is being rendered of if there is any response from the API by running:

### `npm test`

## Instructions

Use the input to search for any available TV Serie.

Once you hit the `Search` button:

- The **Part 1** of the code can be seen on your browser's console, it should bring all related TV series ordered by name.

- The **Part 2** can be seen right below the `Search` button, it should display the title of the related TV series along with its cover. However, if the TV serie **does not**  have an available cover then it **should not** display on this list.

## Development observations

**1** The example available on Bounteous' README file contains the result of the search `superman` with the following results:

- Superman & Lois
- Superman
- Superman: The Animated Series
- The Return of Superman
- Atom Man vs. Superman
- Max Fleischer's Superman
- The New Adventures of Superman
- Adventures of Superman
- Superman: Red Son
- The Superman/Aquaman Hour of Adventure

However, it seems that the API's database has changed since then because the serie `Max Fleischer's Superman` could not be found even if you search directly into the API.

**2** The API will search for anything related to the searched substring. Therefore, if you search for **super man** instead of **superman** the API might return unrelated values. This could be polished within the Redux Store Actions on a conventional project.