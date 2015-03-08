/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Text blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.sgljs');

goog.require('Blockly.Blocks');


//DEFAULT

//display
Blockly.Blocks['sgljs_display'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("display");
    this.setOutput(true);
    this.setTooltip('');
  }
};

//SCREEN

//setdisplay( width, height)
Blockly.Blocks['sgljs_setdisplay'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("setdisplay")
        .appendField(new Blockly.FieldTextInput("width"), "width")
        .appendField(new Blockly.FieldTextInput("heigth"), "height");
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//setfps(fps)
Blockly.Blocks['sgljs_setfps'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("setfps");
    this.appendValueInput("fps")
        .setCheck("Number")
        .appendField("");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//  update()

//createsurface(width,height)
Blockly.Blocks['sgljs_createsurface'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("createsurface");
    this.appendValueInput("width")
        .appendField("width");
    this.appendValueInput("height")
        .appendField("height");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

//function loadsurface(filepath)
Blockly.Blocks['sgljs_loadsurface'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("loadsurface");
    this.appendValueInput("filename")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

//blt( target,  xdest,  ydest, wdest, hdest, surface, xsource, ysource, wsource, hsource)
Blockly.Blocks['sgljs_blt'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("blt");
    this.appendValueInput("TARGET")
        .appendField("target");
    this.appendValueInput("xdest")
        .appendField("xd");
    this.appendValueInput("ydest")
        .appendField("yd");
    this.appendValueInput("wdest")
        .appendField("wd");
    this.appendValueInput("hdest")
        .appendField("hd");
    this.appendValueInput("surface")
        .appendField("surface");
    this.appendValueInput("xsource")
        .appendField("xs");
    this.appendValueInput("ysource")
        .appendField("ys");
    this.appendValueInput("wsource")
        .appendField("ws");
    this.appendValueInput("hsource")
        .appendField("hs");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//paste( target, x, y, surface,angle,zoom,alpha)
Blockly.Blocks['sgljs_paste'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("paste");
    this.appendValueInput("TARGET")
        .appendField("target");
    this.appendValueInput("X")
        .appendField("x");
    this.appendValueInput("Y")
        .appendField("y");
    this.appendValueInput("surface")
        .appendField("surface");
    this.appendValueInput("angle")
        .appendField("angle");
    this.appendValueInput("zoom")
        .appendField("zoom");
    this.appendValueInput("alpha")
        .appendField("alpha");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//hit(surfacea, xa, ya, surfaceb, xb, yb, xa2, ya2, xb2, yb2) 
Blockly.Blocks['sgljs_hit'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("hit");
    this.appendValueInput("surfaceA")
        .appendField("surfaceA");
    this.appendValueInput("xA")
        .appendField("xA");
    this.appendValueInput("yA")
        .appendField("yA");
    this.appendValueInput("surfaceB")
        .appendField("surfaceB");
    this.appendValueInput("xB")
        .appendField("xB");
    this.appendValueInput("yB")
        .appendField("yB");
    this.appendValueInput("xA2")
        .appendField("xA2");
    this.appendValueInput("yA2")
        .appendField("yA2");
    this.appendValueInput("xB2")
        .appendField("xB2");
    this.appendValueInput("yB2")
        .appendField("yB2");
    this.setInputsInline(true);
	this.setOutput(true);    
    this.setTooltip('');
  }
};

//hitpp(surfacea, xa, ya, surfaceb, xb, yb, xa2, ya2, xb2, yb2)
Blockly.Blocks['sgljs_hitpp'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("hitpp");
    this.appendValueInput("surfaceA")
        .appendField("surfaceA");
    this.appendValueInput("xA")
        .appendField("xA");
    this.appendValueInput("yA")
        .appendField("yA");
    this.appendValueInput("surfaceB")
        .appendField("surfaceB");
    this.appendValueInput("xB")
        .appendField("xB");
    this.appendValueInput("yB")
        .appendField("yB");
    this.appendValueInput("xA2")
        .appendField("xA2");
    this.appendValueInput("yA2")
        .appendField("yA2");
    this.appendValueInput("xB2")
        .appendField("xB2");
    this.appendValueInput("yB2")
        .appendField("yB2");
    this.setInputsInline(true);
	this.setOutput(true);    
    this.setTooltip('');
  }
};

//GRAPHICS
//cls
Blockly.Blocks['sgljs_cls'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("cls");
	this.appendValueInput("target")
        .appendField("target");        
    this.appendValueInput("color")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//putpixel( target, x, y, col)
Blockly.Blocks['sgljs_putpixel'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("putpixel");
    this.appendValueInput("target")
        .appendField("target");
    this.appendValueInput("x")
        .appendField("x");
    this.appendValueInput("y")
        .appendField("y");
    this.appendValueInput("color")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//getpixel( target, x, y)
Blockly.Blocks['sgljs_getpixel'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("getpixel");
    this.appendValueInput("target")
        .appendField("target");
    this.appendValueInput("x")
        .appendField("x");
    this.appendValueInput("y")
        .appendField("y");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

//line( target, x1, y1, x2, y2, col)
Blockly.Blocks['sgljs_line'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("line");
    this.appendValueInput("target")
        .appendField("target");
    this.appendValueInput("xs")
        .appendField("xs");
    this.appendValueInput("ys")
        .appendField("ys");
    this.appendValueInput("xd")
        .appendField("xd");
    this.appendValueInput("yd")
        .appendField("yd");
    this.appendValueInput("color")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//box( target, x, y, w, h, col)
Blockly.Blocks['sgljs_box'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("box");
    this.appendValueInput("target")
        .appendField("target");
    this.appendValueInput("x")
        .appendField("x");
    this.appendValueInput("y")
        .appendField("y");
    this.appendValueInput("w")
        .appendField("w");
    this.appendValueInput("h")
        .appendField("h");
    this.appendValueInput("color")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//bar( target, x, y, w, h, col)
Blockly.Blocks['sgljs_bar'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("bar");
    this.appendValueInput("target")
        .appendField("target");
    this.appendValueInput("x")
        .appendField("x");
    this.appendValueInput("y")
        .appendField("y");
    this.appendValueInput("w")
        .appendField("w");
    this.appendValueInput("h")
        .appendField("h");
    this.appendValueInput("color")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//circle( target, vx, vy, r, col)
Blockly.Blocks['sgljs_circle'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("circle");
    this.appendValueInput("target")
        .appendField("target");
    this.appendValueInput("vx")
        .appendField("vx");
    this.appendValueInput("vy")
        .appendField("vy");
    this.appendValueInput("r")
        .appendField("r");
    this.appendValueInput("color")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//fillcircle( target, vx, vy, r, col)
Blockly.Blocks['sgljs_fillcircle'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("fillcircle");
    this.appendValueInput("target")
        .appendField("target");
    this.appendValueInput("vx")
        .appendField("vx");
    this.appendValueInput("vy")
        .appendField("vy");
    this.appendValueInput("r")
        .appendField("r");
    this.appendValueInput("color")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//TEXT

//setfont(fnt)
Blockly.Blocks['sgljs_setfont'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("setfont")
        .appendField("setfont");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//text ( target, x, y, size, col, txt)
Blockly.Blocks['sgljs_text'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("text");
    this.appendValueInput("target")
        .appendField("target");
    this.appendValueInput("x")
        .appendField("x");
    this.appendValueInput("y")
        .appendField("y");
    this.appendValueInput("size")
        .appendField("size");
    this.appendValueInput("color")
        .appendField("color");
    this.appendValueInput("text")
        .appendField("text");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//MOUSE

//mouseX
Blockly.Blocks['sgljs_mousex'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("mouseX");
    this.setOutput(true);
    this.setTooltip('');
  }
};

//mouseY
Blockly.Blocks['sgljs_mousey'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("mouseY");
    this.setOutput(true);
    this.setTooltip('');
  }
};
//mouseB
Blockly.Blocks['sgljs_mouseb'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("mouseB");
    this.setOutput(true);
    this.setTooltip('');
  }
};

//TOUCH

//touchX
Blockly.Blocks['sgljs_touchx'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("touchX");
    this.appendValueInput("index");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
//touchY
Blockly.Blocks['sgljs_touchy'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("touchY");
    this.appendValueInput("index");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
//touchB
Blockly.Blocks['sgljs_touchb'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("touchB");
    this.appendValueInput("index");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

//KEYBOARD

//key
Blockly.Blocks['sgljs_key'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("key")
        .appendField(new Blockly.FieldDropdown([
        ["KEY_ESC", "KEY_ESC"], 
        ["KEY_SPACE", "KEY_SPACE"],
		["KEY_UP", "KEY_UP"],
		["KEY_LEFT", "KEY_LEFT"],
		["KEY_RIGHT", "KEY_RIGHT"],
		["KEY_DOWN", "KEY_DOWN"],
		["KEY_CTRL", "KEY_CTRL"],
		["KEY_BACKSPACE", "KEY_BACKSPACE"],
		["KEY_TAB", "KEY_TAB"],
		["KEY_ENTER", "KEY_ENTER"],
		["KEY_SHIFT", "KEY_SHIFT"], 
		["KEY_CTRL", "KEY_CTRL"], 
		["KEY_ALT", "KEY_ALT"],
		["KEY_PAUSE_BREAK", "KEY_PAUSE_BREAK"],
		["KEY_CAPS_LOCK", "KEY_CAPS_LOCK"],
		["KEY_ESCAPE", "KEY_ESCAPE"],
		["KEY_PAGE_UP", "KEY_PAGE_UP"],
		["KEY_PAGE_DOWN", "KEY_PAGE_DOWN"],
		["KEY_END", "KEY_END"],
		["KEY_HOME", "KEY_HOME"],
		["KEY_LEFT_ARROW", "KEY_LEFT_ARROW"],
		["KEY_UP_ARROW", "KEY_UP_ARROW"],
		["KEY_RIGHT_ARROW", "KEY_RIGHT_ARROW"],
		["KEY_DOWN_ARROW", "KEY_DOWN_ARROW"],
		["KEY_INSERT", "KEY_INSERT"],
		["KEY_DEL", "KEY_DEL"],
		["KEY_0", "KEY_0"],
		["KEY_1", "KEY_1"],
		["KEY_2", "KEY_2"],
		["KEY_3", "KEY_3"],
		["KEY_4", "KEY_4"],
		["KEY_5", "KEY_5"],
		["KEY_6", "KEY_6"],
		["KEY_7", "KEY_7"],
		["KEY_8", "KEY_8"],
		["KEY_9", "KEY_9"],
		["KEY_A", "KEY_A"],
		["KEY_B", "KEY_B"],
		["KEY_C", "KEY_C"],
		["KEY_D", "KEY_D"],
		["KEY_E", "KEY_E"],
		["KEY_F", "KEY_F"],
		["KEY_G", "KEY_G"],
		["KEY_H", "KEY_H"],
		["KEY_I", "KEY_I"],
		["KEY_J", "KEY_J"],
		["KEY_K", "KEY_K"],
		["KEY_L", "KEY_L"],
		["KEY_M", "KEY_M"],
		["KEY_N", "KEY_N"],
		["KEY_O", "KEY_O"],
		["KEY_P", "KEY_P"],
		["KEY_Q", "KEY_Q"],
		["KEY_R", "KEY_R"],
		["KEY_S", "KEY_S"],
		["KEY_T", "KEY_T"],
		["KEY_U", "KEY_U"],
		["KEY_V", "KEY_V"],
		["KEY_W", "KEY_W"],
		["KEY_X", "KEY_X"],
		["KEY_Y", "KEY_Y"],
		["KEY_Z", "KEY_Z"],
		["KEY_LEFT_WINDOW_KEY", "KEY_LEFT_WINDOW_KEY"],
		["KEY_RIGHT_WINDOW_KEY", "KEY_RIGHT_WINDOW_KEY"],
		["KEY_SELECT_KEY", "KEY_SELECT_KEY"],
		["KEY_NUMPAD_0", "KEY_NUMPAD_0"],
		["KEY_NUMPAD_1", "KEY_NUMPAD_1"],
		["KEY_NUMPAD_2", "KEY_NUMPAD_2"],
		["KEY_NUMPAD_3", "KEY_NUMPAD_3"],
		["KEY_NUMPAD_4", "KEY_NUMPAD_4"],
		["KEY_NUMPAD_5", "KEY_NUMPAD_5"],
		["KEY_NUMPAD_6", "KEY_NUMPAD_6"],
		["KEY_NUMPAD_7", "KEY_NUMPAD_7"],
		["KEY_NUMPAD_8", "KEY_NUMPAD_8"],
		["KEY_NUMPAD_9", "KEY_NUMPAD_9"],
		["KEY_MULTIPLY", "KEY_MULTIPLY"],
		["KEY_ADD", "KEY_ADD"],
		["KEY_SUBTRACT", "KEY_SUBTRACT"],
		["KEY_DECIMAL_POINT", "KEY_DECIMAL_POINT"],
		["KEY_DIVIDE", "KEY_DIVIDE"],
		["KEY_F1", "KEY_F1"],
		["KEY_F2", "KEY_F2"],
		["KEY_F3", "KEY_F3"],
		["KEY_F4", "KEY_F4"],
		["KEY_F5", "KEY_F5"],
		["KEY_F6", "KEY_F6"],
		["KEY_F7", "KEY_F7"],
		["KEY_F8", "KEY_F8"],
		["KEY_F9", "KEY_F9"],
		["KEY_F10", "KEY_F10"],
		["KEY_F11", "KEY_F11"],
		["KEY_F12", "KEY_F12"],
		["KEY_NUM_LOCK", "KEY_NUM_LOCK"],
		["KEY_SCROLL_LOCK", "KEY_SCROLL_LOCK"],
		["KEY_SEMI_COLON", "KEY_SEMI_COLON"],
		["KEY_EQUAL_SIGN", "KEY_EQUAL_SIGN"],
		["KEY_COMMA", "KEY_COMMA"],
		["KEY_DASH", "KEY_DASH"],
		["KEY_PERIOD", "KEY_PERIOD"],
		["KEY_FORWARD_SLASH", "KEY_FORWARD_SLASH"],
		["KEY_GRAVE_ACCENT", "KEY_GRAVE_ACCENT"],
		["KEY_OPEN_BRACKET", "KEY_OPEN_BRACKET"],
		["KEY_BACK_SLASH", "KEY_BACK_SLASH"],
		["KEY_CLOSE_BRAKET", "KEY_CLOSE_BRAKET"],
		["KEY_SINGLE_QUOTE", "KEY_SINGLE_QUOTE"]
        ]), "KEY");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

//SOUND

//loadsound(filepath)
Blockly.Blocks['sgljs_loadsound'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("soundpath")
        .appendField("loadsound");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

//playsound(sound)
Blockly.Blocks['sgljs_playsound'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendValueInput("sound")
        .appendField("playsound");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
