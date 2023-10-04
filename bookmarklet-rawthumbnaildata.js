javascript: (() => {
let imagesSrcs = [];
let imageDivs = document.querySelectorAll(".isv-r a img");

imageDivs.forEach(img => {
    imagesSrcs.push(img.getAttribute("src"));
    console.log(img.getAttribute("src"));
});

console.log(imagesSrcs);
})();
