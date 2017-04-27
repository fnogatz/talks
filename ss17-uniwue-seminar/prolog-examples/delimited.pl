main :-
   writeln(a),
   reset(p,X,Cont),
   writeln(X),
   writeln(c),
   call(Cont).
p :-
   writeln(b),
   shift(hello),
   writeln(d).
