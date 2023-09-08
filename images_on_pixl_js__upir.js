// simple project using Pixl.js board to show images 

// created by upir, 2023
// youtube channel: https://www.youtube.com/upir_upir

// YOUTUBE VIDEO: https://youtu.be/8V2kQTOjFhE
// SOURCE FILES: https://github.com/upiir/pixl_js_images

// Links from the video:
// Espruino IDE: https://www.espruino.com/ide/#
// Image Converter: https://www.espruino.com/Image+Converter
// Graphics library: https://www.espruino.com/Graphics#graphics-library
// Pixl.js about: https://www.espruino.com/Pixl.js
// Photopea (online graphics editor like Photoshop): https://www.photopea.com/


// Related videos with 128x64 OLED display:
// Arduino OLED menu: https://youtu.be/HVHVkKt-ldc
// U8g vs U8g2: https://youtu.be/K5e0lFRvZ2E
// Arduino Parking Sensor - https://youtu.be/sEWw087KOj0
// Turbo pressure gauge with Arduino and OLED display - https://youtu.be/JXmw1xOlBdk
// Arduino Car Cluster with OLED Display - https://youtu.be/El5SJelwV_0
// Knob over OLED Display - https://youtu.be/SmbcNx7tbX8
// Arduino + OLED = 3D ? - https://youtu.be/kBAcaA7NAlA
// Arduino OLED Gauge - https://youtu.be/xI6dXTA02UQ
// Smaller & Faster Arduino - https://youtu.be/4GfPQoIRqW8
// Save Image from OLED Display to PC - https://youtu.be/Ft2pRMVm44E



var backlight_state = true; // LCD backlight state (true of false)
var current_image = 0; // current image indicator
LED1.write(backlight_state); // set LCD backlight


// the images below were geneated using the Image Converter utility (link above)

var img_battery =
require("heatshrink").decompress(atob("wFAgIligP/AAv8B40DB43+B40HA50Gv4bB/AnDB447GB5Y7DB5f/B5+AB53wB5xQCB5hQCB8HAB53gJ5a9BB5n4g+AB5nwD5yPDB5YLCB7gvPB7/4B7z/DB7YvDd5ZfDBwqfJB5eAB5wHCB5ZeCg4PPwYfdH5N/RwgPIg4HOgZvDAAX+B40BB4xDDAGrtBn/An5yDB5F/8F/B5XwAIPw40wB51wB51gB5t88BPK4APBnHAB5XgB4MBB5QuBN4MBwAPNgYPMAAMDWBYPCg8eB5sGm4POsYOJPwXwhlhB5J+CB4IfKdoXgjE/B5M/4ABBnEcOBYAIA"));

var img_gauges = require("heatshrink").decompress(atob("wFAgMQA4cBBggEDhEwDAnAAQMDBAkMvwGEnACBjgIEv3+AYPoAQMH///8AFBi4CBv4fBh/oIYg7Ci/wD4I/Bv4fCKIsXFgMMiEB/4PEuAPD/+AhBXBB4UgD4cEB4RnCh4fLIAMAj4PFH4n//BhC/wzBAAMb2AECiALBAgIjBB4WAkMIEIUQHYIoBIYIfDjg/DiBbBwAPBMYQABkeIB4YMCgYyCABN/4EH/gPLn/gg5iCABMf8EPQQTKCHgQHDBoIRBD5YtBB58/YQQAJgf8n+AB5cBB6F/BxYAB/wPB/kchzuDXIPDwPA8APCwEiiIaEgUgwUhiH+vwPBoMgIYkEiGEiUIvzOBB5l/B4YCBB5f4gJNCAAYPEdwMEgRfBAAkgB4U/B4MCghtEAYNAB4uCdgKjFwAPDH4OCmBfFEIJPFwUgB4sCB41EoCfFggZBT4N/T4M4v5fFg/z8K/BvzfICgrPCJYsA8APLAAUcB4s/PYoABoYnE/gPInAPG4APGg4EDgf8j5HFAAMwDAcH/APIN4gPBh/wA4bSBgERD4YNBCIIfGhkwAgQtBB5EDNAYPBgYvEAAdgF4fAgJPHgZPEwEBP48AF4Y0CwEErmQBYbSBh1ykDXCgEG6QPBFAQDBhNLIQcAgtSB4UEGwUJpWgB4YvBMQUEBQQvCBwUCglQyAHBg4PBgkKoUgoBHCwgPBFgIPCgcJoUhMYdwdQYPCgCJBaYkPgF4TAYDBj0AVYv/EoYACgP/TQ4uB///W4kV64PFnACBjgPEooPFHoTPEiuWHIrPHjMVA=="));

