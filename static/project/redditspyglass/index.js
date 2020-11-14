const getPoints = type => {
	const urlInput = document.getElementById("urlInput").value
	let url
	if (urlInput.includes("?")) url = urlInput.substring(0,urlInput.indexOf('?'))+".json"
	else url = urlInput+".json"
	$.getJSON ( url, data => {
		console.log(type)
		const postData = data[type].data.children[0].data
		if (type==0) {
			document.getElementById("score").innerHTML = "The post has <b>" + postData.ups + "</b> points.<br><br>"
			document.getElementById("aspan").innerHTML = "Subreddit: " + postData.subreddit_name_prefixed + "<br>"
			document.getElementById("bspan").innerHTML = "Title: " + postData.title + "<br>"
			document.getElementById("cspan").innerHTML = "Author: u/" + postData.author + "<br>"
		} else {
			document.getElementById("score").innerHTML = "The comment has <b>" + postData.ups + "</b> points.<br><br>"
			document.getElementById("aspan").innerHTML = "Comment: " + postData.body + "<br>"
			document.getElementById("bspan").innerHTML = "Author: u/" + postData.author + "<br>"
			document.getElementById("cspan").innerHTML = "Post: " + data[0].data.children[0].data.title + "<br>"
		}
	})
}