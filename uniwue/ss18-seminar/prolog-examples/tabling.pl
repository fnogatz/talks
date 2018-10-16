:- use_module(library(tabling)).
:- table p/2.

p(A,B) :- e(A,B).
%p(A,B) :- e(A,M), p(M,B).
p(A,B) :- p(A,M), p(M,B).

e(ulm,wuerzburg).
e(wuerzburg,berlin).