var img_turbo = 
require("heatshrink").decompress(atob("wFAgISPgeAAYMH4ADBgIDCgF8A4QPCgwLDAYcMB508AQP5B5dgD5wPCgYHCJ4ngJ4oAPgkAgQbBRIUAoEAkEAiEAhAPfH58//4AM/gmBABkCB4cBDQiYChWq1QPMitVqQf/D/6vPZ57vPAH4AFgPwBxl//0IDpiaBB5kGAQIPMBgQPMiAPOkAPCj+2/fvcIQPIg027dtB49An5vBB4XNB5FRR4IPB+YfIwGIwGAF5eBlVAB4M+7ZPIwMU4AKHB4tjD4IPMygPOH4QPLL4cfvv375/IosBgEbtu2cwQPGnwPBj1t2/GZ5MCD4WwB522B5D/BgkAJ4QPIhABCABZYBmAPMgOA4APMgF/BxoA/AFYA="));

var img_parking =
require("heatshrink").decompress(atob("wFAgPwgfAgEMggMDkEwgALBh+AgFAB4MI/4ACiAPBgUMgO+/4PBh0HD4fguAPBjkR23bB4MP+EPDwP4AoIPBnlJmHbDIMMBQUAg/wF4MAvsoB4gCBleuKAQPDF4cEv+AlWKgH/B4IvC3wPE4ErlkBB4ZPBN4cEg+AmUqgHwB4RvBR4cDTooICR4IIDgPgj5vB/gkBW5F+LQUCvzHJRwQABQYQAHhYPD6APJgwEDsD/RAAxYGgIOGNwIHFOA8B/gHFn4PGgf/A4v/UAIPGPQiEBB40H//+Awd//5HHTYijCB4wJC/YCB76xIB55PB//3AQPvAQJPGjgPHnCHGj4PF/CXH8YPF44PH/l/B4f+A4IPFRAOHB4fhSwoPD/E3B4PsIoIPGBYJpBj/4OoTXGn4sC8EHGQQ/FgPPPgn3ToNxB4vxB4v378KwCuE/xQBD4nDqtAXwuPD4vPlQfEfwPwD4vYD4oPB/8PdgX7+3YlWgfw3wr4DB/UH79VqD+G/+AR4MADgI/FfwX/76PB/NVAAMQB4cfT4Q/C/Wq1Wo1CuE44PED4VBqgPE/AMBz4CB/AfBhQfF/7pB351B/pdBqofEVoPhB4N9+/81WCEIIPF/0f39h2/9DwIfFNwXgn992/8gQeBD4yPCtu0gJ/CD4hNBAAOqtuy1AeCL4kGYIWVvv1DwTfFgH7doMqgA9DHwgAB7YfBHYY+GD4odD1T+EAAPYt4fFDwwPDD4geGF4Pgv4fDDw4ACgYfDwAPJgCcCBpQArA="));

var img_gps = 
require("heatshrink").decompress(atob("wFAgIVSgUIoAPMoUIoQPMDoMCB5kB/+ABxcgn0AvkEB5UR4EAgeIB5UGgEYgFgBxMEjEgjADCPpMgB4UEQJXAiEYhEDNpUAB4S5BTpICBJ4IFDAA0kgHnzGXwAFBAA4rBimYymAiAPIBIPkzH0wAVBVxAfCimAWAc//0/ZIJ5CB4aFBB4P/B4cCB4JPBi4GDcwIPDPIZvCQoLUBB4kBmAPEhgWBg4PFhgPEmAPHkRYCB4UAogPB+F+n4HBiUDzwPC++ApAPGPANSB4WEwBvBB4+SB4XkB4UD8APEgMSB4SQBR4UAB4cIgQPFaAYPB/kAtED7wPC8+AiyQC/jBBdwRvFD4UD/B/BB5nwR4Q3DB4YXCgafC4APcgEP4HQBYU8AYULN4YPCD4dCD4oPFl4PDge8B4KvCB4cpB4cEkgPBZ4V/B48HB5EX1JPDgml9APG6AfCN4ME0hfBg///1/P4RPCB4MDngvCB4qPIB4SfCZ5IPB/kfB5v4h4PFAAYPD+ACB4FoB40WA40EA40gB5DdCg+8B4cBi+kB4ckCoQIBB4e0B4UCB41AB4VXEwMAhQPDgIDBqAFCigKCiIPDgQDBxAPGgJPDggDBwAPGBAYACCwIAHoAQDgJWBAA0BoIGEwQmFJQUiAwlEN4QAFigFElA/IcAreBABMFuvABpS4BgtRHgLmHN4QPBspcBN5AACg1FLhAABA"));

