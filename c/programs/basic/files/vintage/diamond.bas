10 LINES=17
20 FORI=1TOLINES/2+1
30 FORJ=1TO(LINES+1)/2-I+1:PRINT" ";:NEXT
40 FORJ=1TOI*2-1:PRINT"*";:NEXT
50 PRINT
60 NEXTI
70 FORI=1TOLIVES/2:REM note misspelled variable is the same
75 REM because variables are unique to only two characters
80 FORJ=1TOI+1:PRINT" ";:NEXT
90 FORJ=1TO((LINES+1)/2-I)*2-1:PRINT"*";:NEXT
100 PRINT
110 NEXTI
