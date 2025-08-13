
alert('Try to position the tip of the mouse pointer on the top left corner of the square. As you move the pointer, notice that the shape next to it changes. Pay attention to these changes—they can help you align the pointer more precisely with the corner.');

let randb = parseInt((Math.random()) * 700)
let randr = parseInt((Math.random()) * 1000)
document.getElementById('h').style.bottom = randb + 'px'
document.getElementById('h').style.right = randr + 'px'



function _mm(e) {

    let x = e.clientX
    let y = e.clientY

    document.getElementById('_div').style.transform = 'translate(' + x + 'px, ' + y + "px)"
    document.getElementById('_div').style.width = x / 15 + 'px'
    document.getElementById('_div').style.height = y / 15 + 'px'

    let tem = document.getElementById('h').offsetTop
    let tem1 = document.getElementById('h').offsetLeft

    console.log(tem, tem1)

    if (tem1 == x && tem == y) {
        alert("you did it")
        location.reload();
    }

}