var img_exhaust = 
require("heatshrink").decompress(atob("wFAgIGDhkw4EAgYEBCxEQpMggEEyVIB7EcrNgF4MWrAPIiVp0AfBzVoB5IvOB55vPRQiaPBp2AVIgAHoAPBgQPMwGBB7tAwMEZg/DB4mCB4UEmALCmMkwEwkEgB4QABhlJBYIPDEYKvBgEIAAMUB4dRsuAhgPDCAUErILBB4OmwEPxBIEiEEtILBgF5EYMP5APGF4cRB4TeBAAcgB4hvCh/gB4xvDAAMCh/wSgyRFgMH/DzLXAODB4rxBEAgGBoP8DAwgFwEB/w4Gbg0A/4IFeQysBv4IFeQ0QgE/HAsIB4oGBn/cv/4j4YDAA0f5gPBv4jFEokPxlgjFxYgQgEIoUGhlgmHgYgRZBMpFw4FgPIaFFGQVgB4ZCDOgcMAQPAB4YwDgYGChvwgIPFIYQZBL4X4gOAB4YbDgEwF4U8B4o3CJgkcjgZBB4agIhgPFABAPQg4PIP4ccB45/GJ4MGPQJ7GAYcOB4TfDP4gACR4IPBf5AACgfgB4MfLxQAKdoQALGgP4BxY0CPIIAKOYYAFaoLXCAA944/AiHD4gKEnFhO4VBkMAiMiXAUI8OGkmSoAPCMoMhkUCA4MYyVJggPDuIPBkHDwQHBlESB4OyW4VBsIPBgQfChES5cI6YvDH4IPFkdNiA/EB4MQgRPDoVJkAPDvHhB42CpM8N4aPHhHxww="));

var img_analyzer =
require("heatshrink").decompress(atob("wFAgPq1QAM1eAEJsBB4l/8APNAAcH/0B/4MBB5IfPB95PBB4xWDB5YfPR4wPNj/4B4l/8LFEv/qwEC0/+BAUAhIvWX5oP/P4oPyV4LvEB9WggGp/7fCz/6b4IID9OHCwhP5B55PPB/4PfYwrPZB/4P/B7+AgAAMgPq1QAM1YeNACMDjECseAo84gsgmHkwHBwFMyEE0kGymA5NIhsgpGEwMioHSB4MEgwIBpIPChAGBgFA6GQg0IgXEB4UF0EQ82BwGArHQgo/B0mCB4VAiEVgNBwFU0EEwkCymD9IPBkEgimBkFAqRPCB4OAD4QLBB4JPBB4JvDgFGmAPBvRvB5JvCA"));

var img_cube = 
require("heatshrink").decompress(atob("wFAgIQNivXB51FB52WB5sZiqC/AG8B8APNv0wBxkfwEoBxcHFoMkHhf4AYIPLjwDCkQPKi4DCkIPKiHwAYMgwAPKhwDBl/AB5UB4F/+FAB5UAn+AkAPMAIIP/B/4P/B/4P/B5s/wAPMgPAv/wB5cOAYMv4APK+ADBkGAB5MXAYUhBxMAjwDCkQPKgP4B5sAg/ggEkB5cAj+AlAPMgF+mAPNgIxBAH4A/AEg="));

