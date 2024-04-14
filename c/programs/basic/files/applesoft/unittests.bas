
0 GOTO 100

1 REM LET T$ = "test desc" : LET S = 0 OR 1 : GOSUB 1
2 IF S THEN PRINT ".";
3 IF NOT S THEN INVERSE : PRINT " Test ";T$;" Failed "; : NORMAL : PRINT ""; : F = F + 1
4 TE = TE + 1 : TS = TS + (NOT NOT S) : S = 0 : RETURN

100 REM Pre-test for CLEAR
110 A = 1 : A$ = "a" : A(1) = 2 : A$(1) = "b" : CLEAR

200 REM Feature Detection
210 LR = 0 : ONERR GOTO 220
211 GR : LR = 1
220 HR = 0 : ONERR GOTO 240
221 HGR : HR = 1
230 PD = 0 : ONERR GOTO 240
231 X = PDL(0) : PD = 1
240 POKE 216,0

300 PR#3 : TEXT : HOME : PRINT "Unit Tests"

1000 PRINT : PRINT "Variable Control ";

1010 REM Ensure CLEAR in line 110 occurred
: T$ = "CLEAR"
: S = ( A = 0 ) : GOSUB 1
: S = ( A$ = "" ) : GOSUB 1
: S = ( A(1) = 0 ) : GOSUB 1
: S = ( A$(1) = "" ) : GOSUB 1

1020 T$ = "Implicit LET"
: A = 123 : S = ( A = 123 ) : GOSUB 1
: A$ = "abc" : S = ( A$ = "abc" ) : GOSUB 1
: A(1) = 234: S = ( A(1) = 234 ) : GOSUB 1
: A$(1) = "bcd" : S = ( A$(1) = "bcd" ) : GOSUB 1

1030 T$ = "Explicit LET"
: LET A = 123 : S = ( A = 123 ) : GOSUB 1
: LET A$ = "abc" : S = ( A$ = "abc" ) : GOSUB 1
: LET A(1) = 234 : S = ( A(1) = 234 ) : GOSUB 1
: LET A$(1) = "bcd" : S = ( A$(1) = "bcd" ) : GOSUB 1

1040 T$ =  "DIM"
: DIM AR(12)
: FOR I = 0 TO 12 : AR(I) = I : NEXT
: T = 0 : U = 0
: FOR I = 0 TO 12 : T = T + I : U = U + AR(I) : NEXT
: S = (T = U) : GOSUB 1

1050 T$ = "DEF FN"
: DEF FN FA(X) = X+X : S = (FN FA(3) = 6) : GOSUB 1
: DEF FN FB(X) = X*X : S = (FN FB(3) = 9) : GOSUB 1


2000 PRINT : PRINT "Flow Control ";

2010 T$ = "GOTO" : T = 1 : GOTO 2017 : T = T + 1
2015 T = T + 1 : GOTO 2019 : T = T + 1
2017 T = T + 1 : GOTO 2015
2018 T = T + 1
2019 S = (T=3) : GOSUB 1

2020 T$ = "GOSUB/RETURN" : T = 1 : GOSUB 2025 : GOTO 2029
2025 T = T + 1 : RETURN
2029 S = (T=2) : GOSUB 1

2030 T$ = "ON GOTO" : T = 1 : ON 2 GOTO 2031, 2032, 2033
2031 T = T + 1
2032 T = T + 1
2033 T = T + 1
2034 S = (T=3) : GOSUB 1
2035 T$ = "ON GOTO (EDGE CASE: 0)" : T = 1 : ONERR GOTO 2039
2036 ON 0 GOTO 2037, 2038 : T = T + 3
2037 T = T + 1
2038 T = T + 1
2039 S = (T=6) : POKE 216,0 : GOSUB 1
2040 T$ = "ON GOTO (EDGE CASE: -0.1)" : T = 1 : ONERR GOTO 2044
2041 ON -0.1 GOTO 2042, 2043 : T = T + 3
2042 T = T + 1
2043 T = T + 1
2044 S = (T=1) AND (PEEK(222)=53): POKE 216,0 : GOSUB 1


2045 T$ = "ON GOTO (EDGE CASE: 255.2)" : T = 1 : ONERR GOTO 2049
2046 ON 255.2 GOTO 2047, 2048 : T = T + 3
2047 T = T + 1
2048 T = T + 1
2049 S = (T=6) : POKE 216,0 : GOSUB 1
2050 T$ = "ON GOTO (EDGE CASE: 256)" : T = 1 : ONERR GOTO 2054
2051 ON -0.1 GOTO 2052, 2053 : T = T + 3
2052 T = T + 1
2053 T = T + 1
2054 S = (T=1) AND (PEEK(222)=53): POKE 216,0 : GOSUB 1


