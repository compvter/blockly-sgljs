/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating JavaScript for text blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.JavaScript.sgljs');

goog.require('Blockly.JavaScript');


//DEFAULT

//display
Blockly.JavaScript['sgljs_display'] = function(block) {
  var code = "display";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//SCREEN

//setdisplay( width, height)
Blockly.JavaScript['sgljs_setdisplay'] = function(block) {
  var text_width = block.getFieldValue('width');
  var text_height = block.getFieldValue('height');
  var code = "setdisplay("+text_width+","+text_height+");\n";
  return code;
};

//setfps(fps)
Blockly.JavaScript['sgljs_setfps'] = function(block) {
  var value_fps = Blockly.JavaScript.valueToCode(block, 'fps', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'setfps('+eval(value_fps)+');\n';
  return code;
};

//  update()

//createsurface(width,height)
Blockly.JavaScript['sgljs_createsurface'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'createsurface('+value_width + ', '+value_height + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//function loadsurface(filepath)
Blockly.JavaScript['sgljs_loadsurface'] = function(block) {
  var value_filename = Blockly.JavaScript.valueToCode(block, 'filename', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'loadsurface('+value_filename+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//blt( target,  xdest,  ydest, wdest, hdest, surface, xsource, ysource, wsource, hsource)
Blockly.JavaScript['sgljs_blt'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xdest = Blockly.JavaScript.valueToCode(block, 'xdest', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ydest = Blockly.JavaScript.valueToCode(block, 'ydest', Blockly.JavaScript.ORDER_ATOMIC);
  var value_wdest = Blockly.JavaScript.valueToCode(block, 'wdest', Blockly.JavaScript.ORDER_ATOMIC);
  var value_hdest = Blockly.JavaScript.valueToCode(block, 'hdest', Blockly.JavaScript.ORDER_ATOMIC);
  var value_surface = Blockly.JavaScript.valueToCode(block, 'surface', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xsource = Blockly.JavaScript.valueToCode(block, 'xsource', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ysource = Blockly.JavaScript.valueToCode(block, 'ysource', Blockly.JavaScript.ORDER_ATOMIC);
  var value_wsource = Blockly.JavaScript.valueToCode(block, 'wsource', Blockly.JavaScript.ORDER_ATOMIC);
  var value_hsource = Blockly.JavaScript.valueToCode(block, 'hsource', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'blt('+value_target+', '+ value_xdest +', '+ value_ydest +', '+ value_wdest +', '+ value_hdest +', ' +value_surface+', '+ value_xsource +', '+ value_ysource +', '+ value_wsource +', '+ value_hsource +');\n';
  return code;
};

//paste( target, x, y, surface,angle,zoom,alpha)
Blockly.JavaScript['sgljs_paste'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_surface = Blockly.JavaScript.valueToCode(block, 'surface', Blockly.JavaScript.ORDER_ATOMIC);
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var value_zoom = Blockly.JavaScript.valueToCode(block, 'zoom', Blockly.JavaScript.ORDER_ATOMIC);
  var value_alpha = Blockly.JavaScript.valueToCode(block, 'alpha', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'paste('+value_target+', '+ value_x +', '+ value_y +', ' +value_surface+', '+value_angle+', '+value_zoom+', '+value_alpha+');\n';
  return code;
};

//hit(surfacea, xa, ya, surfaceb, xb, yb, xa2, ya2, xb2, yb2) 
Blockly.JavaScript['sgljs_hit'] = function(block) {
  var value_surfacea = Blockly.JavaScript.valueToCode(block, 'surfaceA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xa = Blockly.JavaScript.valueToCode(block, 'xA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ya = Blockly.JavaScript.valueToCode(block, 'yA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_surfaceb = Blockly.JavaScript.valueToCode(block, 'surfaceB', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xb = Blockly.JavaScript.valueToCode(block, 'xB', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yb = Blockly.JavaScript.valueToCode(block, 'yB', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xa2 = Blockly.JavaScript.valueToCode(block, 'xA2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ya2 = Blockly.JavaScript.valueToCode(block, 'yA2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xb2 = Blockly.JavaScript.valueToCode(block, 'xB2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yb2 = Blockly.JavaScript.valueToCode(block, 'yB2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'hit('+value_surfacea+', '+value_xa+', '+value_ya+', '+value_surfaceb+', '+value_xb+', '+value_yb+', '+value_xa2+', '+value_ya2+', '+value_xb2+', '+value_yb2+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//hitpp(surfacea, xa, ya, surfaceb, xb, yb, xa2, ya2, xb2, yb2) 
Blockly.JavaScript['sgljs_hitpp'] = function(block) {
  var value_surfacea = Blockly.JavaScript.valueToCode(block, 'surfaceA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xa = Blockly.JavaScript.valueToCode(block, 'xA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ya = Blockly.JavaScript.valueToCode(block, 'yA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_surfaceb = Blockly.JavaScript.valueToCode(block, 'surfaceB', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xb = Blockly.JavaScript.valueToCode(block, 'xB', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yb = Blockly.JavaScript.valueToCode(block, 'yB', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xa2 = Blockly.JavaScript.valueToCode(block, 'xA2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ya2 = Blockly.JavaScript.valueToCode(block, 'yA2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xb2 = Blockly.JavaScript.valueToCode(block, 'xB2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yb2 = Blockly.JavaScript.valueToCode(block, 'yB2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'hitpp('+value_surfacea+', '+value_xa+', '+value_ya+', '+value_surfaceb+', '+value_xb+', '+value_yb+', '+value_xa2+', '+value_ya2+', '+value_xb2+', '+value_yb2+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//GRAPHICS
//cls
Blockly.JavaScript['sgljs_cls'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code ="cls("+value_target+", "+value_color+");\n";
  return code;
};

//putpixel( target, x, y, col)
Blockly.JavaScript['sgljs_putpixel'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'putpixel('+value_target+', '+value_x+', '+value_y+', '+value_color+');\n' ;
  return code;
};

//getpixel( target, x, y)
Blockly.JavaScript['sglij_getpixel'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'getpixel('+value_target+', '+value_x+', '+value_y+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//line( target, x1, y1, x2, y2, col)
Blockly.JavaScript['sgljs_line'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xs = Blockly.JavaScript.valueToCode(block, 'xs', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ys = Blockly.JavaScript.valueToCode(block, 'ys', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xd = Blockly.JavaScript.valueToCode(block, 'xd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yd = Blockly.JavaScript.valueToCode(block, 'yd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'line('+value_target+', '+value_xs+', '+value_ys+', '+value_xd+', '+value_yd+', '+value_color+');\n' ;
  return code;
};

//box( target, x, y, w, h, col)
Blockly.JavaScript['sgljs_box'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'box('+value_target+', '+value_x+', '+value_y+', '+value_w+', '+value_h+', '+value_color+');\n';
  return code;
};

//bar( target, x, y, w, h, col)
Blockly.JavaScript['sgljs_bar'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'bar('+value_target+', '+value_x+', '+value_y+', '+value_w+', '+value_h+', '+value_color+');\n';
  return code;
};

//circle( target, vx, vy, r, col)
Blockly.JavaScript['sgljs_circle'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vx = Blockly.JavaScript.valueToCode(block, 'vx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vy = Blockly.JavaScript.valueToCode(block, 'vy', Blockly.JavaScript.ORDER_ATOMIC);
  var value_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'circle('+value_target+', '+value_vx+', '+value_vy+', '+value_r+', '+value_color+');\n';
  return code;
};

//fillcircle( target, vx, vy, r, col)
Blockly.JavaScript['sgljs_fillcircle'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vx = Blockly.JavaScript.valueToCode(block, 'vx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vy = Blockly.JavaScript.valueToCode(block, 'vy', Blockly.JavaScript.ORDER_ATOMIC);
  var value_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fillcircle('+value_target+', '+value_vx+', '+value_vy+', '+value_r+', '+value_color+');\n';
  return code;
};

//TEXT
 
//setfont(fnt)
Blockly.JavaScript['sgljs_setfont'] = function(block) {
  var value_setfont = Blockly.JavaScript.valueToCode(block, 'setfont', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'setfont('+value_setfont+');\n';
  return code;
};

//text ( target, x, y, size, col, txt)
Blockly.JavaScript['sgljs_text'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "window.text(window."+value_target+", "+value_x+", "+value_y+", "+value_size +", " +value_color+ ","+value_text +");\n";
  return code;
};

//MOUSE

//mouseX
Blockly.JavaScript['sgljs_mousex'] = function(block) {
  var code = 'mouseX';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//mouseY
Blockly.JavaScript['sgljs_mousey'] = function(block) {
  var code = 'mouseY';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//mouseB
Blockly.JavaScript['sgljs_mouseb'] = function(block) {
  var code = 'mouseB';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//TOUCH

//touchX
Blockly.JavaScript['sgljs_touchx'] = function(block) {
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'touchX['+value_index+']';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//touchY
Blockly.JavaScript['sgljs_touchy'] = function(block) {
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'touchY['+value_index+']';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//touchB
Blockly.JavaScript['sgljs_touchb'] = function(block) {
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'touchB['+value_index+']';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//KEYBOARD

//key
Blockly.JavaScript['sgljs_key'] = function(block) {
  var dropdown_name = block.getFieldValue('KEY');
  var code = 'key['+dropdown_name+']';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//SOUND

//loadsound(filepath)
Blockly.JavaScript['sgljs_loadsound'] = function(block) {
  var value_soundpath = Blockly.JavaScript.valueToCode(block, 'soundpath', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'loadsound('+value_soundpath+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//playsound(sound)
Blockly.JavaScript['sgljs_playsound'] = function(block) {
  var value_sound = Blockly.JavaScript.valueToCode(block, 'sound', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'playsound('+value_sound+');\n';
  return code;
};
