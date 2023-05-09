
//Below creating a new post 
const newEquinePostFormHandler = async (event) => {
    event.preventDefault();
  
    const titleInput = document.querySelector('#title-new-equine-post');
    // const title = document.querySelector('#title-new-equine-post').value.trim();
    const contentInput = document.querySelector('#content-new-equine-post');
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); // When successful, load the dashboard page
      } else {
        alert('Failed to create a new post.'); // When unsuccessful, show alert
      }
    }
  };
  
  // Event listeners
  const newEquinePostForm = document.querySelector('.new-equine-post-form');
  if (newEquinePostForm) {
    newEquinePostForm.addEventListener('submit', newEquinePostFormHandler);
  }