2060 T$ = "ON GOSUB" : T = 1 : ON 2 GOSUB 2061, 2062, 2063 : GOTO 2064
2061 T = T + 1 : RETURN
2062 T = T + 2 : RETURN
2063 T = T + 3 : RETURN
2064 S = (T=3) : GOSUB 1
2065 T$ = "ON GOSUB (EDGE CASE: 0)" : T = 1 : ONERR GOTO 2069
2066 ON 0 GOSUB 2067, 2068 : GOTO 2070
2067 T = T + 2 : RETURN
2068 T = T + 3 : RETURN
2069 T = 255
2070 S = (T=1) :  POKE 216,0 : GOSUB 1
2071 T$ = "ON GOSUB (EDGE CASE: -0.1)" : T = 1 : ONERR GOTO 2075
2072 ON -0.1 GOSUB 2073, 2074 : T = T + 5 : GOTO 2075
2073 T = T + 2 : RETURN
2074 T = T + 3 : RETURN
2075 S = (T=1) AND (PEEK(222)=53): POKE 216,0 : GOSUB 1
2076 T$ = "ON GOSUB (EDGE CASE: 255.2)" : T = 1 : ONERR GOTO 2080
2077 ON 255.2 GOSUB 2078, 2079 : GOTO 2081
2078 T = T + 2 : RETURN
2079 T = T + 3 : RETURN
2080 T = 255
2081 S = (T=1) : POKE 216,0 : GOSUB 1
2082 T$ = "ON GOSUB (EDGE CASE: 256)" : T = 1 : ONERR GOTO 2086
2083 ON 256 GOSUB 2084, 2085 : T = T + 5 : GOTO 2086
2084 T = T + 2 : RETURN
2085 T = T + 3 : RETURN
2086 S = (T=1) AND (PEEK(222)=53): POKE 216,0 : GOSUB 1

2150 T$ = "POP" : T = 1 : GOSUB 2155 : T = T + 1 : GOTO 2159
2155 T = T + 1 : GOSUB 2156 : T = T + 5
2156 POP : T = T + 1 : RETURN
2159 S = (T=4) : GOSUB 1

2160 T$ = "FOR"
: T = 0 : FOR I = 1 TO 10 : T = T + I : NEXT
: S = (T = 55) : GOSUB 1
2161 T$ = "FOR STEP"
: T = 0 : FOR I = 1 TO 10 STEP 2 : T = T + I : NEXT
: S = (T = 25) : GOSUB 1
2162 T$ = "FOR STEP"
: T = 0 : FOR I = 10 TO 1 STEP -1 : T = T + I : NEXT
: S = (T = 55) : GOSUB 1
2163 T$ = "FOR STEP"
: T = 0 : FOR I = 10 TO 1 : T = T + I : NEXT
: S = (T = 10) : GOSUB 1

2170 T$ = "NEXT"
: T = 0 : FOR I = 1 TO 10 : FOR J = 1 TO 10 : FOR K = 1 TO 10 : T = T + 1 : NEXT J, I
: S = (T=100) : GOSUB 1

2180 T$ = "IF THEN"
: T = 1 : IF 0 THEN T = 2
2181 S = (T=1) : GOSUB 1
: T = 1 : IF 1 THEN T = 2 : T = 3
2182 S = (T=3) : GOSUB 1

2190 T$ = "IF GOTO"
: T = 1 : IF 0 GOTO 2192 : T = 2
2191 T = 3
2192 S = (T=3) : GOSUB 1
: T = 1 : IF 1 GOTO 2194 : T = 2
2193 T = 3
2194 S = (T=1) : GOSUB 1

2200 T$ = "Empty String is False"
: T = 1 : IF "" THEN T = 2
2201 S = (T=1) : GOSUB 1

2210 T$ = "Non-Empty String is True"
: T = 1 : IF "abc" THEN T = 2
2211 S = (T=2) : GOSUB 1


3000 PRINT : PRINT "Error Handling ";

3010 T$ = "ONERR GOTO"
: T = 1 : ONERR GOTO 3015
3011 T = 1 / 0
3012 T = 2
3015 S = (T=1) : GOSUB 1

3020 T$ = "RESUME"
: T = 0 : ONERR GOTO 3025
3021 T = 1 / T : GOTO 3029
3025 T = 1 : RESUME
3029 S = (T=1) : GOSUB 1

3040 T$ = "RETURN FROM LOOP"
: T = 1 : ONERR GOTO 3046
3041 GOSUB 3045
: GOTO 3048
3045 FOR I = 1 TO 10 : RETURN
3046 T = 2 : REM ONERR goes here
3048 S = (T=1) : GOSUB 1

3100 T$ = "NEXT WITHOUT FOR"
: T = 1 : ONERR GOTO 3102
3101 NEXT
: T = 2
3102 S = (T=1) AND (PEEK(222)=0) : GOSUB 1

3110 T$ = "SYNTAX ERROR" : REM Compile time only, can't test!

3120 T$ = "RETURN WITHOUT GOSUB"
: T = 1 : ONERR GOTO 3122
3121 RETURN
: T = 2
3122 S = (T=1) AND (PEEK(222)=22) : GOSUB 1

3130 T$ = "OUT OF DATA"
: T = 1 : ONERR GOTO 3132
3131 FOR A = 1 TO 1000 : READ A$ : NEXT
: T = 2
3132 S = (T=1) AND (PEEK(222)=42) : GOSUB 1

3140 T$ = "ILLEGAL QUANTITY"
: T = 1 : ONERR GOTO 3142
3141 A% = 32768
: T = 2
3142 S = (T=1) AND (PEEK(222)=53) : GOSUB 1

3145 T$ = "ILLEGAL QUANTITY"
: T = 1 : ONERR GOTO 3147
3146 A = ASC("")
: T = 2
3147 S = (T=1) AND (PEEK(222)=53) : GOSUB 1

