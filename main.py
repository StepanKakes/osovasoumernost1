body=[[1,0],[2,0],[1,1],[2,1]]
obraz=[[0,0],[0,0],[0,0],[0,0]]


A1=[0,0]
B1=[0,0]
C1=[0,0]
D1=[0,0]
stred=[2,2]
display()
counter=0
def vypocet():
    global obraz, body
    counter=0
    for x in body:
        obraz[counter][0]=body[counter][0]
        obraz[counter][1]=body[counter][1]
        obraz[counter][0]=abs(obraz[counter][0]-4)
        obraz[counter][1]=abs(obraz[counter][1]-4)
        #console.log_value("counter", counter)
        counter+=1
        
    
    

def display():
    global obraz,body
    led.plot_brightness(stred[0], stred[1],100)
    vypocet()
    typ=body
    for k in range(2):
        counter=0
        for i in body:
            led.plot(typ[counter][0], typ[counter][1])
            counter+=1
        typ=obraz

def on_button_pressed_a():
    global body, counter
    counter+=1
    if counter<=2:
        body[1][0]+=1
        body[2][1]+=1
        body[3][0]+=1
        body[3][1]+=1
        basic.clear_screen()
        display()
    elif counter==3:
        body[1][0]-=2
        body[2][1]-=2
        body[3][0]-=2
        body[3][1]-=2
        basic.clear_screen()
        counter=0
        display()
input.on_button_pressed(Button.A, on_button_pressed_a)

