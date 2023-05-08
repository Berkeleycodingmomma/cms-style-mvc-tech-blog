// Get the post ID from the endpoint
const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
];

// Update the post
const updateEquinePostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title-update-equine-post").value.trim();
    const content = document
        .querySelector("#content-update-equine-post")
        .value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: "PUT",
            body: JSON.stringify({
                title,
                content
            }),
            headers: {
                "Content-Type": "application/json"
            },
        });

        // When successful, load the dashboard page
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Failed to update a post."); // When unsuccessful, show alert
        }
    }
};

//Belowe deletes the post
const deleteEquinePostFormHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        document.location.replace("/dashboard"); // When successful, load the dashboard page
    } else {
        alert("Failed to delete a post."); // When unsuccessful, show alert
    }
};

const updateEquinePostButton = document.querySelector("#update-equine-post");

if (updateEquinePostButton) {
    updateEquinePostButton.addEventListener("click", updateEquinePostFormHandler);
}

const deleteEquinePostButton = document.querySelector("#delete-equine-post");

if (deleteEquinePostButton) {
    deleteEquinePostButton.addEventListener("click", deleteEquinePostFormHandler);
}