3150 T$ = "OVERFLOW" :
: T = 1 : ONERR GOTO 3152
3151 A = 256^256^256
: T = 2
3152 S = (T=1) AND (PEEK(222)=69) : GOSUB 1

3160 T$ = "OUT OF MEMORY" : REM Not consistent enough across browsers
: REM T = 1 : ONERR GOTO 3162
3161 REM A$ = "x"
: REM FOR I = 0 TO 1 STEP 0 : A$ = A$ + A$ : NEXT
: REM T = 2
3162 REM S = (T=1) AND (PEEK(222)=77) : GOSUB 1

3170 T$ = "UNDEFINED STATEMENT" :
: T = 1 : ONERR GOTO 3172
3171 GOTO 3173
: T = 2
3172 S = (T=1) AND (PEEK(222)=90) : GOSUB 1

3180 T$ = "BAD SUBSCRIPT" :
: T = 1 : ONERR GOTO 3182
3181 DIM BS(3) : BS(4) = 123
: T = 2
3182 S = (T=1) AND (PEEK(222)=107) : GOSUB 1

3190 T$ = "REDIMENSION ARRAY" :
: T = 1 : ONERR GOTO 3192
3191 DIM RA(3) : DIM RA(3)
: T = 2
3192 S = (T=1) AND (PEEK(222)=120) : GOSUB 1

3200 T$ = "DIVISION BY ZERO" :
: T = 1 : ONERR GOTO 3202
3201 A = 1 / 0
: T = 2
3202 S = (T=1) AND (PEEK(222)=133) : GOSUB 1

3210 T$ = "TYPE MISMATCH" :
: T = 1 : ONERR GOTO 3212
3211 RESTORE : FOR I = 1 TO 1000 : READ A : NEXT
: T = 2
3212 S = (T=1) AND (PEEK(222)=163) : GOSUB 1

3215 T$ = "TYPE MISMATCH" :
: T = 1 : ONERR GOTO 3217
3216 RESTORE : FOR I = 1 TO 1000 : READ A% : NEXT
: T = 2
3217 S = (T=1) AND (PEEK(222)=163) : GOSUB 1

3220 T$ = "STRING TOO LONG"
 : REM Strings are "infinite", can't test

3230 T$ = "FORMULA TOO COMPLEX"
: REM T = 1 : ONERR GOTO 3232
3231 REM DEF FN FC(x) = FN FC(x) + 1 : X = FN FC(0)
: REM T = 2
3232 REM S = (T=1) AND (PEEK(222)=191): GOSUB 1

3240 T$ = "UNDEFINED FUNCTION" :
: T = 1 : ONERR GOTO 3242
3241 X = FN UF(0)
: T = 2
3242 S = (T=1) AND (PEEK(222)=224) : GOSUB 1

3250 T$ = "RE-ENTER" : REM Can't test until input can be synthesized

3260 T$ = "BREAK" :
: T = 1 : ONERR GOTO 3262
3261 STOP
: T = 2
3262 S = (T=1) AND (PEEK(222)=255) : GOSUB 1

3270 T$ = "CALL-3288" :
: T = 1 : ONERR GOTO 3274
3271 GOSUB 3272
: T = T + 1
: GOTO 3275
3272 X = FN UF(0)
: T = 10
3274 CALL -3288
: T = T + 1
: RETURN
3275 S = (T=3) : GOSUB 1

3280 T$ = "ONERR GOTO skips rest of line"
: T = 1
: ONERR GOTO 3281
: T = 2
3281 S = (T=1) : GOSUB 1


3999 POKE 216,0 : REM Disable ONERR handler



4000 PRINT : PRINT "Input/Output ";
: PRINT "UNIT TESTS NOT FULLY IMPLEMENTED ";

4010 REM **********************************************
4010 REM Do I/O as a follow-on module and introduce
4010 REM a non-standard screen-scraping function
4010 REM **********************************************

4010 REM **********************************************
4010 REM Test TRACE/NOTRACE as part of I/O functions
4010 REM **********************************************



4100 T$ = "HTAB" :
: SX = PEEK(36) : SY = PEEK(37)
: HTAB 10 : T = PEEK(36)
: POKE 36, SX : POKE 37, SY
: S = (T = 10 - 1) : GOSUB 1

4110 T$ = "VTAB" :
: SX = PEEK(36) : SY = PEEK(37)
: VTAB 10 : T = PEEK(37)
: POKE 36, SX : POKE 37, SY
: S = (T = 10 - 1) : GOSUB 1

4120 T$ = "Comma Operator" :
: SX = PEEK(36) : SY = PEEK(37)
: VTAB 23 : HTAB 1 : PRINT 1, : T = PEEK(36)
: VTAB 23 : HTAB 1 : PRINT SPC(40);
: POKE 36, SX : POKE 37, SY
: S = (T = 16) : GOSUB 1

4130 T$ = "Semicolon Operator" :
: SX = PEEK(36) : SY = PEEK(37)
: VTAB 23 : HTAB 1 : PRINT "abc"; : T = PEEK(36)
: VTAB 23 : HTAB 1 : PRINT SPC(40);
: POKE 36, SX : POKE 37, SY
: S = (T = 3) : GOSUB 1

4140 T$ = "SPC Operator" :
: SX = PEEK(36) : SY = PEEK(37)
: VTAB 23 : HTAB 1 : PRINT "abc";SPC(10); : T = PEEK(36)
: VTAB 23 : HTAB 1 : PRINT SPC(40);
: POKE 36, SX : POKE 37, SY
: S = (T = 13) : GOSUB 1

