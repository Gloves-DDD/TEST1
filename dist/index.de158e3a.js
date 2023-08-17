// functionality for showing/hiding the comments section
const $4fa36e821943b400$var$showHideBtn = document.querySelector(".show-hide");
const $4fa36e821943b400$var$commentWrapper = document.querySelector(".comment-wrapper");
$4fa36e821943b400$var$commentWrapper.style.display = "none";
$4fa36e821943b400$var$showHideBtn.onclick = function() {
    let showHideText = $4fa36e821943b400$var$showHideBtn.textContent;
    if (showHideText === "Show comments") {
        $4fa36e821943b400$var$showHideBtn.textContent = "Hide comments";
        $4fa36e821943b400$var$commentWrapper.style.display = "block";
    } else {
        $4fa36e821943b400$var$showHideBtn.textContent = "Show comments";
        $4fa36e821943b400$var$commentWrapper.style.display = "none";
    }
};
// functionality for adding a new comment via the comments form
const $4fa36e821943b400$var$form = document.querySelector(".comment-form");
const $4fa36e821943b400$var$nameField = document.querySelector("#name");
const $4fa36e821943b400$var$commentField = document.querySelector("#comment");
const $4fa36e821943b400$var$list = document.querySelector(".comment-container");
$4fa36e821943b400$var$form.onsubmit = function(e) {
    e.preventDefault();
    $4fa36e821943b400$var$submitComment();
};
function $4fa36e821943b400$var$submitComment() {
    const listItem = document.createElement("li");
    const namePara = document.createElement("p");
    const commentPara = document.createElement("p");
    const nameValue = $4fa36e821943b400$var$nameField.value;
    const commentValue = $4fa36e821943b400$var$commentField.value;
    namePara.textContent = nameValue;
    commentPara.textContent = commentValue;
    $4fa36e821943b400$var$list.appendChild(listItem);
    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);
    $4fa36e821943b400$var$nameField.value = "";
    $4fa36e821943b400$var$commentField.value = "";
}


//# sourceMappingURL=index.de158e3a.js.map
