; thumb size: 182 bytes; src size 1596 bytes
; assembly: 167 lines
; peep hole pass: 2 instructions removed and 3 updated
; peep hole pass: 2 instructions removed and 0 updated
; peep hole pass: 0 instructions removed and 0 updated


; start
    .startaddr 0x30000
    .hex 708E3B92C615A841C49866C975EE5197 ; magic number
    .hex 485D9E7C9972C549 ; hex template hash
    .hex 79EB366C458A544B ; program hash
    .short 3   ; num. globals
    .short 0 ; patched with number of words resulting from assembly
    .word 0 ; reserved
    .word 0 ; reserved
    .word 0 ; reserved
;
; Function <main>
;
    .section code
    b .themain      
    .balign 4
__main__1_Lit:
    .short 0xffff, 0x0000   ; action literal
    @stackmark litfunc
.themain:
    push {lr}
    push {r5, r6}
    bl _hlp_0
    bl __main__1
    pop {r6, r5}
    pop {pc}
    @stackempty litfunc
.section code
__main__1_bkpt:
    bkpt 1
__main__1:
    @stackmark func
    @stackmark args
    push {lr}
    @stackmark locals
__main__1_locals:
    ldr r0, [r6, #0]
    lsls r0, r0, #30
    bmi __main__1_bkpt
__main__1_bkpt_after:
__brkp_1:
    movs r0, #0
    bl Array_::mk
    push {r0}; tmpstore @1
    ldr r0, [r6, #4]
    bl pxt::decr ; *P1 (raw)
    pop {r0} ; tmpref @1
    str r0, [r6, #4]
    @stackempty locals
__brkp_3:
    movs r0, #39
lsls r0, r0, #8
adds r0, #16
    push {r0} ; proc-arg
    movs r0, #7
    push {r0} ; proc-arg
    movs r0, #8
    push {r0} ; proc-arg
.proccall0:
    bl _getUltrasonicDistance_169
    add sp, #4*3 ; pop locals3
    str r0, [r6, #8]
    @stackempty locals
.ret.1:
    @stackempty locals
    pop {pc}
    @stackempty func
    @stackempty args
;
; Function getUltrasonicDistance
;
    .section code
    .balign 4
_getUltrasonicDistance_169_Lit:
    .short 0xffff, 0x0000   ; action literal
    @stackmark litfunc
    push {lr}
    push {r5, r6}
    push {r1}
    push {r2}
    push {r3}
    bl _hlp_0
    bl _getUltrasonicDistance_169
    add sp, #4*3 ; pop locals3
    pop {r6, r5}
    pop {pc}
    @stackempty litfunc
.section code
_getUltrasonicDistance_169_bkpt:
    bkpt 1
_getUltrasonicDistance_169:
    @stackmark func
    @stackmark args
    push {lr}
    @stackmark locals
_getUltrasonicDistance_169_locals:
    ldr r0, [r6, #0]
    lsls r0, r0, #30
    bmi _getUltrasonicDistance_169_bkpt
_getUltrasonicDistance_169_bkpt_after:
__brkp_2:
    movs r0, #11
.ret.169:
    @stackempty locals
; jmp value (already in r0)
.final_0_2:
    pop {pc}
    @stackempty func
    @stackempty args
    .section code
_hlp_0:
    @stackmark args
    push {lr}
    mov r5, r0
    bl pxtrt::getGlobalsPtr
    mov r6, r0
    pop {pc}
    @stackempty args
_js_end:
_program_end:
    .balign 16
    .hex 41140E2FB82FA2BB
    .short 153
    .short 1415
    .short 0, 0   ; future use
_stored_program: .string "..."
