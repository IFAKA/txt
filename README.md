![TXT](/public/docs/txt.png)

# TXT

Is a note application that aims to keep it simple as possible. Once you create a Note, it will be stored in localStorage. If you are looking for a spefic note, you can use the searchbar. Also you can delete it longpressing the item in the list.
Smooth UX, routes were built with the back button in mind.

# Contents

1. [Tech Stack](#tech-stack)
2. [Features](#features)
3. [Screenshots](#screenshots)
4. [ideas](#ideas)
5. [Feedback](#feedback)

## Tech Stack

**Client:** react, framer-motion, tailwind, react-markdown, react-syntax-highlighter

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

- [ ] Add new filters based on your notes (ex: if detects `</>` then create a filter in the searchbar)
- [ ] Code formater (maybe find how to implement prismjs plugin for that)
- [ ] Improve search functionability
- [ ] PWA or migrate project to React Native
- [ ] Lazy loading in list (only render components that are on the viewport)
- [ ] Add date
- [ ] Add reading time aproximation
- [ ] Add task (they will have checkbox in the right in order to be able to discard them easily. Once you check a popup will apear to check completition. If you accept, it will be deleted from the list)

If you found something, create an issue to discuss it.
