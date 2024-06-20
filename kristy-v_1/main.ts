let value = 0
basic.showIcon(IconNames.Asleep)
Asr.Asr_Gain(64)
Asr.Asr_Buzzer(Asr.Buzzer_State.ON)
Asr.Asr_Set_Mode(Asr.Mode.password_mode)
Asr.Asr_Set_RGB2(Asr.enColor.White)
serial.setBaudRate(BaudRate.BaudRate115200)
Asr.Asr_Clear_Buffer()
Asr.Asr_Add_Words(0, "Hello")
if (value == 0) {
    basic.showIcon(IconNames.Happy)
} else if (value == 1) {
    basic.showIcon(IconNames.Confused)
} else if (value == 2) {
    basic.showIcon(IconNames.Heart)
} else if (value == 4) {
    basic.showIcon(IconNames.Duck)
}
basic.pause(1000)
basic.forever(function () {
    value = Asr.Asr_Result()
    serial.writeNumber(value)
    basic.showString("" + value)
})