4150 T$ = "TAB Operator" :
: SX = PEEK(36) : SY = PEEK(37)
: VTAB 23 : HTAB 1 : PRINT "abc";TAB(10); : T = PEEK(36)
: VTAB 23 : HTAB 1 : PRINT SPC(40);
: POKE 36, SX : POKE 37, SY
: S = (T = 9) : GOSUB 1




5000 PRINT : PRINT "Miscellaneous ";

5010 T$ = "REM" : T = 1 : REM T = 2 : T = 3
5011 S = (T=1) : GOSUB 1



6000 PRINT : PRINT "Inline Data ";

6001 DATA 1,2,3
6002 DATA "A","B","C"

6010 T$ = "READ"
: RESTORE
: READ T : S = (T=1) : GOSUB 1
: READ T,U : S = (T=2 AND U=3) : GOSUB 1
: READ A$ : S = (A$="A") : GOSUB 1
: READ A$,B$ : S = (A$="B" AND B$="C") : GOSUB 1

6020 T$ = "RESTORE" : RESTORE
: READ T : S = (T=1) : GOSUB 1
: READ T,U : S = (T=2 AND U=3) : GOSUB 1
: READ A$ : S = (A$="A") : GOSUB 1
: READ A$,B$ : S = (A$="B" AND B$="C") : GOSUB 1


7000 PRINT : PRINT "Lo-Res Graphics ";
7001 IF NOT LR THEN PRINT "<skipping GR tests>" : GOTO 8000

7010 REM ************************************************************
7010 REM Test GR as part of I/O (sets cursor to window bottom)
7010 REM ************************************************************

7011 POKE 49232,0 : POKE 49234,0 : POKE 49238,0

7020 T$ = "COLOR="
: T = 0 : U = 0 : FOR I = 0 TO 15 : COLOR= I : PLOT 0,0 : T = T + I : U = U + SCRN(0,0) : NEXT
: S = (T=U) : GOSUB 1

7030 T$ = "PLOT"
: COLOR= 5 : PLOT 0,0 : PLOT 39,0 : PLOT 0,47 : PLOT 39,47
: COLOR= 6 : PLOT 0,0 : PLOT 39,0 : PLOT 0,47 : PLOT 39,47
: S = (SCRN(0,0)=6 AND SCRN(39,0)=6 AND SCRN(0,47)=6 AND SCRN(39,47)=6) : GOSUB 1

7040 T$ = "HLIN"
: COLOR= 0 : FOR Y = 0 TO 5: FOR X = 0 TO 10  : PLOT X,Y : NEXT : NEXT
: FOR I = 1 TO 5 : COLOR= I : HLIN I,10-I AT I : NEXT
: T = 0 : FOR Y = 0 TO 5: FOR X = 0 TO 10 : T = T + SCRN(X,Y) : NEXT : NEXT
: S = (T=55) : GOSUB 1

7050 T$ = "VLIN"
: COLOR= 0 : FOR Y = 0 TO 10: FOR X = 0 TO 5  : PLOT X,Y : NEXT : NEXT
: FOR I = 1 TO 5 : COLOR= I : VLIN I,10-I AT I : NEXT
: T = 0 : FOR Y = 0 TO 10: FOR X = 0 TO 5 : T = T + SCRN(X,Y) : NEXT : NEXT
: S = (T=55) : GOSUB 1

: COLOR= 6 : PLOT 0,0 : PLOT 39,0 : PLOT 0,47 : PLOT 39,47
: S = (SCRN(0,0)=6 AND SCRN(39,0)=6 AND SCRN(0,47)=6 AND SCRN(39,47)=6) : GOSUB 1

7900 REM Something memorable
7910 FOR I = 0 TO 15
: COLOR= I
: HLIN I, 39-I AT I
: HLIN I, 39-I AT 39 - I
: VLIN I, 39-I AT I
: VLIN I, 39-I AT 39 - I
: NEXT

7999 TEXT
8000 PRINT : PRINT "Hi-Res Graphics ";
8001 IF NOT HR THEN PRINT "<skipping HGR test>" : GOTO 9000

8020 T$ = "HCOLOR="
: HGR
: T = 0 : U = 0 : FOR I = 0 TO 7 : HCOLOR= I : HPLOT 0,0 : T = T + I : U = U + HSCRN(0,0) : NEXT
: S = (T=U) : GOSUB 1

8030 T$ = "HPLOT"
: HGR
: HCOLOR= 5 : HPLOT 0,0 : HPLOT 39,0 : HPLOT 0,47 : HPLOT 39,47
: HCOLOR= 6 : HPLOT 0,0 : HPLOT 39,0 : HPLOT 0,47 : HPLOT 39,47
: S = (HSCRN(0,0)=6 AND HSCRN(39,0)=6 AND HSCRN(0,47)=6 AND HSCRN(39,47)=6) : GOSUB 1

8040 T$ = "HPLOT x1,y1 TO x2,y2"
: HGR
: FOR Y = 0 TO 7: HCOLOR= Y : HPLOT 0,Y TO 7,Y: NEXT
: T = 0 : U = 0 : FOR I = 0 TO 7 : T = T + HSCRN(I,I) : U = U + I : NEXT
: S = (T=U) : GOSUB 1

