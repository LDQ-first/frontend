var items = document.querySelectorAll('x-markdown')
/*console.log(items)*/

marked.setOptions({
    sanitize: true,
    highlight: function (code) {
        return hljs.highlightAuto(code).value
    }
})

Array.prototype.forEach.call(items, function (item) {
    var html = marked(item.textContent)
    item.innerHTML = html
})


