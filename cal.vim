syn match calDate '\d\d\d\d-\d\d-\d\d'
hi def link calDate Statement

syn match calTime '\d\dh'
syn match calTime '\d\d:\d\d'
hi def link calTime Special

syn match calClass '\s\.[a-z][\.a-zA-Z]*'
hi def link calClass Type

syn match calSelector '\s=\.[a-z][\.a-zA-Z]*'
hi def link calSelector Todo

syn match calComment '#.*$'
hi def link calComment Comment

syn keyword calWeekdays mondays tuesdays wednesdays thursdays fridays saturdays sundays
syn keyword calNo no
hi def link calWeekdays Function
hi def link calNo Function