8050 T$ = "HPLOT TO x2,y2"
: HGR
: FOR X = 0 TO 7: HCOLOR= X : HPLOT X*2,0 : HPLOT TO X*2,7 : NEXT
: T = 0 : U = 0 : FOR I = 0 TO 7 : T = T + HSCRN(I*2,I) : U = U + I : NEXT
: S = (T=U) : GOSUB 1

8100 REM Visual Check

8110 HGR

8120 T$ = "HCOLOR="
: T = 0 : U = 0 : FOR I = 0 TO 7 : HCOLOR= I : HPLOT 0,0 : T = T + I : NEXT

8130 T$ = "HPLOT x,y"
: HCOLOR= 3 : HPLOT 0,0 : HPLOT 279,0 : HPLOT 0,191 : HPLOT 279,191

8140 T$ = "HPLOT TO x,y"
: HCOLOR= 2 : HPLOT 10,10 : HPLOT TO 269,10 : HPLOT TO 269,181 : HPLOT TO 10,181 : HPLOT TO 10,10

8150 T$ = "HPLOT x,y TO x,y"
: HCOLOR= 1 : HPLOT 20,20 TO 259,20 : HPLOT 259,20 TO 259,171 : HPLOT 259,171 TO 20,171 : HPLOT 20,171 TO 20,20

8160 T$ = "HPLOT x,y TO x,y TO x,y"
: HCOLOR= 5 : HPLOT 30,30 TO 249,30 TO 249,161 TO 30,161 TO 30,30

8200 HGR : REM Something visually memorable

8210 W = 279 : H = 159
8220 FOR I = 0 TO 1 STEP 0.05
8230 HCOLOR= 1 : HPLOT 0,H * I     TO W* (1-I),0
8231 HCOLOR= 2 : HPLOT 0,H * (1-I) TO W* (1-I),H
8232 HCOLOR= 5 : HPLOT W,H * I     TO W * I,0
8233 HCOLOR= 6 : HPLOT W,H * (1-I) TO W * I,H
8234 NEXT

8999 TEXT



9000 PRINT : PRINT "POKE Compatibility Shims ";
: PRINT "UNIT TESTS NOT YET IMPLEMENTED ";
9001 POKE 49168,0 : POKE -16368,0 : REM Clear kbd strobe
9002 POKE 49200,0 : POKE -16336,0 : REM Toggle speaker
9003 POKE 49232,0 : POKE -16304,0 : REM Graphics mode
9004 POKE 49234,0 : POKE -16302,0 : REM Full graphics mode
9005 POKE 49235,0 : POKE -16301,0 : REM Split screen mode
9006 POKE 49238,0 : POKE -16298,0 : REM Lores mode
9007 POKE 49239,0 : POKE -16297,0 : REM Hires mode
9008 POKE 49233,0 : POKE -16303,0 : REM Text mode
9009 SPEED= 0 : SPEED= 255 : REM SPEED= (no-op)

10000 PRINT : PRINT "Numeric Functions ";
10001 DEF FN E(X) = ABS(X) < 0.001 : REM Within-Epsilon

10010 T$ = "ABS()"
: S = (ABS(1) = 1) : GOSUB 1
: S = (ABS(-1) = 1) : GOSUB 1
: S = (ABS(0) = 0) : GOSUB 1

10020 T$ = "ATN()"
: S = FN E(ATN(0) - 0.000) : GOSUB 1
: S = FN E(ATN(1) - 0.785) : GOSUB 1
: S = FN E(ATN(2) - 1.107) : GOSUB 1

10030 T$ = "COS()"
: S = FN E(COS(0) - 1.000) : GOSUB 1
: S = FN E(COS(1) - 0.540) : GOSUB 1
: S = FN E(COS(2) - -0.416) : GOSUB 1

10040 T$ = "EXP()"
: S = FN E(EXP(0) - 1.000) : GOSUB 1
: S = FN E(EXP(1) - 2.718) : GOSUB 1
: S = FN E(EXP(2) - 7.389) : GOSUB 1

10050 T$ = "INT()"
: S = (INT(1) = 1) : GOSUB 1
: S = (INT(1.5) = 1) : GOSUB 1
: S = (INT(-1.5) = -2) : GOSUB 1

10060 T$ = "LOG()"
: S = FN E(LOG(1) - 0.000) : GOSUB 1
: S = FN E(LOG(2) - 0.693) : GOSUB 1
: S = FN E(LOG(3) - 1.098) : GOSUB 1

10070 T$ = "RND()"
: T = RND(1) : S = (FN E(T - RND(0))) : GOSUB 1
: T = RND(-1) : T = RND(1) : U = RND(-1) : U = RND(1) : S = (FN E(T - U)) : GOSUB 1

10080 T$ = "SGN()"
: S = (SGN(-123)=-1): GOSUB 1
: S = (SGN(   0)= 0): GOSUB 1
: S = (SGN( 123)= 1): GOSUB 1

10090 T$ = "SIN()"
: S = FN E(SIN(0) - 0.000) : GOSUB 1
: S = FN E(SIN(1) - 0.841) : GOSUB 1
: S = FN E(SIN(2) - 0.909) : GOSUB 1

10100 T$ = "SQR()"
: S = FN E(SQR(0) - 0.000) : GOSUB 1
: S = FN E(SQR(1) - 1.000) : GOSUB 1
: S = FN E(SQR(2) - 1.414) : GOSUB 1

