
class Item { // our class for to-do list items
    // marking our object properties/data as private
    #completionStatus;
    #priority;
    #dateCreated;
    #text;
    constructor(text, priority) { // constructor where we initialize our object properties/data
        this.#text = text; // the item's text/content
        this.#dateCreated = Date(); // timestamp to track when item was created
        this.#priority = priority; // the item's priority (4 = urgent and important, 3 = urgent, 2 = important, 1 = not important or urgent
        this.#completionStatus = false; // variable to track if item's complete or not (true if item is completed, false otherwise)
    }
    // below: our item methods (mostly getters and setters)
    markComplete() {
        this.#completionStatus = true; // marking item complete (i.e. its "completion status" is now true since we completed the item and want to mark it as done)
    }
    markIncomplete() {
        this.#completionStatus = false; // marking item incomplete (e.g. let's say we accidentally marked an item complete and need to switch back)
    }
    getCompletionStatus() {
        return this.#completionStatus; // returns status of task (true if complete and false if not)
    }
    getText() {
        return this.#text; // returns text of the item
    }
    setText(newItemText) {
        this.#text = newItemText; // set item text to 'newItemText' string parameter value
    }
    getPriority() {
        return this.#priority; // returns priority of the item
    }
    setPriority(priorityNum) {
        if (priorityNum < 0) // edge case: if user enters a negative priority
            console.error("ERROR: priority of a list item cannot be negative");
        else
            this.#priority = priorityNum; // otherwise, if priorityNum is 0 or up, set item priority to priorityNum
    }
    getDateCreated() {
        return this.#dateCreated; // returns date that the item was created
    }
}