10 GR
20 X=20: Y=20
30 C=INT(RND(1)*16)
40 COLOR=C: PLOT X,Y
50 IF RND(1)>=.9 THEN C=INT(RND(1)*16)
60 X = X + INT(RND(1)*3) - 1
70 Y = Y + INT(RND(1)*3) - 1
80 IF X > 39 THEN X=0
90 IF X < 0 THEN X=39
100 IF Y > 39 THEN Y=0
110 IF Y < 0 THEN Y=39
120 GOTO 40