10110 T$ = "TAN()"
: S = FN E(TAN(0) - 0.000) : GOSUB 1
: S = FN E(TAN(1) - 1.557) : GOSUB 1
: S = FN E(TAN(2) --2.185) : GOSUB 1


11000 PRINT : PRINT "String Functions ";

11010 T$ = "LEN()"
: S = (LEN("ABC") = 3) : GOSUB 1
: S = (LEN("") = 0) : GOSUB 1

11020 T$ = "LEFT$()"
: S = (LEFT$("ABC",0) = "") : GOSUB 1
: S = (LEFT$("ABC",2) = "AB") : GOSUB 1
: S = (LEFT$("ABC",4) = "ABC") : GOSUB 1

11030 T$ = "MID$()"
: S = (MID$("ABCD",2,2) = "BC") : GOSUB 1
: S = (MID$("ABCD",3)   = "CD") : GOSUB 1
: S = (MID$("ABCD",4,3) = "D") : GOSUB 1

11040 T$ = "RIGHT$()"
: S = (RIGHT$("ABC",0) = "") : GOSUB 1
: S = (RIGHT$("ABC",2) = "BC") : GOSUB 1
: S = (RIGHT$("ABC",4) = "ABC") : GOSUB 1


12000 PRINT : PRINT "Type Conversion Functions ";

12010 T$ = "ASC()"
: S = (ASC(" ") = 32) : GOSUB 1
: S = (ASC("A") = 65) : GOSUB 1
: S = (ASC("z") = 122) : GOSUB 1
: S = (ASC(CHR$(4)) = 4) : GOSUB 1

12020 T$ = "CHR$()"
: S = (CHR$(32) = " ") : GOSUB 1
: S = (CHR$(65) = "A") : GOSUB 1
: S = (CHR$(122) = "z") : GOSUB 1

12030 T$ = "STR$()"
: S = (STR$(-1) = "-1") : GOSUB 1
: S = (STR$(1.5) = "1.5") : GOSUB 1
: S = (STR$(3.1415) = "3.1415") : GOSUB 1
: S = (VAL(STR$(3.1415)) = 3.1415) : GOSUB 1

12040 T$ = "VAL()"
: S = (VAL("-1") = -1) : GOSUB 1
: S = (VAL("1.5") = 1.5) : GOSUB 1
: S = (VAL("3.1415") = 3.1415) : GOSUB 1


13000 PRINT : PRINT "System Interaction Functions ";

13010 T$ = "FRE()"
: S = (FRE(0) OR 1) : GOSUB 1

13020 IF NOT PD THEN PRINT "<skipping PDL()>"; : GOTO 13030
13021 T$ = "PDL()"
: T = PDL(0) : S = (0 <= T) AND (T < 256) : GOSUB 1

13030 T$ = "POS()"
: T = POS(0) : HTAB 1 : S = (POS(0) = 0) : HTAB T + 1 : GOSUB 1

13040 IF NOT LR THEN PRINT "<skipping SCRN()>"; : GOTO 13050
13041 T$ = "SCRN()"
: T = 0 : FOR I = 0 TO 15 : COLOR= I : PLOT I,I : T = T + I : NEXT
: U = 0 : FOR I = 0 TO 15 : U = U + SCRN(I,I) : NEXT
: S = (T=U) : GOSUB 1

13050 IF NOT HR THEN PRINT "<skipping HSCRN()>"; : GOTO 13060
13051 T$ = "HSCRN()"
: T = 0 : FOR I = 0 TO 7 : HCOLOR= I : HPLOT I,I : T = T + I : NEXT
: U = 0 : FOR I = 0 TO 7 : U = U + HSCRN(I,I) : NEXT
: S = (T=U) : GOSUB 1

13060 REM (goto target)

14000 PRINT : PRINT "User Defined Functions ";

14010 T$ = "FN A()"
: DEF FN A(X) = X + X : S = (FN A(3) = 6) : GOSUB 1
: DEF FN A(X) = X * X : S = (FN A(3) = 9) : GOSUB 1

14020 T$ = "FN A$() [language extension]"
: DEF FN A$(X$) = X$ + X$ : S = (FN A$("ABC") = "ABCABC") : GOSUB 1

15000 PRINT : PRINT "PEEK Compatibility Shims ";
: PRINT "UNIT TESTS NOT YET IMPLEMENTED ";
15001 X = PEEK(49152) : X = PEEK(-16384) : REM Read keyboard
15002 X = PEEK(49168) : X = PEEK(-16368) : REM Clear keyboard strobe
15003 X = PEEK(49200) : X = PEEK(-16336) : REM Toggle speaker (no-op)
15004 X = PEEK(49248) : X = PEEK(-16288) : REM Read paddle button 3
15005 X = PEEK(49249) : X = PEEK(-16287) : REM Read paddle button 0
15006 X = PEEK(49250) : X = PEEK(-16286) : REM Read paddle button 1
15007 X = PEEK(49251) : X = PEEK(-16285) : REM Read paddle button 2
15008 X = PEEK(78) + 256 * PEEK(79) : REM Entropy generator

15010 REM **********************************************
15010 REM Do as part of I/O follow-on module
15010 REM **********************************************


16000 PRINT : PRINT "Operators ";

