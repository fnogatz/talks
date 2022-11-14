:- use_module(library(chr)).
:- chr_constraint gcd/1, get/1.

gcd(0) <=> true.
gcd(N) \ gcd(M) <=> N =< M | NN is M-N, gcd(NN).
get(X), gcd(N) <=> X = N.