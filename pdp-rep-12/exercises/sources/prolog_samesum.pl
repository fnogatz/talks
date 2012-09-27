samesum(L1, L2, L, S) :- append(L1, L2, L), sum(L1, S), sum(L2, S).

sum([], 0).
sum([X|Xs], R) :- sum(Xs, R1), R is R1+X.