16010 T$ = "="
: S = (1 = 1.0) : GOSUB 1
: S = ("ABC" = "ABC") : GOSUB 1

16020 T$ = "<"
: S = (1 < 2) : GOSUB 1
: S = ("A" < "B") : GOSUB 1

16030 T$ = ">"
: S = (2 > 1) : GOSUB 1
: S = ("B" > "A") : GOSUB 1

16040 T$ = "<="
: S = (1 <= 1) : GOSUB 1
: S = (1 <= 2) : GOSUB 1
: S = (1 < = 1) : GOSUB 1
: S = (1 < = 2) : GOSUB 1
: S = ("A" <= "A") : GOSUB 1
: S = ("A" <= "B") : GOSUB 1
: S = ("A" < = "A") : GOSUB 1
: S = ("A" < = "B") : GOSUB 1
16041 T$ = "=<"
: S = (1 =< 1) : GOSUB 1
: S = (1 =< 2) : GOSUB 1
: S = (1 = < 1) : GOSUB 1
: S = (1 = < 2) : GOSUB 1
: S = ("A" =< "A") : GOSUB 1
: S = ("A" =< "B") : GOSUB 1
: S = ("A" = < "A") : GOSUB 1
: S = ("A" = < "B") : GOSUB 1

16050 T$ = ">="
: S = (1 >= 1) : GOSUB 1
: S = (2 >= 1) : GOSUB 1
: S = (1 > = 1) : GOSUB 1
: S = (2 > = 1) : GOSUB 1
: S = ("B" >= "A") : GOSUB 1
: S = ("B" >= "B") : GOSUB 1
: S = ("B" > = "A") : GOSUB 1
: S = ("B" > = "B") : GOSUB 1
16051 T$ = "=>"
: S = (1 => 1) : GOSUB 1
: S = (2 => 1) : GOSUB 1
: S = (1 = > 1) : GOSUB 1
: S = (2 = > 1) : GOSUB 1
: S = ("B" => "A") : GOSUB 1
: S = ("B" => "B") : GOSUB 1
: S = ("B" = > "A") : GOSUB 1
: S = ("B" = > "B") : GOSUB 1

16060 T$ = "<>"
: S = (1 <> 2) : GOSUB 1
: S = (1 < > 2) : GOSUB 1
: S = ("A" <> "B") : GOSUB 1
: S = ("A" < > "B") : GOSUB 1
16061 T$ = "><"
: S = (1 >< 2) : GOSUB 1
: S = (1 > < 2) : GOSUB 1
: S = ("A" >< "B") : GOSUB 1
: S = ("A" > < "B") : GOSUB 1

16070 T$ = "AND" : S = (1 AND 1) : GOSUB 1
16080 T$ = "OR" : S = (0 OR 1) : GOSUB 1
16090 T$ = "NOT" : S = (NOT 0) : GOSUB 1

16100 T$ = "^"
: S = (0^0 = 1) : GOSUB 1
: S = (1^1 = 1) : GOSUB 1
: S = (2^2 = 4) : GOSUB 1
: S = (3^0 = 1) : GOSUB 1
: S = (FN E(1.5^-2 - 0.444)) : GOSUB 1

16110 T$ = "*"
: S = (1*0 = 0) : GOSUB 1
: S = (1*1 = 1) : GOSUB 1
: S = (-1*1 = -1) : GOSUB 1
: S = (-1*-1 = 1) : GOSUB 1
: S = (0.5*2 = 1) : GOSUB 1

16120 T$ = "/"
: S = (1/1 = 1) : GOSUB 1
: S = (-1/1 = -1) : GOSUB 1
: S = (-1/-1 = 1) : GOSUB 1
: S = (2/0.5 = 4) : GOSUB 1

16130 T$ = "+"
: S = (0+0 = 0) : GOSUB 1
: S = (0+1 = 1) : GOSUB 1
: S = (-1+1 = 0) : GOSUB 1
: S = (1.5+.5 = 2) : GOSUB 1
: S = ("A"+"B" = "AB") : GOSUB 1
: S = ("A"+"B"+"C" = "ABC") : GOSUB 1
: S = (""+"" = "") : GOSUB 1

16140 T$ = "-"
: S = (0-0 = 0) : GOSUB 1
: S = (1-0 = 1) : GOSUB 1
: S = (-1--1 = 0) : GOSUB 1
: S = (1.5-.5 = 1) : GOSUB 1

16150 T$ = "Precedence"
: S = (FN E((2 + 3 - 4 * 5 / 6 ^ 7) - 4.999)) : GOSUB 1

17000 PRINT : PRINT "DOS Commands ";

17010 PRINT CHR$(4)"OPEN TESTDATA"
: PRINT CHR$(4)"CLOSE TESTDATA"
: PRINT CHR$(4)"DELETE TESTDATA"

17020 T$ = "Sequential Access OPEN/WRITE/READ"
: PRINT CHR$(4)"OPEN TESTDATA"
: PRINT CHR$(4)"WRITE TESTDATA"
: FOR I = 1 TO 10 : PRINT I : NEXT
: PRINT CHR$(4)"CLOSE TESTDATA"
: PRINT CHR$(4)"OPEN TESTDATA"
: PRINT CHR$(4)"READ TESTDATA"
: T = 0 : FOR I = 1 TO 10 : INPUT J : T = T + J : NEXT
: PRINT CHR$(4)"CLOSE TESTDATA"
: S = (T = 55) : GOSUB 1

