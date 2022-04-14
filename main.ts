let body = [[1, 0], [2, 0], [1, 1], [2, 1]]
let obraz = [[0, 0], [0, 0], [0, 0], [0, 0]]
let A1 = [0, 0]
let B1 = [0, 0]
let C1 = [0, 0]
let D1 = [0, 0]
let stred = [2, 2]
display()
let counter = 0
function vypocet() {
    
    let counter = 0
    for (let x of body) {
        obraz[counter][0] = body[counter][0]
        obraz[counter][1] = body[counter][1]
        obraz[counter][0] = Math.abs(obraz[counter][0] - 4)
        obraz[counter][1] = Math.abs(obraz[counter][1] - 4)
        // console.log_value("counter", counter)
        counter += 1
    }
}

function display() {
    let counter: number;
    
    led.plotBrightness(stred[0], stred[1], 100)
    vypocet()
    let typ = body
    for (let k = 0; k < 2; k++) {
        counter = 0
        for (let i of body) {
            led.plot(typ[counter][0], typ[counter][1])
            counter += 1
        }
        typ = obraz
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    counter += 1
    if (counter <= 2) {
        body[1][0] += 1
        body[2][1] += 1
        body[3][0] += 1
        body[3][1] += 1
        basic.clearScreen()
        display()
    } else if (counter == 3) {
        body[1][0] -= 2
        body[2][1] -= 2
        body[3][0] -= 2
        body[3][1] -= 2
        basic.clearScreen()
        counter = 0
        display()
    }
    
})
