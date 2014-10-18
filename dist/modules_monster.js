"use strict";
require('traceur-source-maps').install(require('traceur'));
var Character = require('./modules_character');
var Monster = function Monster(x, y, name) {
  $traceurRuntime.superCall(this, $Monster.prototype, "constructor", [x, y]);
  console.log('Ctoring Monster');
  this.name = name;
  this.health_ = 100;
};
var $Monster = Monster;
($traceurRuntime.createClass)(Monster, {
  attack: function(character) {
    $traceurRuntime.superCall(this, $Monster.prototype, "attack", [character]);
  },
  get isAlive() {
    return this.health_ > 0;
  },
  get health() {
    return this.health_;
  },
  set health(value) {
    if (value < 0)
      throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
}, {}, Character);
module.exports.Monster = Monster;
module.exports.Character = Character;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXNfbW9uc3Rlci5lczYuanMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMiIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci80IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzYiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDLFFBQVEsQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDLENBQUM7RUFBSyxDQUFBLFNBQVEsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDO0FDQXhHLEFBQUksRUFBQSxVREVKLFNBQU0sUUFBTSxDQUNFLENBQUEsQ0FBRyxDQUFBLENBQUEsQ0FBRyxDQUFBLElBQUcsQ0FBRztBRUgxQixBRklJLGdCRUpVLFVBQVUsQUFBQywyQ0ZJZixDQUFBLENBQUcsRUFBQSxFRUh1QyxDRkdyQztBQUNYLFFBQU0sSUFBSSxBQUFDLENBQUMsaUJBQWdCLENBQUMsQ0FBQTtBQUM3QixLQUFHLEtBQUssRUFBSSxLQUFHLENBQUM7QUFDaEIsS0FBRyxRQUFRLEVBQUksSUFBRSxDQUFDO0FDUGtCLEFEUXRDLENDUnNDO0FFQXhDLEFBQUksRUFBQSxtQkFBb0MsQ0FBQTtBQ0F4QyxBQUFDLGVBQWMsWUFBWSxDQUFDLEFBQUM7QUpVM0IsT0FBSyxDQUFMLFVBQU8sU0FBUSxDQUFHO0FFVnBCLEFGV0ksa0JFWFUsVUFBVSxBQUFDLHNDRldSLFNBQVEsRUVWMkIsQ0ZVekI7RUFHekI7QUFFQSxJQUFJLFFBQU0sRUFBSTtBQUFFLFNBQU8sQ0FBQSxJQUFHLFFBQVEsRUFBSSxFQUFBLENBQUM7RUFBRTtBQUN6QyxJQUFJLE9BQUssRUFBSTtBQUFFLFNBQU8sQ0FBQSxJQUFHLFFBQVEsQ0FBQztFQUFFO0FBQ3BDLElBQUksT0FBSyxDQUFFLEtBQUksQ0FBRztBQUNoQixPQUFJLEtBQUksRUFBSSxFQUFBO0FBQUcsVUFBTSxJQUFJLE1BQUksQUFBQyxDQUFDLDhCQUE2QixDQUFDLENBQUM7QUFBQSxBQUM5RCxPQUFHLFFBQVEsRUFBSSxNQUFJLENBQUM7RUFDdEI7QUFBQSxLQW5Cb0IsVUFBUSxDSUQwQjtBSnVCeEQsS0FBSyxRQUFRLFFBQVEsRUFBSSxRQUFNLENBQUE7QUFDL0IsS0FBSyxRQUFRLFVBQVUsRUFBSSxVQUFRLENBQUE7QUFBQSIsImZpbGUiOiJtb2R1bGVzX21vbnN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCd0cmFjZXVyLXNvdXJjZS1tYXBzJykuaW5zdGFsbChyZXF1aXJlKCd0cmFjZXVyJykpO2xldCBDaGFyYWN0ZXIgPSByZXF1aXJlKCcuL21vZHVsZXNfY2hhcmFjdGVyJylcblxuY2xhc3MgTW9uc3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIG5hbWUpIHtcbiAgICBzdXBlcih4LCB5KTtcbiAgICBjb25zb2xlLmxvZygnQ3RvcmluZyBNb25zdGVyJylcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaGVhbHRoXyA9IDEwMDtcbiAgfVxuXG4gIGF0dGFjayhjaGFyYWN0ZXIpIHtcbiAgICBzdXBlci5hdHRhY2soY2hhcmFjdGVyKTtcbiAgICAvLyBDYW4gYWxzbyBiZSB3cml0dGVuIGFzOlxuICAgIC8vIHN1cGVyKGNoYXJhY3Rlcik7XG4gIH1cblxuICBnZXQgaXNBbGl2ZSgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoXyA+IDA7IH1cbiAgZ2V0IGhlYWx0aCgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoXzsgfVxuICBzZXQgaGVhbHRoKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIDwgMCkgdGhyb3cgbmV3IEVycm9yKCdIZWFsdGggbXVzdCBiZSBub24tbmVnYXRpdmUuJyk7XG4gICAgdGhpcy5oZWFsdGhfID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuTW9uc3RlciA9IE1vbnN0ZXJcbm1vZHVsZS5leHBvcnRzLkNoYXJhY3RlciA9IENoYXJhY3RlciIsInZhciAkX19wbGFjZWhvbGRlcl9fMCA9ICRfX3BsYWNlaG9sZGVyX18xIiwiJHRyYWNldXJSdW50aW1lLnN1cGVyQ2FsbCgkX19wbGFjZWhvbGRlcl9fMCwgJF9fcGxhY2Vob2xkZXJfXzEsICRfX3BsYWNlaG9sZGVyX18yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMykiLCJ2YXIgJF9fcGxhY2Vob2xkZXJfXzAgPSAkX19wbGFjZWhvbGRlcl9fMSIsIigkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKCRfX3BsYWNlaG9sZGVyX18wLCAkX19wbGFjZWhvbGRlcl9fMSwgJF9fcGxhY2Vob2xkZXJfXzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMykiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=