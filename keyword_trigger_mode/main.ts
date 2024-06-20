let value = 0
basic.showString("A")
serial.setBaudRate(BaudRate.BaudRate115200)
if (true) {
    Asr_V3.Asr_Clear_Buffer()
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Set_Mode(Asr_V3.Mode.cycle_mode)
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(0, "hao kai xin")
    Asr_V3.Wait_Asr_Busy()
    Asr_V3.Asr_Add_Words(1, "hao kai xin")
    Asr_V3.Wait_Asr_Busy()
    serial.writeNumber(Asr_V3.Asr_NUM_Cleck())
    Asr_V3.Cleck_Asr_Num(2)
}
Asr_V3.Asr_Gain(80)
Asr_V3.Asr_Set_RGB2(Asr_V3.enColor.Red)
Asr_V3.Asr_Buzzer(Asr_V3.Buzzer_State.ON)
basic.pause(1000)
Asr_V3.Asr_Set_RGB2(Asr_V3.enColor.Yellow)
Asr_V3.Asr_Buzzer(Asr_V3.Buzzer_State.OFF)
basic.forever(function () {
    serial.writeNumber(value)
    value = Asr_V3.Asr_Result()
    if (value == 0) {
        Asr_V3.Asr_Set_RGB2(Asr_V3.enColor.Blue)
        basic.showIcon(IconNames.Happy)
    }
    if (value == 1) {
        Asr_V3.Asr_Set_RGB2(Asr_V3.enColor.White)
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(500)
    basic.showNumber(value)
})
