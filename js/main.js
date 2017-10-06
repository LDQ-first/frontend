var items = document.querySelectorAll('x-markdown')
console.log(items)

Array.prototype.forEach.call(items, function (item) {
    var html = marked(item.textContent)
    item.innerHTML = html
})


