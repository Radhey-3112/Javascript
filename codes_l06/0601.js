const p = document.getElementById('message');
    // In this syntax, the message represents the id of the element that you want to select.
    // The getElementById() returns an Element object that describes the DOM element object with the specified id. 
    // It returns null if there is no element with that id exists.
    // As mentioned earlier, id is unique within a document. 
    // However, HTML is a forgiving language. 
    // If a document has more than one element with the same id, the getElementById() method returns the first one it encounters.
console.log(p);