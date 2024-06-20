value = 0
basic.show_icon(IconNames.ASLEEP)
Asr.Asr_Gain(64)
Asr.Asr_Buzzer(Asr.Buzzer_State.ON)
Asr.Asr_Set_Mode(Asr.Mode.PASSWORD_MODE)
Asr.Asr_Set_RGB2(Asr.enColor.WHITE)
serial.set_baud_rate(BaudRate.BAUD_RATE115200)
Asr.Asr_Clear_Buffer()
Asr.Asr_Add_Words(0, "Hello")

def on_forever():
    global value
    value = Asr.Asr_Result()
    serial.write_number(value)
    basic.show_string("" + str((value)))
basic.forever(on_forever)