17030 T$ = "Sequential Access APPEND/WRITE/READ"
: PRINT CHR$(4)"APPEND TESTDATA"
: PRINT CHR$(4)"WRITE TESTDATA"
: FOR I = 1 TO 10 : PRINT -I : NEXT
: PRINT CHR$(4)"CLOSE TESTDATA"
: PRINT CHR$(4)"OPEN TESTDATA"
: PRINT CHR$(4)"READ TESTDATA"
: T = 0 : FOR I = 1 TO 20 : INPUT J : T = T + J : NEXT
: PRINT CHR$(4)"CLOSE TESTDATA"
: S = (T = 0) : GOSUB 1

17040 T$ = "Sequential Access/ONERR"
: PRINT CHR$(4)"OPEN JABBERWOCKY"
: PRINT CHR$(4)"READ JABBERWOCKY"
: ONERR GOTO 17042
17041 N = 0
: FOR N = 0 TO 10 : INPUT A$ : NEXT
17042 POKE 216,0 : PRINT CHR$(4)"CLOSE" : S = (N = 4) : GOSUB 1

17050 T$ = "RENAME"
: PRINT CHR$(4)"OPEN TESTDATA"
: PRINT CHR$(4)"WRITE TESTDATA"
: FOR I = 1 TO 10 : PRINT I : NEXT
: PRINT CHR$(4)"CLOSE TESTDATA"
: PRINT CHR$(4)"RENAME TESTDATA, DATA2"
: PRINT CHR$(4)"OPEN DATA2"
: PRINT CHR$(4)"READ DATA2"
: T = 0 : FOR I = 1 TO 10 : INPUT J : T = T + J : NEXT
: PRINT CHR$(4)"CLOSE DATA2"
: S = (T = 55) : GOSUB 1

17500 T$ = "Fixed Length OPEN/WRITE/READ"
: F$ = "FIXEDLENTEST"
: PRINT CHR$(4)"OPEN "F$",L16"
: FOR I = 1 TO 20 : PRINT CHR$(4)"WRITE "F$",R";I : PRINT I * I : NEXT
: PRINT CHR$(4)"CLOSE "F$
: PRINT CHR$(4)"OPEN "F$",L16"
: T = 0 : FOR I = 20 TO 1 STEP -2 : PRINT CHR$(4)"READ "F$",R";I : INPUT J : T = T + J : NEXT
: PRINT CHR$(4)"CLOSE "F$
: S = (T = 1540) : GOSUB 1

18000 PRINT : PRINT "Regression Tests ";

18010 T$ = "global rhs in OR"
: T = 0 : FOR I = 1 TO 4
18011 IF I = 1 OR I = 3 GOTO 18014
18012 IF I = 2 OR I = 4 GOTO 18014
18013 T = 1
18014 NEXT
: S = (T=0) : GOSUB 1

18020 T$ = "Operator Associativity"
: S = (10 / 2 * 5 = 25): GOSUB 1
: S = (2 ^ 3 ^ 4 = 4096): GOSUB 1

18030 T$ = "VAL() on bad input"
: S = (VAL("") = 0): GOSUB 1
: S = (VAL("abc") = 0): GOSUB 1

18040 T$ = "Array Dimensions"
: DIM A1(10) : X = A1(10)
: S = (1): GOSUB 1

18050 T$ = "Non-integer Array Indices"
: DIM A2(10) : A2(1) = 123
: S = (A2(1.5) = 123) : GOSUB 1

18060 T$ = "Array Lower Bounds"
: T = 1 : ONERR GOTO 18062
18061 X = A2(-1) :
: T = 2
18062 S = (T=1) AND (PEEK(222)=53) : GOSUB 1 : POKE 216,0

18070 T$ = "Array Upper Bounds"
: T = 1 : ONERR GOTO 18072
18071 X = A2(11) :
: T = 2
18072 S = (T=1) AND (PEEK(222)=107) : GOSUB 1 : POKE 216,0

18080 T$ = "Duplicate Lines"
18081 T = 1
18082 T = T + 1 : REM Should be overwritten
18082 T = T + 1
18083 S = (T = 2) : GOSUB 1

18090 T$ = "Line Ordering"
18092 T = 2
18091 T = 1
18093 S = (T = 2) : GOSUB 1

18100 T$ = "Output Hook Precedence"
: A$ = "abc" + CHR$(7) + "xyz"
: PRINT CHR$(4)"OPEN TESTDATA"
: PRINT CHR$(4)"WRITE TESTDATA"
: PRINT A$
: PRINT CHR$(4)"CLOSE TESTDATA"
: PRINT CHR$(4)"OPEN TESTDATA"
: PRINT CHR$(4)"READ TESTDATA"
: INPUT B$
: PRINT CHR$(4)"CLOSE TESTDATA"
: S = (A$ = B$) : GOSUB 1

18110 T$ = "Invalid DOS Command"
: T = 1 : ONERR GOTO 18112
18111 PRINT CHR$(4);CHR$(5)
: T = 2
18112 S = (T=1) AND (PEEK(222)=16) : GOSUB 1

20000 PRINT : PRINT : PRINT "Executed tests: "; TE
20010 PRINT "Successful tests: "; TS
20019 IF F THEN INVERSE
20020 PRINT "Failed tests: "; F; : NORMAL
