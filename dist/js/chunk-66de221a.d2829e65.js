(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66de221a"],{"6f45":function(e,t,r){var i,a;(function(){var r=!1,o=function(e){return e instanceof o?e:this instanceof o?void(this.EXIFwrapped=e):new o(e)};e.exports&&(t=e.exports=o),t.EXIF=o;var s=o.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},l=o.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},c=o.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},u=o.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},d=o.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function g(e){return!!e.exifdata}function f(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,i=new ArrayBuffer(r),a=new Uint8Array(i),o=0;o<r;o++)a[o]=n.charCodeAt(o);return i}function h(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},n.send()}function m(e,t){function n(n){var r=p(n);e.exifdata=r||{};var i=S(n);if(e.iptcdata=i||{},o.isXmpEnabled){var a=I(n);e.xmpdata=a||{}}t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src)){var i=f(e.src);n(i)}else if(/^blob\:/i.test(e.src)){var a=new FileReader;a.onload=function(e){n(e.target.result)},h(e.src,(function(e){a.readAsArrayBuffer(e)}))}else{var s=new XMLHttpRequest;s.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";n(s.response),s=null},s.open("GET",e.src,!0),s.responseType="arraybuffer",s.send(null)}else if(self.FileReader&&(e instanceof self.Blob||e instanceof self.File)){a=new FileReader;a.onload=function(e){r&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},a.readAsArrayBuffer(e)}}function p(e){var t=new DataView(e);if(r&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return r&&console.log("Not a valid JPEG"),!1;var n,i=2,a=e.byteLength;while(i<a){if(255!=t.getUint8(i))return r&&console.log("Not a valid marker at offset "+i+", found: "+t.getUint8(i)),!1;if(n=t.getUint8(i+1),r&&console.log(n),225==n)return r&&console.log("Found 0xFFE1 marker"),x(t,i+4,t.getUint16(i+2)-2);i+=2+t.getUint16(i+2)}}function S(e){var t=new DataView(e);if(r&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return r&&console.log("Not a valid JPEG"),!1;var n=2,i=e.byteLength,a=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};while(n<i){if(a(t,n)){var o=t.getUint8(n+7);o%2!==0&&(o+=1),0===o&&(o=4);var s=n+8+o,l=t.getUint16(n+6+o);return w(e,s,l)}n++}}var b={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function w(e,t,n){var r,i,a,o,s=new DataView(e),l={},c=t;while(c<t+n)28===s.getUint8(c)&&2===s.getUint8(c+1)&&(o=s.getUint8(c+2),o in b&&(a=s.getInt16(c+3),a+5,i=b[o],r=C(s,c+5,a),l.hasOwnProperty(i)?l[i]instanceof Array?l[i].push(r):l[i]=[l[i],r]:l[i]=r)),c++;return l}function P(e,t,n,i,a){var o,s,l,c=e.getUint16(n,!a),u={};for(l=0;l<c;l++)o=n+12*l+2,s=i[e.getUint16(o,!a)],!s&&r&&console.log("Unknown tag: "+e.getUint16(o,!a)),u[s]=v(e,o,t,n,a);return u}function v(e,t,n,r,i){var a,o,s,l,c,u,d=e.getUint16(t+2,!i),g=e.getUint32(t+4,!i),f=e.getUint32(t+8,!i)+n;switch(d){case 1:case 7:if(1==g)return e.getUint8(t+8,!i);for(a=g>4?f:t+8,o=[],l=0;l<g;l++)o[l]=e.getUint8(a+l);return o;case 2:return a=g>4?f:t+8,C(e,a,g-1);case 3:if(1==g)return e.getUint16(t+8,!i);for(a=g>2?f:t+8,o=[],l=0;l<g;l++)o[l]=e.getUint16(a+2*l,!i);return o;case 4:if(1==g)return e.getUint32(t+8,!i);for(o=[],l=0;l<g;l++)o[l]=e.getUint32(f+4*l,!i);return o;case 5:if(1==g)return c=e.getUint32(f,!i),u=e.getUint32(f+4,!i),s=new Number(c/u),s.numerator=c,s.denominator=u,s;for(o=[],l=0;l<g;l++)c=e.getUint32(f+8*l,!i),u=e.getUint32(f+4+8*l,!i),o[l]=new Number(c/u),o[l].numerator=c,o[l].denominator=u;return o;case 9:if(1==g)return e.getInt32(t+8,!i);for(o=[],l=0;l<g;l++)o[l]=e.getInt32(f+4*l,!i);return o;case 10:if(1==g)return e.getInt32(f,!i)/e.getInt32(f+4,!i);for(o=[],l=0;l<g;l++)o[l]=e.getInt32(f+8*l,!i)/e.getInt32(f+4+8*l,!i);return o}}function F(e,t,n){var r=e.getUint16(t,!n);return e.getUint32(t+2+12*r,!n)}function y(e,t,n,r){var i=F(e,t+n,r);if(!i)return{};if(i>e.byteLength)return{};var a=P(e,t,t+i,u,r);if(a["Compression"])switch(a["Compression"]){case 6:if(a.JpegIFOffset&&a.JpegIFByteCount){var o=t+a.JpegIFOffset,s=a.JpegIFByteCount;a["blob"]=new Blob([new Uint8Array(e.buffer,o,s)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",a["Compression"])}else 2==a["PhotometricInterpretation"]&&console.log("Thumbnail image format is RGB, which is not implemented.");return a}function C(e,t,r){var i="";for(n=t;n<t+r;n++)i+=String.fromCharCode(e.getUint8(n));return i}function x(e,t){if("Exif"!=C(e,t,4))return r&&console.log("Not valid EXIF data! "+C(e,t,4)),!1;var n,i,a,o,u,g=t+6;if(18761==e.getUint16(g))n=!1;else{if(19789!=e.getUint16(g))return r&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(g+2,!n))return r&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var f=e.getUint32(g+4,!n);if(f<8)return r&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(g+4,!n)),!1;if(i=P(e,g,g+f,l,n),i.ExifIFDPointer)for(a in o=P(e,g,g+i.ExifIFDPointer,s,n),o){switch(a){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":o[a]=d[a][o[a]];break;case"ExifVersion":case"FlashpixVersion":o[a]=String.fromCharCode(o[a][0],o[a][1],o[a][2],o[a][3]);break;case"ComponentsConfiguration":o[a]=d.Components[o[a][0]]+d.Components[o[a][1]]+d.Components[o[a][2]]+d.Components[o[a][3]];break}i[a]=o[a]}if(i.GPSInfoIFDPointer)for(a in u=P(e,g,g+i.GPSInfoIFDPointer,c,n),u){switch(a){case"GPSVersionID":u[a]=u[a][0]+"."+u[a][1]+"."+u[a][2]+"."+u[a][3];break}i[a]=u[a]}return i["thumbnail"]=y(e,g,f,n),i}function I(e){if("DOMParser"in self){var t=new DataView(e);if(r&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return r&&console.log("Not a valid JPEG"),!1;var n=2,i=e.byteLength,a=new DOMParser;while(n<i-4){if("http"==C(t,n,4)){var o=n-1,s=t.getUint16(n-2)-1,l=C(t,o,s),c=l.indexOf("xmpmeta>")+8;l=l.substring(l.indexOf("<x:xmpmeta"),c);var u=l.indexOf("x:xmpmeta")+10;l=l.slice(0,u)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+l.slice(u);var d=a.parseFromString(l,"text/xml");return U(d)}n++}}}function D(e){var t={};if(1==e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);t["@attributes"][r.nodeName]=r.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var i=0;i<e.childNodes.length;i++){var a=e.childNodes.item(i),o=a.nodeName;if(null==t[o])t[o]=D(a);else{if(null==t[o].push){var s=t[o];t[o]=[],t[o].push(s)}t[o].push(D(a))}}return t}function U(e){try{var t={};if(e.children.length>0)for(var n=0;n<e.children.length;n++){var r=e.children.item(n),i=r.attributes;for(var a in i){var o=i[a],s=o.nodeName,l=o.nodeValue;void 0!==s&&(t[s]=l)}var c=r.nodeName;if("undefined"==typeof t[c])t[c]=D(r);else{if("undefined"==typeof t[c].push){var u=t[c];t[c]=[],t[c].push(u)}t[c].push(D(r))}}else t=e.textContent;return t}catch(d){console.log(d.message)}}o.enableXmp=function(){o.isXmpEnabled=!0},o.disableXmp=function(){o.isXmpEnabled=!1},o.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete)&&(g(e)?t&&t.call(e):m(e,t),!0)},o.getTag=function(e,t){if(g(e))return e.exifdata[t]},o.getIptcTag=function(e,t){if(g(e))return e.iptcdata[t]},o.getAllTags=function(e){if(!g(e))return{};var t,n=e.exifdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},o.getAllIptcTags=function(e){if(!g(e))return{};var t,n=e.iptcdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},o.pretty=function(e){if(!g(e))return"";var t,n=e.exifdata,r="";for(t in n)n.hasOwnProperty(t)&&("object"==typeof n[t]?n[t]instanceof Number?r+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":r+=t+" : ["+n[t].length+" values]\r\n":r+=t+" : "+n[t]+"\r\n");return r},o.readFromBinaryFile=function(e){return p(e)},i=[],a=function(){return o}.apply(t,i),void 0===a||(e.exports=a)}).call(this)},e43f:function(e,t,n){"use strict";n.r(t),n.d(t,"rotatePhoto",(function(){return s}));n("99af"),n("ace4"),n("b0c0"),n("d3b7"),n("ac1f"),n("466d"),n("5319"),n("1276"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a9"),n("72f7");var r=n("6f45"),i=n.n(r);function a(e,t,n){var r=0,i=3;if(null!=e){var a=e.height,o=e.width,s=2;null==s&&(s=r),"right"===t?(s++,s>i&&(s=r)):(s--,s<r&&(s=i));var l=90*s*Math.PI/180,c=n.getContext("2d");switch(s){case 0:n.width=o,n.height=a,c.drawImage(e,0,0);break;case 1:n.width=a,n.height=o,c.rotate(l),c.drawImage(e,0,-a);break;case 2:n.width=o,n.height=a,c.rotate(l),c.drawImage(e,-o,-a);break;case 3:n.width=a,n.height=o,c.rotate(l),c.drawImage(e,-o,0);break}}}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"file",n=e.split(","),r=n[0].match(/:([^;]*)/)[1],i=r.split("/")[1],a=atob(n[1]),o=a.length,s=new Uint8Array(o);while(o--)s[o]=a.charCodeAt(o);return new File([s],"".concat(t,".").concat(i),{type:r})}function s(e,t){var n=null;if(e){i.a.getData(e,(function(){i.a.getAllTags(this),n=i.a.getTag(this,"Orientation")}));var r=new FileReader;r.onload=function(r){var i=new Image;i.src=r.target.result,i.onload=function(){var r=this.naturalWidth,i=this.naturalHeight;this.naturalWidth>this.naturalHeight&&this.naturalWidth>800?(r=800,i=r*this.naturalHeight/this.naturalWidth):this.naturalHeight>this.naturalWidth&&this.naturalHeight>1200&&(i=1200,r=i*this.naturalWidth/this.naturalHeight);var s=document.createElement("canvas"),l=s.getContext("2d");if(s.width=r,s.height=i,l.drawImage(this,0,0,r,i),""!==n&&1!==n)switch(n){case 6:a(this,"left",s);break;case 8:a(this,"right",s);break;case 3:a(this,"right",s),a(this,"right",s);break}var c=s.toDataURL("image/jpeg",.8),u="jpeg",d=function(e){e=e.toLocaleLowerCase().replace(/jpg/i,"jpeg");var t=e.match(/png|jpeg|bmp|gif/)[0];return"image/"+t};c=c.replace(d(u),"image/jpeg");var g=o(c,e.name.replace(/\..*/,""));t(g)}},r.readAsDataURL(e)}}}}]);
//# sourceMappingURL=chunk-66de221a.d2829e65.js.map