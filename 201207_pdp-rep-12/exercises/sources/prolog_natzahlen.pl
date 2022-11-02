sorted([]).
sorted([_]).
sorted([A,B|Ls]) :- A =< B, sorted([B|Ls]).


permut([X|Xs], Ys) :- count(X, [X|Xs], Xcount), count(X, Ys, Ycount), Xcount =:= Ycount.
count(_, [], 0).
count(X, [X|Xs], R) :- count(X, Xs, R1), R is R1+1.
count(X, [Y|Ys], R) :- X \= Y, count(X, Ys, R).

sortList(X, Y) :- permut(X, Y), sorted(Y).
