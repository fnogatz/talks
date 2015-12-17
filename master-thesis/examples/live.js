typeof CHR

var chr = new CHR()

chr('r1 @ a(0) <=> true')

chr`
  r2 @ a(N) ==> ${ (N) => console.log('Rule r2 fired with N='+N) }, a(N-1)
`

console.log(chr.Store.toString())

chr.a(2).then(function () {
  console.log('Execution finished')
})

console.log(chr.Store.toString())

chr.Rules.r1['a/1'][0].toString()

chr.Rules.Order


