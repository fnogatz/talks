var Runtime = require("chr/runtime")

function CHR(store, history) {
  this.Store = store || new Runtime.Store()
  this.History = history || new Runtime.History()
  this.constraints = [ "a/1" ]
}

CHR.prototype.a = function a() {
  var args = Array.prototype.slice.call(arguments)
  var arity = arguments.length
  
  var callConstraint = "_a_"+arity+"_activate"
  if (!this[callConstraint]) {
    throw new Error("Constraint a/"+arity+" not defined.")
  }
  
  var constraint = new Runtime.Constraint("a", arity, args)
  this.Store.add(constraint)
  this[callConstraint](constraint)
  
  return this
}

CHR.prototype._a_1_occurence_1 = function (constraint) {
  var self = this
  
  if (constraint.args[0] !== 0) {
    return
  }
  
  var ids = [ constraint.id ]
  if (ids.every(function(id) { return self.Store.alive(id) })) {
    if (Runtime.helper.allDifferent(ids)) {
      if (self.History.notIn("__rule_1", ids)) {
        self.History.add("__rule_1", ids)
      
        self.Store.kill(ids[0])
      }
    }
  }
}

CHR.prototype._a_1_occurence_2 = function (constraint) {
  var self = this
  
  var N = constraint.args[0]
  
  var ids = [ constraint.id ]
  if (ids.every(function(id) { return self.Store.alive(id) })) {
    if (Runtime.helper.allDifferent(ids)) {
      if (self.History.notIn("__rule_2", ids)) {
        self.History.add("__rule_2", ids)
      
        self.a(N - 1)
      }
    }
  }
}

CHR.prototype._a_1_activate = function (constraint) {
  this._a_1_occurence_1(constraint)
  this._a_1_occurence_2(constraint)
}


module.exports = new CHR()
