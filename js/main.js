const shareBtn = document.querySelector(".share_icon");
const shareBtnArrow = document.querySelector(".share_icon svg");
const shareTo = document.querySelector(".share");
const writer = document.querySelector(".writer");
shareTo.style.display = "none";
let shareToState = "none";

shareBtn.addEventListener("click", (event) => {
    const target = event.target;
    if(shareToState === "none") {
        shareTo.style.display = "flex";
        shareBtn.style.backgroundColor = "#6d7f97";
        shareBtnArrow.style.fill = "#fff";
        shareToState = "flex";
        writer.classList.add("hide_writer");
    } else {
        shareTo.style.display = "none";
        shareBtn.style.backgroundColor = "#ecf2f8";
        shareBtnArrow.style.fill = "#6d7f97";
        writer.classList.remove("hide_writer");
        shareToState = "none";
    }
        
    document.addEventListener("click", (event) => {
        if (event.target !== target  &&
            event.target.className !== "share" &&
            event.target.className !== "share_to" &&
            event.target.className !== "not-remove" &&
            event.target.className !== "icons") {
            shareTo.style.display = "none";
            shareBtn.style.backgroundColor = "#ecf2f8";
            shareBtnArrow.style.fill = "#6d7f97";
            writer.classList.remove("hide_writer");
            shareToState = "none";

        } else {
            shareTo.style.display = "flex";
            shareBtn.style.backgroundColor = "#6d7f97";
            shareBtnArrow.style.fill = "#fff";
            shareToState = "flex";
            writer.classList.add("hide_writer");
        }
    });
});            
