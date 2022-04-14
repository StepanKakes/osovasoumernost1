let A = [1, 0]
let B = [2, 0]
let C = [1, 1]
let D = [2, 1]
let counter = 0
let A1 = [0, 0]
let B1 = [0, 0]
let C1 = [0, 0]
let D1 = [0, 0]
let stred = [2, 2]
display()
function vypocet() {
    
    let counter = 0
    for (let i of A) {
        A1[1] = Math.abs(i - 4)
        counter += 1
    }
}

function obraz() {
    
    vypocet()
    led.plot(A1[0], A1[1])
    led.plot(B1[0], B1[1])
    led.plot(C1[0], C1[1])
    led.plot(D1[0], D1[1])
}

function display() {
    obraz()
    led.plotBrightness(stred[0], stred[1], 100)
    led.plot(A[0], A[1])
    led.plot(B[0], B[1])
    led.plot(C[0], C[1])
    led.plot(D[0], D[1])
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    counter += 1
    if (counter <= 2) {
        B[0] += 1
        C[1] += 1
        D[0] += 1
        D[1] += 1
        basic.clearScreen()
        display()
    } else if (counter == 3) {
        B[0] -= 2
        C[1] -= 2
        D[0] -= 2
        D[1] -= 2
        basic.clearScreen()
        counter = 0
        display()
    }
    
    console.logValue("A", A)
    console.logValue("B", B)
    console.logValue("C", C)
    console.logValue("D", D)
})
