javascript: (() => {
let actualImageUrls = [];
let scripts = document.scripts;

for (let script of scripts) {
    let content = script.textContent;
    let matches = content.match(/https:\/\/[^"]+?\.jpg|https:\/\/[^"]+?\.png/g);
    if (matches) {
        actualImageUrls = actualImageUrls.concat(matches);
    }
actualImageUrls = [...new Set(actualImageUrls)];

console.log(actualImageUrls);
}
})();
