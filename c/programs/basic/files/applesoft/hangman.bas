100 REM ***HANGMAN**
120 REM BY MIKE GLEASON, 1986, 2011
140 REM 
160 REM ==WELCOME SCREEN==
180 TEXT : HOME :SW = PEEK (33):ES$ = "": GG = 1: SND = 1: DD = 0.040: JY = 0
188 DD = 0.0010 : SND = 0: GOTO 380: REM Hack to work in the JavaScript emulator
200 IF (GG < 1) THEN 380
220 IF (PEEK(103) <> 1) THEN 280
240 IF (PEEK(104) = 64) AND (PEEK(16384) = 0) THEN 380
260 IF (PEEK(104) = 96) AND (PEEK(24576) = 0) THEN 380
280 PRINT "THIS VERSION OF HANGMAN IS TOO BIG"
300 PRINT "TO RUN WITHOUT HELP FROM YOU.":PRINT
320 PRINT "PLEASE TYPE THE FOLLOWING:":PRINT
340 PRINT "NEW":PRINT "POKE 103, 1":PRINT "POKE 104, 64":PRINT "POKE 16384, 0":PRINT "RUN HANGMAN"
360 END
380 VTAB 12:I = SW / 2 - 6: HTAB I: PRINT "_ _ _ _ _ _ _";
400 GOSUB 13800 : REM INIT SOUND
420 D = 1: GOSUB 800: HTAB I + 8: PRINT "M";
440 D = 1: GOSUB 800: HTAB I + 4: PRINT "N";: HTAB I + 12: PRINT "N";
460 D = 1: GOSUB 800: HTAB I + 6: PRINT "G";
480 D = 1: GOSUB 800: HTAB I + 2: PRINT "A";: HTAB I + 10: PRINT "A";
500 D = 1: GOSUB 800: HTAB I + 0: PRINT "H";
520 D = 2: GOSUB 800: HTAB I + 0: FLASH : PRINT "H A N G M A N": NORMAL : PRINT 
540 D = 2: GOSUB 800
560 A$ = "(C) 1986, 2011 by Mike Gleason"
580 I = SW / 2 - ( LEN (A$) - 0) / 2
600 HTAB I: PRINT A$;
620 A$ = "Loading, please wait..."
640 I = SW / 2 - ( LEN (A$) - 3) / 2
660 VTAB 23: HTAB I: PRINT A$;: JY=1
680 GOTO 1100
700 :
720 :
800 REM ==DELAY SUBROUTINE==
820 REM Unfortunately, I don't know of a way to make this delay constant
840 REM across CPU speeds. For example, in an emulator, this code may
860 REM run too fast. You can try changing DD to modulate the speed.
880 IF ( PEEK (49152) > 127) THEN 940: REM SKIP DELAY UPON KEYBOARD INPUT
900 D = D - DD: IF D > 0 THEN 880
920 GOTO 980
940 A$ = CHR$ ( PEEK (49152) - 128)
960 IF (JY=1) THEN POKE 49168,0
980 RETURN
1000 :
1020 :
1100 REM ==INITIALIZE PROGRAM==
1120 DIM GZ%(32)
1140 GOSUB 3200: REM SETUP LIMBS
1160 GOSUB 13200: REM LOAD WORDS
1180 GOSUB 2500: REM SETUP SCREEN
1200 PRINT "Shall I be [e]asy, "
1220 PRINT " [m]edium, "
1240 PRINT " or [h]ard on you? ";
1260 POKE 49168,0: REM CLEAR KEYB BUFFER
1280 GOSUB 1800
1300 IF (A$ = "E") THEN EZ = 1: GOTO 1400
1320 IF (A$ = "M") THEN EZ = 2: GOTO 1400
1340 IF (A$ = "H") THEN EZ = 3: GOTO 1400
1360 PRINT : GOTO 1200
1400 REM ==GAME LOOP==
1420 HOME:VTAB 24
1440 CHEET = 0
1460 PRINT : GOSUB 2100
1480 PRINT "Play again? (Yes/No) ";: GOSUB 1800
1500 IF (A$ = "Y") THEN 1400
1520 ES$ = "": GOTO 1620
1600 REM ==CLEANUP AND EXIT==
1620 TEXT 
1640 IF (ES$ = "") THEN 1720
1660 GOSUB 14300: REM RING BELL
1680 PRINT : PRINT "* ERROR: ";ES$;"."
1700 END 
1720 HOME
1740 PRINT "GOOD BYE."
1760 END 
1800 REM ==GET 1 UPPERCASE CHAR==
1820 GET A$:A$ = LEFT$ (A$,1)
1840 IF (A$ = CHR$ (1)) THEN CHEET = 1: GOTO 1980
1860 IF (A$ = CHR$ (27)) OR (A$ = CHR$ (3)) THEN 1600
1880 A = ASC (A$)
1900 IF ( ASC ("A") < = A) AND (A < = ASC ("Z")) THEN 2020
1920 IF (A < ASC ("a")) OR (A > ASC ("z")) THEN 1980
1940 A$ = CHR$ (A - ( ASC ("a") - ASC ("A")))
1960 GOTO 2020
1980 GOSUB 14300: REM RING BELL
2000 GOTO 1820
2020 RETURN 
2040 :
2060 :
2100 REM ==GAME SUBROUTINE==
2120 GOSUB 3600: REM SETUP GRAPHICS
2140 GOSUB 9600: REM CHOOSE A SECRET WORD
2160 POKE 49168,0: REM CLEAR KEYB BUFFER
2180 NLIMBS = 0:GAMEOVER = 0
2200 FOR I = 0 TO 30:GZ%(I) = 0: NEXT I
2220 HOME: VTAB 21
2300 REM --GUESS LOOP--
2320 GOSUB 7400: REM DISPLAY STATUS
2340 GOSUB 7700: REM GET A GUESS
2360 GOSUB 8100: REM CHECK GUESS
2380 IF GAMEOVER = 0 THEN 2300
2400 RETURN 
2420 :
2440 :
2500 REM ==SETUP SCREEN==
2520 TEXT : HOME : CB$ = "an" : CA$ = "ANIMAL"
2540 A$ = "Welcome to HANGMAN!": GOSUB 3000: PRINT : PRINT 
2560 PRINT "You have been condemned for execution."
2580 PRINT "To escape this fate, you must guess"
2600 PRINT "the secret word (";CB$;" ";CA$;") by "
2620 PRINT "choosing letters from the alphabet."
2640 PRINT 
2660 PRINT "The secret word's letters will be shown"
2680 PRINT "as dashes at first, and then will"
2700 PRINT "change to letters as you guess them."
2720 PRINT 
2740 PRINT "With each incorrect guess, one body"
2760 PRINT "part will be added to the gallows."
2780 PRINT "Guess the secret word before all your"
2800 PRINT "limbs are hanging!"
2820 PRINT 
2840 A$ = "Press any key to begin!": GOSUB 3000
2841 POKE 49168,0: REM CLEAR KEYB BUFFER
2842 I=1: REM Initialize random number generator
2845 IF ( PEEK (49152) > 127) THEN 2860
2848 I = I + 1
2850 IF I > 127 THEN 2842
2852 GOTO 2845
2860 GET A$
2863 L=RND(-I)
2880 HTAB 1: CALL - 868: REM ERASE STATUS MESSAGE
2900 RETURN 
2920 :
2940 :
3000 REM ==PRINT CENTERED==
3020 HTAB (40 / 2 - LEN (A$) / 2)
3040 PRINT A$;
3060 RETURN 
3080 :
3100 :
3200 REM ==SETUP LIMBS==
3220 DIM LIMBS$(11)
3240 LIMBS$(1) = "HEAD"
3260 LIMBS$(2) = "LEFT EYE"
3280 LIMBS$(3) = "RIGHT EYE"
3300 LIMBS$(4) = "NOSE"
3320 LIMBS$(5) = "MOUTH"
3340 LIMBS$(6) = "TORSO"
3360 LIMBS$(7) = "LEFT ARM"
3380 LIMBS$(8) = "RIGHT ARM"
3400 LIMBS$(9) = "LEFT LEG"
3420 LIMBS$(10) = "RIGHT LEG"
3440 LIMBS$(11) = "***HANGMAN***"
3460 RETURN 
3480 :
3500 :
3600 REM ==SETUP GRAPHICS==
3620 IF (GG = 0) THEN 3680
3640 HGR : GW=280 : GH=160 : REM THIS IS ALL FOR NOW
3660 GOSUB 3800: REM DRAW GALLOWS
3680 RETURN
3700 :
3720 :
3800 REM ==DRAW GALLOWS==
3820 IF (GG = 0) THEN 3980
3840 HCOLOR=1:FOR I=GH-1 TO 152 STEP -1:HPLOT 0,I TO GW-1,I:NEXT I
3860 HCOLOR=3
3880 FOR I=152 TO 148 STEP -1:HPLOT 70,I TO 210,I:NEXT I
3900 FOR I=80 TO 88:HPLOT I,10 TO I,152:NEXT I
3920 FOR I=10 TO 18:HPLOT 88,I TO 147,I:NEXT I
3940 FOR I=0 TO 7:HPLOT 80,48+I TO 110+I,18:NEXT I
3960 FOR I=147 TO 145 STEP -1:HPLOT I,18 TO I,30:NEXT I
3980 RETURN
4000 :
4020 :
4100 REM ==DRAW LIMB==
4120 IF (GG = 0) THEN 4180
4140 ON NLIMBS GOSUB 4300, 4500, 4700, 4900, 5100, 5500, 5600, 5700, 5800, 5900
4160 GOTO 4200
4180 VTAB 21: HTAB 1: CALL -868: PRINT "Your ";LIMBS$(NLIMBS);" is now hanging!": 
4200 RETURN
4220 :
4240 :
4300 REM ==DRAW HEAD==
4320 REM Note: It'd be quicker (and use less code) to just HPLOT out the 
4340 REM circle by hand rather than calling my CIRCLE2 subroutine, but
4360 REM then the trigonometry lesson would be wasted.
4380 HCOLOR=2
4400 REM HPLOT 126,30 TO 166,30 TO 166,70 TO 126,70 TO 126,30
4420 RADIUS=20:CX=146:CY=50:FILL=0:GOSUB 6000
4440 RETURN
4460 :
4480 :
4500 REM ==DRAW LEFT EYE==
4520 HCOLOR=6:HPLOT 137,43 TO 140,43
4540 HPLOT 136,44 TO 141,44
4560 HPLOT 137,45 TO 140,45
4580 RETURN
4600 :
4620 :
4700 REM ==DRAW RIGHT EYE==
4720 HCOLOR=6:HPLOT 152,43 TO 155,43
4740 HPLOT 151,44 TO 156,44
4760 HPLOT 152,45 TO 155,45
4780 RETURN
4800 :
4820 :
4900 REM ==DRAW NOSE==
4920 HCOLOR=0: 
4940 IF (FILL=1) THEN 4980
4960 HCOLOR=3
4980 HPLOT 146,48 TO 143,52 TO 146,52
5000 RETURN
5020 :
5040 :
5100 REM ==DRAW MOUTH==
5120 HCOLOR=5: HPLOT 140,60 TO 143,56 TO 149,56 TO 152,60
5140 RETURN
5160 :
5180 :
5200 REM ==DRAW SMILEY MOUTH==
5220 IF GG=0 THEN 5440
5240 HCOLOR=0: HPLOT 140,60 TO 143,56 TO 149,56 TO 152,60
5260 HCOLOR=0
5280 HPLOT 146,70 TO 146,106:HPLOT 146,88 TO 116,58:HPLOT 146,88 TO 176,58
5300 HPLOT 146,106 TO 116,140:HPLOT 146,106 TO 176,140
5320 GOSUB 3880
5340 IF (NLIMBS < 1) THEN GOSUB 4380
5360 IF (NLIMBS < 2) THEN GOSUB 4500
5380 IF (NLIMBS < 3) THEN GOSUB 4700
5400 IF (NLIMBS < 4) THEN GOSUB 4900
5420 HCOLOR=5: HPLOT 138,60 TO 143,64 TO 149,64 TO 154,60
5440 RETURN
5460 :
5480 :
5500 REM ==DRAW TORSO==
5520 HCOLOR=2: HPLOT 146,70 TO 146,106
5540 RETURN
5560 :
5580 :
5600 REM ==DRAW LEFT ARM==
5620 HPLOT 146,88 TO 116,58
5640 RETURN
5660 :
5680 :
5700 REM ==DRAW RIGHT ARM==
5720 HPLOT 146,88 TO 176,58
5740 RETURN
5760 :
5780 :
5800 REM ==DRAW LEFT LEG==
5820 HPLOT 146,106 TO 116,140
5840 RETURN
5860 :
5880 :
5900 REM ==DRAW RIGHT LEG==
5920 HPLOT 146,106 TO 176,140
5940 RETURN
5960 :
5980 :
6000 REM *** SUBROUTINE: CIRCLE2
6020 REM * IN: RADIUS
6040 REM * IN: CX (X COORDINATE OF CENTER)
6060 REM * IN: CY (Y COORDINATE OF CENTER)
6080 REM * IN: FILL (0 OR 1)
6100 REM ***
6120 PI = ATN (1) * 4: REM = 3.14159265
6140 I0 = PI / 2:I1 = 0:DI = PI / (RADIUS * 4)
6160 I1 = I1 - 0.1: REM SLOP TO FILL IN LAST LINE
6180 I = I0
6200 IF (I < = I1) THEN 7360
6220 X0 = - 666:X1 = - 666:Y0 = - 666
6300 REM 
6320 DX = COS (I) * RADIUS:X = INT (0.5 + CX - DX)
6340 DY = SIN (I) * RADIUS:Y = INT (0.5 + CY - DY)
6400 REM PRINT "X = ";X;", Y = ";Y
6420 IF (X0 = - 666) THEN 6500
6440 IF (Y0 < > Y) THEN 6600
6460 X1 = X
6480 GOTO 7300
6500 REM FIRST POINT IN NEW LINE
6520 X0 = X:X1 = X:Y0 = Y: GOTO 7300
6600 REM END OF LINE
6620 IF X0 < = - 666 THEN 7200
6640 R0X = CX + (CX - X0)
6660 IF R0X < GW THEN 6700
6680 R0X = GW - 1
6700 R1X = CX + (CX - X1)
6720 IF R1X < GW THEN 6760
6740 R1X = GW - 1
6760 IF X0 > = 0 THEN 6800
6780 X0 = 0
6800 IF X1 > = 0 THEN 6840
6820 X1 = 0
6840 Y2 = CY + (CY - Y0)
6900 REM DRAW THE LINE(S)
6920 REM PRINT "HPLOT ";X0;",";Y0;" TO ";R0X;",";Y0
6940 REM GET A$:IF (A$ = "Q") THEN END
6960 IF (Y0 < 0) OR (Y0 > = GH) THEN 7040: REM LINE NOT ON SCREEN
6980 IF FILL = 0 THEN 7020
7000 HPLOT X1,Y0 TO R1X,Y0: GOTO 7040
7020 HPLOT X1,Y0 TO X0,Y0: HPLOT R0X,Y0 TO R1X,Y0
7040 IF (Y2 < 0) OR (Y2 > = GH) THEN 7120
7060 IF FILL = 0 THEN 7100
7080 HPLOT X1,Y2 TO R1X,Y2: GOTO 7120
7100 HPLOT X1,Y2 TO X0,Y2: HPLOT R0X,Y2 TO R1X,Y2
7120 Y0 = Y0 + 1:Y2 = Y2 - 1
7140 IF Y0 < = Y THEN 6960
7200 REM END OF DRAWING LINE
7220 I = I - DI
7240 GOTO 6200
7300 REM END OF RADIAN, PREPARE NEXT
7320 I = I - DI
7340 IF (I > I1) THEN 6300
7360 RETURN 
7400 REM ==DISPLAY STATUS==
7420 REM HOME
7440 IF CHEET = 0 THEN 7520
7460 VTAB 21: HTAB 1: CALL -868: PRINT "* Pssst... the word is ";SECRET$;"."
7480 D = 2: GOSUB 800
7500 CHEET=0
7520 I = SW / 2 - LEN (HIDDEN$) / 2
7540 IF I < 1 THEN 7580
7560 VTAB 22: HTAB I
7580 PRINT HIDDEN$
7600 RETURN 
7620 :
7640 :
7700 REM ==GET A GUESS==
7720 OGUESS$ = ""
7740 FOR I = 0 TO 25
7760 IF (GZ%(I) > 0) THEN 7820
7780 OGUESS$ = OGUESS$ + CHR$ ( ASC ("A") + I)
7800 GOTO 7840
7820 OGUESS$ = OGUESS$ + "."
7840 NEXT I
7860 VTAB 23: CALL - 868 
7880 VTAB 24: HTAB 1: PRINT "Guess? (";OGUESS$;") ";
7900 GOSUB 1800:GUESS$ = A$
7920 IF (GZ%( ASC (A$) - ASC ("A")) = 0) THEN 7980
7940 GOSUB 14300: REM RING BELL ON DUPE GUESS
7960 GOTO 7880
7980 GZ%( ASC (A$) - ASC ("A")) = 1
8000 HTAB 1: CALL - 868 
8020 L=ASC(A$) - ASC("A") + 1:FOR I=1 TO L:D=RND(1):NEXT I:REM TWEAK RANDOM
8025 RETURN 
8040 :
8060 :
8100 REM ==CHECK GUESS==
8120 OK = 0:DUP = 0:TK = 0:NHIDDEN$ = ""
8140 FOR I = 1 TO LEN (SECRET$)
8160 IF I = 1 THEN 8200
8180 NHIDDEN$ = NHIDDEN$ + " "
8200 A$ = MID$ (HIDDEN$,2 * I - 1,1)
8220 IF (A$ = "_") THEN 8260
8240 TK = TK + 1
8260 IF ( MID$ (SECRET$,I,1) < > GUESS$) THEN 8340
8280 IF (A$ = GUESS$) THEN DUP = 1
8300 A$ = GUESS$
8320 OK = OK + 1
8340 NHIDDEN$ = NHIDDEN$ + A$
8360 NEXT I
8380 IF (DUP = 1) THEN 8900
8400 IF (OK = 0) THEN 9000
8420 TK = TK + OK
8440 IF TK = LEN (SECRET$) THEN 9400
8500 REM CORRECT GUESS
8520 IF (SND > 0) THEN POKE 768,32: POKE 769,12: CALL 770
8540 RARE$ = "QZXJ":FRARE = 0
8560 FOR I = 1 TO LEN (RARE$)
8580 IF ( MID$ (RARE$,I,1) = GUESS$) THEN FRARE = 1
8600 NEXT I
8620 IF FRARE = 0 THEN 8660
8640 PRINT "Glorious!!!";: GOTO 8780
8660 I = INT ( RND (1) * 3) + 1
8680 ON I GOTO 8720,8740,8760
8700 PRINT "Whaa? This wasn't supposed to happen.";: GOTO 8780
8720 PRINT "Bah! Lucky guess.";: GOTO 8780
8740 PRINT "Nice work!";: GOTO 8780
8760 PRINT "Good job!";: GOTO 8780
8780 HIDDEN$ = NHIDDEN$
8800 D=2: GOSUB 800:HTAB 1: CALL -868:GOTO 9520
8900 REM DUPLICATE GUESS
8920 PRINT "You already guessed '";GUESS$;"'.";
8940 GOTO 9520
9000 REM WRONG GUESS
9020 I=20: GOSUB 14200: REM BZZZ
9040 PRINT "Wrong! The secret word has no '";GUESS$;"'.";
9060 NLIMBS = NLIMBS + 1
9080 GOSUB 4100: REM SHOW NEWLY ADDED LIMB ON THE GALLOWS
9100 IF (LIMBS$(NLIMBS + 1) = "***HANGMAN***") THEN 9200
9120 D=1: GOSUB 800:CALL -868:GOTO 9520
9200 REM YOU LOSE
9220 GAMEOVER = 1
9240 PRINT : HTAB 1: CALL -868: PRINT "You lose. The secret word was... "
9260 HTAB 1: CALL -868: PRINT " ";SECRET$;"."
9280 A$ = "48 ,27 ,57 ,54 ,72 ,54 ,114,255.": GOSUB 14000
9300 GOTO 9520
9400 REM YOU WIN
9420 HTAB 1: CALL -868: PRINT "You WIN! You solved the secret word, "
9440 HTAB 1: CALL -868: PRINT " ";SECRET$;"."
9460 A$ = "128,27 ,114,54 ,114,54 ,85 ,216.": GOSUB 14000
9480 GAMEOVER = 1
9500 GOSUB 5200
9520 RETURN 
9540 :
9560 :
9600 REM ==SELECT WORD==
9620 HOME:VTAB 24:PRINT "Choosing word, please wait...";
9640 NR = 0
9660 NR = NR + 1: IF (NR > 100) THEN ES$ = "COULD NOT LOAD A VALID WORD": GOTO 1620
9680 IF NW < = 0 THEN ES$ = "NO WORDS LOADED": GOTO 1620
9700 RESTORE 
9720 WI = INT ( RND (1) * NW) + 1
9740 IF WI = WO THEN 9720: REM DON'T PICK SAME WORD
9760 FOR I = 1 TO WI
9780 READ SECRET$
9800 NEXT I
9820 OK = 0:AA = ASC ("A"):AZ = ASC ("Z")
9840 FOR I = 1 TO LEN (SECRET$)
9860 C = ASC ( MID$ (SECRET$,I,1))
9880 IF (C < AA) OR (C > AZ) THEN 9920
9900 OK = OK + 1
9920 NEXT I
9940 IF ( LEN (SECRET$) < 3) OR ( LEN (SECRET$) > 20) THEN OK = 0: GOTO 10200
10000 REM IF (EZ = 1) AND ( LEN (SECRET$) > 5) THEN OK = 0: GOTO 10200
10020 A$ = SECRET$: GOSUB 12100: REM SET WD=WORD DIFFICULTY
10100 REM HTAB 1:PRINT "___ ";SECRET$;" = ";WD
10120 IF (EZ = 1) AND (WD > 0.36) THEN OK = 0
10140 IF (EZ = 2) AND ((WD < = 0.36) OR (WD > 0.66)) THEN OK = 0
10160 IF (EZ = 3) AND (WD < = 0.66) THEN OK = 0
10180 IF (OK > 0) THEN 10320
10200 REM ==WORD NOT OK, PICK ANOTHER==
10220 WI = WI + 1
10240 IF (WI > NW) THEN GOTO 9660
10260 NR = NR + 1: IF (NR > 100) THEN ES$ = "COULD NOT LOAD A VALID WORD": GOTO 1620
10280 READ SECRET$
10300 GOTO 9820
10320 WO = WI
10400 REM SECRET$="TYRANNOSAURUS REX" : REM FOR TESTING
10420 HIDDEN$ = ""
10440 FOR I = 1 TO LEN (SECRET$)
10460 IF I = 1 THEN 10500
10480 HIDDEN$ = HIDDEN$ + " "
10500 C = ASC ( MID$ (SECRET$,I,1))
10520 IF (C < AA) OR (C > AZ) THEN 10560
10540 HIDDEN$ = HIDDEN$ + "_": GOTO 10580
10560 HIDDEN$ = HIDDEN$ + MID$ (SECRET$,I,1)
10580 NEXT I
10600 HTAB 1: CALL - 868: REM ERASE STATUS MESSAGE
10620 RETURN 
10640 :
10660 :
10700 REM ==COUNT AVAILABLE WORDS==
10720 REM THE ARRAYS BELOW ARE USED TO CALCULATE LETTER FREQUENCIES, WHICH IN
10740 REM TURN ARE USED TO CATEGORIZE WORDS INTO EASY, MEDIUM, AND HARD LEVELS.
10760 REM THE FQ TABLE IS INITIALIZED TO THE FREQUENCIES CORRESPONDING TO
10780 REM OVERALL ENGLISH LANGUAGE USAGE. IF CQ<>0, THEN WE OVERWRITE THESE
10800 REM WITH THE FREQS DETERMINED FROM THE WORD LIST ITSELF, WHICH IS MORE
10820 REM MORE ACCURATE BUT TAKES A LOT OF TIME TO DO AT STARTUP.
10840 DIM FQ(27),FC(27)
10860 FQ(0) = 8.167: REM "A"
10880 FQ(1) = 1.492
10900 FQ(2) = 2.782
10920 FQ(3) = 4.253
10940 FQ(4) = 12.702
10960 FQ(5) = 2.228
10980 FQ(6) = 2.015
11000 FQ(7) = 6.094
11020 FQ(8) = 6.966
11040 FQ(9) = 0.153
11060 FQ(10) = 0.772
11080 FQ(11) = 4.025
11100 FQ(12) = 2.406
11120 FQ(13) = 6.749
11140 FQ(14) = 7.507
11160 FQ(15) = 1.929
11180 FQ(16) = 0.095
11200 FQ(17) = 5.987
11220 FQ(18) = 6.327
11240 FQ(19) = 9.056
11260 FQ(20) = 2.758
11280 FQ(21) = 0.978
11300 FQ(22) = 2.360
11320 FQ(23) = 0.150
11340 FQ(24) = 1.974
11360 FQ(25) = 0.074: REM "Z"
11380 CQ = 0
11400 FOR I = 0 TO 26:FC(I) = 0: NEXT I
11420 RESTORE :NW = 0:NB = 0
11440 READ SECRET$
11460 IF SECRET$ = "*NO MORE WORDS*" THEN 11700
11480 IF (CQ = 0) THEN 11620
11500 L = LEN (SECRET$):AA = ASC ("A"):AZ = ASC ("Z")
11520 FOR I = 1 TO L
11540 C = ASC ( MID$ (SECRET$,I,1))
11560 IF (C < AA) OR (C > AZ) THEN 11600
11580 C = C - AA:FC(C) = FC(C) + 1
11600 NEXT I
11620 NW = NW + 1
11640 IF NW > 10000 THEN ES$ = "INVALID WORD DATA": GOTO 1620
11660 IF ( LEN (SECRET$) < 3) OR ( LEN (SECRET$) > 20) THEN NB = NB + 1
11680 GOTO 11440
11700 IF (NW < 1) OR (NB > = NW) THEN ES$ = "INVALID WORD DATA": GOTO 1620
11800 REM COMPUTE ALPHABET FREQUENCIES
11820 FOR I = 0 TO 25:FC(26) = FC(26) + FC(I): NEXT I
11840 IF CQ = 0 THEN 11900
11860 FOR I = 0 TO 25:FQ(I) = FC(I) * 100 / FC(26): NEXT I
11900 REM GOSUB 12600
11920 REM GOSUB 12800
11940 REM A$="YAK": GOSUB 12100
11960 RETURN 
11980 :
12000 :
12100 REM ==CALCULATE WORD DIFFICULTY==
12120 IF (FQ(0) < = 0) THEN 12440
12140 WD = 0:AA = ASC ("A"):AZ = ASC ("Z")
12160 L = LEN (A$)
12180 FOR I = 1 TO L
12200 C = ASC ( MID$ (A$,I,1))
12220 IF (C < AA) OR (C > AZ) THEN 12280
12240 QC = FQ(C - AA)
12260 WD = WD + 1 / (QC * QC)
12280 NEXT I
12300 IF (WD < = 0) OR (L < = 0) THEN 12440
12400 REM WD = WD / L
12420 GOTO 12500
12440 WD = 0
12500 REM HTAB 1:PRINT:PRINT "DIFFICULTY FOR ";A$;" = ";WD;".":PRINT
12520 RETURN
12540 :
12560 :
12600 REM ==PRINT FREQUENCIES==
12620 HTAB 1: PRINT : PRINT 
12640 AA = ASC ("A")
12660 FOR I = 1 TO 13
12680 PRINT CHR$ (AA + I - 1);": ";FQ(I - 1);" "; CHR$ (AA + I - 1 + 13);": ";FQ(I - 1 + 13)
12700 NEXT I
12720 PRINT : INPUT "PRESS RETURN TO CONTINUE...";A$
12740 RETURN 
12760 :
12780 :
12800 REM ==CALCULATE AVERAGE WORD DIFFICULTY==
12820 RESTORE 
12840 NW = 0:TD = 0:D0 = 999999:D9 = - 1:W0$ = "":W9$ = ""
12860 READ SECRET$
12880 IF SECRET$ = "*NO MORE WORDS*" THEN 13000
12900 A$ = SECRET$: GOSUB 12100
12920 NW = NW + 1:TD = TD + WD
12940 IF WD < D0 THEN D0 = WD:W0$ = A$
12960 IF WD > D9 THEN D9 = WD:W9$ = A$
12980 GOTO 12860
13000 IF NW < = 0 THEN 13140
13020 TD = TD / NW
13040 HTAB 1: PRINT : PRINT 
13060 PRINT "AVG DIFFICULTY = ";TD
13080 PRINT "EASIEST WORD = ";D0;", ";W0$
13100 PRINT "HARDEST WORD = ";D9;", ";W9$
13120 PRINT : INPUT "PRESS RETURN TO CONTINUE...";A$
13140 RETURN 
13160 :
13180 :
13200 REM ==================
13220 REM DATA SECTION:
13240 REM SECRET WORDS ARE
13260 REM LISTED BELOW.
13280 REM ==================
13300 NW = 0: REM NUMBER OF WORDS LOADED
13320 SECRET$ = ""
13340 WI = - 1: REM SECRET WORD #
13360 WO = - 1: REM PREVIOUS SECRET WORD #
13380 DATA ALLIGATOR,ANT,APE,BAT,BEAR,BEE,BIRD,BOBCAT,CAT,CENTIPEDE,CHEETAH,CHICKEN,CHIMPANZEE,CLAM,COBRA
13400 DATA CONDOR,COUGAR,COW,CROCODILE,DEER,DINGO,DOG,DONKEY,DUCK,EAGLE,ELECTRIC EEL,ELEPHANT,ELK,EMU,FISH,FOX,FROG,GAZELLE
13420 DATA GIRAFFE,GOAT,GOOSE,GORILLA,GRIZZLY BEAR,HAWK,HEDGEHOG,HIPPOPOTAMUS,HORSE,HYENA,IGUANA,JAGUAR
13440 DATA JELLYFISH,KANGAROO,KRILL,LEMUR,LEOPARD,LION,LIZARD,LLAMA,LOBSTER,LYNX,MOLE,MONKEY,MOOSE,NEWT
13460 DATA OCTOPUS,OKAPI,OPOSSUM,ORANGUTAN,OTTER,OWL,PANDA,PENGUIN,PIG,POLAR BEAR,PORCUPINE,PUMA,QUAIL
13480 DATA RABBIT,RACCOON,REINDEER,RHINOCEROS,SCORPION,SEA LION,SEAL,SHARK,SHRIMP,SNAIL,SNAKE,SPIDER,SQUID
13500 DATA SQUIRREL,TIGER,TOAD,TORTOISE,TUNA,TURKEY,TURTLE,TYRANNOSAURUS REX,VOLE,VULTURE,WALRUS,WARTHOG,WASP,WHALE,WILDCAT,WILDEBEEST
13520 DATA WOLF,WORM,YAK,ZEBRA
13540 DATA "*NO MORE WORDS*"
13600 REM THIS VERSION OF THE PROGRAM
13620 REM HAS DATA BUILT-IN, RATHER
13640 REM THAN USING A DATAFILE.
13660 GOSUB 10700
13680 RETURN
13700 :
13720 :
13800 REM ==INSTALL TONE GENERATOR==
13820 IF (SND = 0) THEN 13880
13840 POKE 770, 173: POKE 771, 48: POKE 772, 192: POKE 773, 136: POKE 774, 208: POKE 775, 5: POKE 776, 206: POKE 777, 1: POKE 778, 3: POKE 779, 240
13860 POKE 780, 9: POKE 781, 202: POKE 782, 208: POKE 783, 245: POKE 784, 174: POKE 785, 0: POKE 786, 3: POKE 787, 76: POKE 788, 2: POKE 789, 3: POKE 790, 96
13880 RETURN
13900 :
13920 :
14000 REM ==PLAY TUNE==
14020 REM A$ = "128,27 ,114,54 ,114,54 ,85 ,216."
14040 IF (SND = 0) THEN 14140
14060 L=LEN(A$)
14080 I=1
14100 IF (I+7 > L) THEN 14140
14120 POKE 768,VAL(MID$(A$,I,3)): POKE 769,VAL(MID$(A$,I+4,3)): CALL 770: I = I + 8: GOTO 14100
14140 RETURN
14160 :
14180 :
14200 REM ==BUZZ SPEAKER==
14220 L=PEEK(-16336):I=I-1:IF (I > 0) THEN 14220
14240 RETURN
14260 :
14280 :
14300 REM ==RING BELL==
14320 IF (SND = 0) THEN 14360
14340 CALL -198: REM COULD ALSO JUST PRINT CHR$(7)
14360 RETURN
