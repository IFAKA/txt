![TXT](/public/docs/txt.png)

# TXT

Is a note application that aims to keep it simple as possible.
Once you open the app, after a register the service worker, it will be able offline.
You can create a note and it will be stored in localStorage. If you are looking for a spefic note, you can use the searchbar and you can delete a note longpressing the item in the list and acepting.
Smooth UX, routes were built with the back button in mind.

# Contents

1. [Tech Stack](#tech-stack)
2. [Features](#features)
3. [Screenshots](#screenshots)
4. [ideas](#ideas)
5. [Feedback](#feedback)

## Technologies

**Client:** react, typescript, framer-motion, tailwindcss, react-markdown, react-syntax-highlighter, eslint, prettier

## Features

- Add new note using Markdown
- Edit a note
- Delete a note
- Filter notes by title

## Screenshots

### Add

![Add](/public/docs/add.gif)

### Edit

![Edit](/public/docs/edit.gif)

### Search

![Search](/public/docs/search.gif)

### Delete

![Delete](/public/docs/delete.gif)

### Offline

![Offline](/public/docs/offline.gif)

### Errors

![Errors](/public/docs/wrong-routes.gif)

## Ideas

- [ ] Add new filters based on your notes topics (ex: if detects `</>` then create a filter in the searchbar)
- [ ] Code formater (maybe find how to implement prismjs plugin for that)
- [ ] Improve search functionability (use description content)
- [x] PWA
- [x] Available Offline
- [ ] Add date
- [ ] Add reading time aproximation
- [ ] Add tasks (they will have checkbox in the right in order to be able to discard them easily. Once you check a popup will apear to check completition. If you accept, it will be deleted from the list)

If you found something, create an issue to discuss it.
