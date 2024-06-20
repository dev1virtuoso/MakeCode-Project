def on_button_pressed_a():
    Myself.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Weapon
    Weapon = game.create_sprite(Myself.get(LedSpriteProperty.X),
        Myself.get(LedSpriteProperty.Y))
    for index in range(4):
        Weapon.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    if Weapon.is_touching(enemy):
        game.add_score(1)
    Weapon.delete()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    Myself.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

Enemys_weapon: game.LedSprite = None
Weapon: game.LedSprite = None
enemy: game.LedSprite = None
Myself: game.LedSprite = None
Myself = game.create_sprite(2, 4)
enemy = game.create_sprite(randint(0, 4), 0)

def on_forever():
    enemy.change(LedSpriteProperty.X, randint(-1, 1))
    basic.pause(100)
basic.forever(on_forever)

def on_forever2():
    global Enemys_weapon
    Enemys_weapon = game.create_sprite(enemy.get(LedSpriteProperty.X),
        enemy.get(LedSpriteProperty.X))
basic.forever(on_forever2)
