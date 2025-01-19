// Add event listener for the comment form
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values
    const name = document.getElementById('comment-name').value;
    const text = document.getElementById('comment-text').value;

    // Create new comment element
    const commentElement = document.createElement('li');
    commentElement.classList.add('border-bottom', 'pb-3', 'mb-3');
    
    const commentContent = `
        <strong>${name}</strong> <small class="text-muted">just now</small>
        <p>${text}</p>
    `;
    commentElement.innerHTML = commentContent;

    // Add the new comment to the comment list
    document.getElementById('comments-list').appendChild(commentElement);

    // Clear form fields after submission
    document.getElementById('comment-name').value = '';
    document.getElementById('comment-text').value = '';
});
