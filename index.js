document.getElementById('fileContainer').addEventListener('click', function(event) {
    if (event.target !== this) {
        return; // Clicked outside of the div, do nothing
    }

    // Clicked inside the div, open the file input
    document.getElementById('bgfile').click();
});
