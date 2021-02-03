let mela = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Projectile)
let mona = sprites.create(img`
    ....................................
    ....................................
    ....................................
    ...............ccffff...............
    ..............cddbbbf...............
    .......ffffffcddbbbf................
    .....ffbbbbbbbbbbbbbcfff.......ccccc
    ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
    ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
    .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
    .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
    .ffbb1111fffbbcbbbbcccccccbcffbccf..
    ..ff111111111bbbbccccccbbbcc..fbbcf.
    ....ccccccc111bdbbbfddbccc.....ffbbf
    ........ccccccfbdbbbfcc..........fff
    ...............ffffff...............
    `, SpriteKind.Player)
mona.setPosition(0, 112)
controller.moveSprite(mona, 100, 0)
mona.setStayInScreen(true)
