To do:

**Models**

**Element Maker**
  - It's a bit messy. Nice idea however needs more work
  - Need to evaluate each function in context to see what I can keep
    - Some of the functions are similar and could probably be turned into one
    - Ohters could probably be abstracted out
  - Would be nice to rename some of them to better reflect what they actually do

  **Clear**
  - Nice idea however I will need to plan this out with some pen and paper to better utilise it.
  - There are a couple instances it is called which are messy and are five lines instead of three( and potentially 1 ). Could this be a function in and of itself? 


__*Views*__

**General**
  - Abstract out the edit from the DetailView into its own class
  - Rename MainView to something more suitable

  **XML Requests**
  - Are these being called at the right point?
    - Part of the larger refactor and might get changed

**Back buttons**
  - Mostly fine however due to the time at which the XML requests are called this can sometimes mean that changes are not reflected on the other pages
  - Possibly have to return an object like yesterday.
  - Maybe if all the buttons were created by the page before and were somehow excluded from the clear function.
    - Their own div that could be cleared when back button is pressed?
  - Need on on the comments

**Delete**
  - I should put an undo on the DetailView like the one for the comments 
  - Need to fix the undo of the comments one :(

**Error handling**
  - Need someway of displaying warnings and messages
  - Possibly it's own view or model


__Design__

**General**
  - Meh not overly happy with how it looks.
    - Seems consistent but a bit plain
  - Need to find something a bit more stylish to copy
  - Font is possibly a bit small on every page