var img_charging = 
require("heatshrink").decompress(atob("wFAgJC/AFMgB51wBA8B4AfNgfgAYMP/ADBnAPGg/wAYP//+AgF8B5MDB4IkBB5M+h4PBGAIPHH4N/j4PB/g/IL4P/34PB/x5JgINBAARQBB5qFFB7KVCB5iVCAA4PE/EQB5F/B4k5B5E/B4f8iZxITwQPCgIfN/0CB5xfJn/P+E8vgPFEggPB8EYnAfKv8P4+JnP/B5fP5MxB4McB5HP5/4kYPBnwPK/lnB5nAn/HB5sfx4/Nx+YL5YPB58Qv4PM50yB5SfB4+OuV+uAPJgfgjlwv34B5TPB/H//jvNB5UfBwf9B538H5MPB4f4L5IPFP5MHB4fwB5MDB4fgB5MBB4fAB6AhChAQFB4eAgJBJUAX+EoIPJSASdBB5SACPwRhDkBwHNxRQEwAPMh6tKABECB50HD7wARivXB51FB52WB5sZio"));

var img_knob = 
require("heatshrink").decompress(atob("wFAgIol/4ACBxUB8Ph/+HwAPK5nM/8zB5f8B4PzB5nI//nB5fx4H/54fM4n/z4/On5fOB5h/B88DB5SfPAAMD8DANgPAfR74lAA0CiGIoAPLoQPBoQOKhAPDiBsJB4JfBB4JiIkMIN4cQwgPIP4oPHg0gB4sIsBsHB4xyGNIhMDOQwWEB4cCPgo2EB4cGQQhsCAA5YDMxB4GfIsOjioEBYfABIcRkQFDgYDCjBOEgMmRIkYJwREEg0qAocEBYUEMgkBmQPGIQIPEH4sIKAWAP4hfFhChCoCPKiAPBKIMEB5QOBDpSxEDpQPEVogAJMAUB4YTHg04UINAAQMkAYIAFhVEBgIGCkjREAAUSpgGEoofHkVUAwmGB48+shSEggPHgQ/BAAUD8ZfHgRfBAH4A/AD0r1wPNlWKD50sB5sylRBP"));

var img_graph = 
require("heatshrink").decompress(atob("wFAgIROhoPOhQPOh8AgP/h/4v/ABQX/4/+n/wAwMD/+QgmAkAHBJIMogN//EL92z3YPDjvVjsQlGBvn4gGK1fXytU0mgiGViMo1PFsn4hms1fvD4cczsdosr9tkzEK1QfFgmFiMClf9B4MP9W7H4gfB7sAB4ZfPhx/OX56fBAF0CiAPNgzSCD7YPfgAPw7APNi3bB59gB6kB2wPF+3btgHEhu24AfGB59twAsB2EAtu2NAoPF20DB4sBB4osBB4R4DB4gsBB4IFBB4kNB4ZpBBgQCCPAMbttAB4YsDB4gFB5APDAQ1sgwFBpAPKAQYPPqCvBB5kWD50iB50kB70GB5yvEB/4PLV5xP/B/8OB50KiEAABkK/4AND4MEgMAoAEJhwPOA=="));



// draw image
function draw_image() {

  g.clear(); // clear the buffer
  
  // draw image based on the current_image value
  switch(current_image) {
    case 0:
      g.drawImage(img_graph, 0, 0);
      break;
    case 1:
      g.drawImage(img_knob, 0, 0);
      break;     
    case 2:
      g.drawImage(img_charging, 0, 0);
      break;     
    case 3:
      g.drawImage(img_cube, 0, 0);
      break;   
    case 4:
      g.drawImage(img_analyzer, 0, 0);
      break;      
    case 5:
      g.drawImage(img_exhaust, 0, 0);
      break;      
    case 6:
      g.drawImage(img_gps, 0, 0);
      break;      
    case 7:
      g.drawImage(img_parking, 0, 0);
      break;       
    case 8:
      g.drawImage(img_turbo, 0, 0);
      break;        
    case 9:
      g.drawImage(img_gauges, 0, 0);
      break;       
    case 10:
      g.drawImage(img_battery, 0, 0);
      break;        
  }
  
  g.flip(); // flip the buffer to show the changes to the display
  
  current_image = (current_image + 1) % 11; // increase the current_image value, but do not go over 10

}

setWatch(function() { // when BTN1 (top left button) is pressed, toggle the LCD backlight
  backlight_state = !backlight_state; // toggle the value from true>false or false>true
  LED1.write(backlight_state); // set the LCD backlight
}, BTN1, {edge:"rising", debounce:50, repeat:true});

// when BTN2 (top right button) is pressed, show another image
setWatch( draw_image , BTN2, {edge:"rising", debounce:50, repeat:true});

// show an image when you first start this sketch
draw_image();