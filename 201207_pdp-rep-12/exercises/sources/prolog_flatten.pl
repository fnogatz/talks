flatten([], []).
flatten([[]|Ls], R) :- flatten(Ls, R).
flatten([[El|L1s]|Ls], [El|R]) :- flatten([L1s|Ls], R).
