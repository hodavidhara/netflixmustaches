const onCreate = () => {
    if (browser.runtime.lastError) {
        console.log(`Error: ${browser.runtime.lastError}`);
    } else {
        console.log("Item created successfully");
    }
};

// create context menu item (right click menu)
browser.menus.create({
    id: "netflixmustaches",
    title: "David",
    contexts: ["all"]
}, onCreate);

// on menu item click send message to content script
browser.menus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "netflixmustaches") {

        browser.tabs.query({
            currentWindow: true,
            active: true
        }).then((tabs) => {
            tabs.forEach((tab) => {
                browser.tabs.sendMessage(tab.id, {info, tab})
                    .then(response => {
                        console.log("Message from the content script:");
                        console.log(response.response);
                    })
                    .catch((error) => {
                        console.error(`Error: ${error}`);
                    });
            })
        })
    }
});