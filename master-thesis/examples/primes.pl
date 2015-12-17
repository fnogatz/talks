:- use_module(library(chr)).
:- chr_constraint prime/1, upto/1.

upto(1) <=> true.
upto(N) <=> prime(N), NN is N-1, upto(NN).

prime(N) \ prime(M) <=> M mod N =:= 0 | true.
