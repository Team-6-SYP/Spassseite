const url = "simple-upload.php";
const form = document.querySelector("#uploadform");

// Ein EventListener wartet auf das submit
form.addEventListener ("submit", function (evt) {
	evt.preventDefault ();
	const files = document.querySelector('[type=file]').files;
    const formData = new FormData();
    
	for (let i = 0; i < files.length; i++) {
		let file = files[i];
		formData.append('files[]', file)
	}
	
	fetch (url, {
		method: "POST",
		body: formData,
	}).then ((response) => {
		console.log (response);
		if (response.status === 200) {
			document.querySelector("#result").innerHTML = "Dateien wurden geladen";
		}
	});
});