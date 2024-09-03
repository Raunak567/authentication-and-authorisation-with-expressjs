document.getElementById("delete-user-form").addEventListener("submit", async (event) => {
	event.preventDefault();
	const username = document.getElementById("other-username").value;
	console.log(username)
	const response = await fetch(`http://localhost:4001/auth/delete/user`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			username
		}),
		credentials: "include"
	});
		
});