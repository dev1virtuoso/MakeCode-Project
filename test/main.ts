input.onButtonPressed(Button.A, function () {
    Myself.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.AB, function () {
    Weapon = game.createSprite(Myself.get(LedSpriteProperty.X), Myself.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        Weapon.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    if (Weapon.isTouching(enemy)) {
        game.addScore(1)
    }
    Weapon.delete()
})
input.onButtonPressed(Button.B, function () {
    Myself.change(LedSpriteProperty.X, 1)
})
let Enemys_weapon: game.LedSprite = null
let Weapon: game.LedSprite = null
let enemy: game.LedSprite = null
let Myself: game.LedSprite = null
Myself = game.createSprite(2, 4)
enemy = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    enemy.change(LedSpriteProperty.X, randint(-1, 1))
    basic.pause(100)
    Enemys_weapon.change(LedSpriteProperty.X, 1)
})
basic.forever(function () {
    Enemys_weapon = game.createSprite(enemy.get(LedSpriteProperty.X), enemy.get(LedSpriteProperty.X))
})
