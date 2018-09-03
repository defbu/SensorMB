

var __main__1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.lastBrkId = 1;
    r0 = pxsim.Array_.mk(0);
    s.tmp_0 = r0;
    r0 = globals.freqTable___120;
    pxtrt.decr(r0);
    r0 = s.tmp_0;
    globals.freqTable___120 = (r0);
    s.lastBrkId = 3;
    s.tmp_0 = { fn: _getUltrasonicDistance_169, parent: s };
    r0 = 10000;
    s.tmp_0.arg0 = r0;
    r0 = 7;
    s.tmp_0.arg1 = r0;
    r0 = 8;
    s.tmp_0.arg2 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    globals.distance___170 = (r0);
  case 1:
    return leave(s, r0)
  default: oops()
} } }
__main__1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"pxt_modules/core/dal.d.ts","functionName":"<main>"}
__main__1.continuations = [  ]



var _getUltrasonicDistance_169  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.lastBrkId = 2;
    r0 = 11;
    { step = 1; continue; }
  case 1:
    // jmp value (already in r0)
    s.tmp_0 = r0;
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 2:
    return leave(s, r0)
  default: oops()
} } }
_getUltrasonicDistance_169.info = {"start":274,"length":1998,"line":11,"column":5,"endLine":55,"endColumn":5,"fileName":"ultrasonic.ts","functionName":"getUltrasonicDistance"}


setupDebugger(4)

pxsim.setupStringLiterals({})
