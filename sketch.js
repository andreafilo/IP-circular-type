// P_3_1_2_02
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
* typewriter. uses input (text) as blueprint for a visual composition.
*
* MOUSE
* click + drag        : move canvas
*
* KEYS
* a-z                 : text input (keyboard)
* ,.!?                : curves
* space               : random straight / small curve
* :+-xz               : icons
* o                   : station with the last 7 typed letters as name
* a u                 : stop
* del, backspace      : remove last letter
* arrow up            : zoom canvas +
* arrow down          : zoom canvas -
* alt                 : new random layout
* ctrl                : save png
*/
'use strict';

var textTyped = '';
var font;

var conv=2.83464/2
let cnv;


var centerX;
var centerY;
var offsetX;
var offsetY;
var zoom;

var actRandomSeed;

var palette = [
  [253, 195, 0],
  [0, 0, 0],
  [0, 158, 224],
  [99, 33, 129],
  [121, 156, 19],
  [226, 0, 26],
  [224, 134, 178]
];

var actColorIndex = 0;

function preload() {
 
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);

  centerX = width / 2;
  centerY = height / 2;
  offsetX = 0;
  offsetY = 0;
  zoom = 1;

  actRandomSeed = 6;

  cursor(HAND);
   textAlign(LEFT, BASELINE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  noFill();
  if (mouseIsPressed && mouseButton == LEFT) {
    centerX = mouseX - offsetX;
    centerY = mouseY - offsetY;
  }

  // allways produce the same sequence of random numbers
  randomSeed(actRandomSeed);

  translate(centerX, centerY);
  scale(zoom);

  push();

  actColorIndex = 0;
  stroke(palette[actColorIndex][0], palette[actColorIndex][1], palette[actColorIndex][2]);
  strokeWeight(2.5*conv);
  for (var i = 0; i < textTyped.length; i++) {
    var letter = textTyped.charAt(i);
    var letterWidth = 0;

    // ------ letter rule table ------
    switch (letter) {
    case ' ': // space
        translate(letterWidth, 0);
      
      break;

  

    case '\n':
      // start a new line at a random position near the center

      translate(0, 0);

      break;



    case 'a': 
      ellipse(0, 0, 127.5*conv);
      translate(letterWidth, 0);
      break;

    case 'b':       
      ellipse(0, 0, 122.5*conv);
      translate(letterWidth, 0);
      break;
      
    case 'c':       
      ellipse(0, 0, 117.5*conv);
      translate(letterWidth, 0);
      break;
      
    case 'd':       
      ellipse(0, 0, 112.5*conv);
      translate(letterWidth, 0);
      break;
      
    case 'e':       
      ellipse(0, 0, 107.5*conv);
      translate(letterWidth, 0);
      break;

    case 'f':       
      ellipse(0, 0, 102.5*conv);
      translate(letterWidth, 0);
      break;      

    case 'g':       
      ellipse(0, 0, 97.5*conv);
      translate(letterWidth, 0);
      break;      

    case 'h':       
      ellipse(0, 0, 92.5*conv);
      translate(letterWidth, 0);
      break;        

    case 'i':       
      ellipse(0, 0, 87.5*conv);
      translate(letterWidth, 0);
      break;

    case 'j':       
      ellipse(0, 0, 82.5*conv);
      translate(letterWidth, 0);
      break;      

    case 'k':       
      ellipse(0, 0, 77.5*conv);
      translate(letterWidth, 0);
      break;      

    case 'l':       
      ellipse(0, 0, 72.5*conv);
      translate(letterWidth, 0);
      break;
      
    case 'm':       
      ellipse(0, 0, 67.5*conv);
      translate(letterWidth, 0);
      break;
      
    case 'n':       
      ellipse(0, 0, 62.5*conv);
      translate(letterWidth, 0);
      break;
      
    case 'o':       
      ellipse(0, 0, 57.5*conv);
      translate(letterWidth, 0);
      break; 
      
    case 'p':       
      ellipse(0, 0, 52.5*conv);
      translate(letterWidth, 0);
      break;
      
    case 'q':       
      ellipse(0, 0, 47.5*conv);
      translate(letterWidth, 0);
      break;      

    case 'r':       
      ellipse(0, 0, 42.5*conv);
      translate(letterWidth, 0);
      break;      
      
    case 's':       
      ellipse(0, 0, 37.5*conv);
      translate(letterWidth, 0);
      break;      
      
    case 't':       
      ellipse(0, 0, 32.5*conv);
      translate(letterWidth, 0);
      break;
      
    case 'u':       
      ellipse(0, 0, 27.5*conv);
      translate(letterWidth, 0);
      break;      
      
    case 'v':       
      ellipse(0, 0, 22.5*conv);
      translate(letterWidth, 0);
      break;      
      
    case 'w':       
      ellipse(0, 0, 17.5*conv);
      translate(letterWidth, 0);
      break;      
      
    case 'x':       
      ellipse(0, 0, 12.5*conv);
      translate(letterWidth, 0);
      break;      
      
    case 'y':       
      ellipse(0, 0, 7.5*conv);
      translate(letterWidth, 0);
      break;      
      
    case 'z':       
      ellipse(0, 0, 2.5*conv);
      translate(letterWidth, 0);
      break;
      
    default: // all others
      rect(0, -15, letterWidth + 1, 15);
      translate(letterWidth, 0);
    }
  }

  // blink cursor after text
  fill(200, 30, 40);
  noStroke();
  if (frameCount / 20 % 2 == 0) ellipse(0, 0, 15);

  pop();
}

function mousePressed() {
  offsetX = mouseX - centerX;
  offsetY = mouseY - centerY;
}

function keyReleased() {
  if (keyCode == CONTROL) saveCanvas(cnv, 'Immagine', 'png');
  if (keyCode == ALT) actRandomSeed++;
}

function keyPressed() {
  switch (keyCode) {
  case DELETE:
  case BACKSPACE:
    textTyped = textTyped.substring(0, textTyped.length - 1);
    print(textTyped);
    break;
  case ENTER:
  case RETURN:
    textTyped += '\n';
    break;
  case UP_ARROW:
    zoom += 0.05;
    break;
  case DOWN_ARROW:
    zoom -= 0.05;
    break;
  }
}

function keyTyped() {
  if (keyCode >= 32) {
    textTyped += key;
    print(textTyped);
  }
}

