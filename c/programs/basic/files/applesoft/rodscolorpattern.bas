0 REM Rod's Color Pattern
10  GR : ONERR GOTO 99
20  FOR W = 3 TO 50
30  FOR I = 1 TO 19
40  FOR J = 0 TO 19
50  K = I + J
60  COLOR= J * 3 / (I + 3) + I * W / 12
70  PLOT I,K: PLOT K,I: PLOT 40 - I,40 - K: PLOT 40 - K,40 - I
80  PLOT K,40 - I: PLOT 40 - I,K: PLOT I,40 - K: PLOT 40 - K,I
90  NEXT : NEXT : NEXT : GOTO 20
99  TEXT : HOME : END
