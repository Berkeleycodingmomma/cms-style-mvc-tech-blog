// Get the post ID from the endpoint
const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  
  // Update the post
  const updateChessPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#title-update-equine-post").value.trim();
    const content = document
      .querySelector("#content-update-equine-post")
      .value.trim();

      if (title && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
          method: "PUT",
          body: JSON.stringify({ title, content }),
          headers: { "Content-Type": "application/json" },
        });
    
        // When successful, load the dashboard page
        if (response.ok) {
          document.location.replace("/dashboard"); 
        } else {
          alert("Failed to update a post."); // When unsuccessful, show alert
        }
      }
    };