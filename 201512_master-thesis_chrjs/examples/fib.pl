:- use_module(library(chr)).
:- chr_constraint upto/1, fib/2.

upto(N), fib(A,AV), fib(B,BV) ==> B =:= A+1, B < N | C is B+1, CV is AV+BV, fib(C,CV).
