// const newEquinePostFormHandler = async (event) => {
//     event.preventDefault();
  
//     let title = '';
//     const titleInput = document.querySelector('#title-new-equine-post');
//     if (titleInput) {
//       title = titleInput.value.trim();
//     }
  
//     const content = document.querySelector('#content-new-equine-post').value.trim();
  
//     if (title && content) {
//       const response = await fetch('/api/posts', {
//         method: 'POST',
//         body: JSON.stringify({ title, content }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/dashboard'); // When successful, load the dashboard page
//       } else {
//         alert('Failed to create a new post.'); // When unsuccessful, show alert
//       }
//     }
//   };
  

const newEquinePostFormHandler = async (event) => {
    event.preventDefault();
  
    let title = '';
    const titleInput = document.querySelector('#title-new-equine-post-form');
    if (titleInput) {
      title = titleInput.value.trim();
    }
    const contentElement = document.querySelector('#content-new-equine-post-form');
    const content = contentElement ? contentElement.value.trim() : '';
  
  
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