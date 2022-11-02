
type Name = String
type Ergebnis = (Int, Int)

data KOTurnier = Team Name
               | Match KOTurnier KOTurnier Ergebnis
                 deriving (Show)


-- http://de.wikipedia.org/wiki/Fu%C3%9Fball-Europameisterschaft_2012
em2012 :: KOTurnier
em2012 =  Match
            (Match
              (Match
                (Team "Tschechien")
                (Team "Portugal")
                (0,1)
              )
              (Match
                (Team "Spanien")
                (Team "Frankreich")
                (2,0)
              )
              (2,4)
            )
            (Match
              (Match
                (Team "Deutschland")
                (Team "Griechenland")
                (4,2)
              )
              (Match
                (Team "England")
                (Team "Italien")
                (2,4)
              )
              (1,2)
            )
            (4,0)


tore :: KOTurnier -> Int
tore (Team _) = 0
tore (Match m1 m2 (t1,t2)) = tore m1 + tore m2 + t1 + t2

sieger :: KOTurnier -> String
sieger (Team name) = name
sieger (Match m1 m2 (t1,t2)) = if t1 > t2 then sieger m1 else sieger m2

toraermstesSpiel :: KOTurnier -> (String, String, Int)
toraermstesSpiel (Team _) = ("", "", 1000)
toraermstesSpiel (Match m1 m2 (t1,t2)) | t < m1t && t < m2t = (sieger m1, sieger m2, t)
                                       | m1t < t && m1t < m2t = toraermstesSpiel m1
                                       | otherwise = toraermstesSpiel m2
    where t = t1+t2
          (m1s1, m1s2, m1t) = toraermstesSpiel m1
          (m2s1, m2s2, m2t) = toraermstesSpiel m2


foldKOTurnier :: (String -> a) -> (a -> a -> (Int,Int) -> a) -> KOTurnier -> a
foldKOTurnier tf mf = m
  where m (Team name) = tf name
        m (Match m1 m2 tore) = mf (m m1) (m m2) tore


tore' = foldKOTurnier (\_ -> 0) (\l r (t1,t2) -> l + r + t1 + t2)

sieger' = foldKOTurnier id (\l r (t1,t2) -> if t1 > t2 then l else r)


