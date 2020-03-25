const IMAGE_WIDTH = 933;
const IMAGE_HEIGHT = 622;

// get message from background script
browser.runtime.onMessage.addListener(paintMustache);

function paintMustache(message: object) {
    console.log(message)
}

document.body.addEventListener('click', (event: MouseEvent) => {
    console.log(event);
    const {pageX, pageY, ctrlKey} = event;
    const left = pageX - (IMAGE_WIDTH / 2);
    const top = pageY - (IMAGE_HEIGHT / 2);
    if (ctrlKey) {
        const mustacheImage = document.createElement('img');
        mustacheImage.src = browser.runtime.getURL("assets/mustache.png");
        mustacheImage.style.position = "absolute";
        mustacheImage.style.left = `${left}px`;
        mustacheImage.style.top = `${top}px`;
        mustacheImage.style.zIndex = "99";
        document.body.appendChild(mustacheImage);
    }
});