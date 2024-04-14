/* 
   this example from the NESpad Arduino library
   displays the buttons on the joystick as bits
   on the serial port - rahji@rahji.com
*/

#include <NESpad.h>

// put strobe/clock/data pin numbers here if necessary
// ie: NESpad nintendo = NESpad(4,5,6);
NESpad nintendo = NESpad(); // default pins: 2,3,4

byte state = 0;

void setup() {
  Serial.begin(57600);  
}

void loop() {
  
  state = nintendo.buttons();

  // shows the shifted bits from the joystick
  // buttons are high (1) when up 
  // and low (0) when pressed
  Serial.println(~state, BIN);

  delay(500);
}
