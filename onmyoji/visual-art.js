(function(){
'use strict';
const specs={
s1:['#65b59a','#142d31','#d8c48f','blade','竹影武士'],
s2:['#ed977e','#562c45','#f4ca83','lamp','青灯书生'],
s3:['#f39bc7','#633356','#fff1c8','flower','桃花灵'],
s4:['#57acc7','#233e61','#cfebef','wave','蜃海游侠'],
s5:['#c4a1ed','#41336c','#ecd8ff','kite','纸鸢使'],
s6:['#cdb17b','#3c393e','#f8daa8','shield','玄甲卫'],
s7:['#ff8565','#6b264b','#ffdc97','wing','炎羽使'],
s8:['#7b97ee','#293970','#e2e9ff','thunder','雷鼓童'],
s9:['#c4e4f9','#3c4b8c','#effcff','snow','雪魄'],
s10:['#b2a5fa','#43306d','#fff2ca','fox','千面狐'],
s11:['#65cfd3','#244968','#dbffff','whale','星鲸'],
s12:['#acdcff','#405789','#f4feff','music','霜弦姬']};
function special(type,glow){
switch(type){
case 'blade':return '<path d="M150 115L214 19" stroke="#d3e8dd" stroke-width="5" stroke-linecap="round"/><path d="M144 115l13 7M140 115l23-13" stroke="#d0a568" stroke-width="7"/>';
case 'lamp':return '<g transform="translate(170 171)"><path d="M0 -30v51" stroke="#ecca7b" stroke-width="3"/><path d="M-25-3Q0-36 25-3L19 27H-19z" fill="#f6bb70" opacity=".79" stroke="#fbe0a5"/><circle r="12" fill="#ffeeac" opacity=".9"/></g>';
case 'flower':return '<g transform="translate(174 91)" fill="#ffd2e0"><circle cx="-17" cy="-13" r="17"/><circle cx="12" cy="-17" r="17"/><circle cx="23" cy="8" r="17"/><circle cx="-2" cy="25" r="17"/><circle cx="-21" cy="10" r="17"/><circle r="8" fill="#e6b36c"/></g>';
case 'wave':return '<path d="M5 174q42-60 86 0t101 0" fill="none" stroke="#b7eeef" stroke-width="8" opacity=".77"/>';
case 'kite':return '<path d="M176 25l34 38-34 37-34-37z" fill="#cfa4eb" stroke="#eed3ff" stroke-width="3"/><path d="M176 100q24 22-10 54" fill="none" stroke="#e8c6e8" stroke-width="2"/>';
case 'shield':return '<path d="M175 98l38 15v54q-7 26-38 45-32-24-38-45v-54z" fill="#8f977e" stroke="#f7d68d" stroke-width="5"/><path d="M175 115v76m-24-39h49" stroke="#edcf84" stroke-width="5"/>';
case 'wing':return '<path d="M163 110q53-59 62-92-1 85-44 126q37-35 43-31-14 52-52 53" fill="#ffaf7b" stroke="#ffe7ae" stroke-width="3"/>';
case 'thunder':return '<path d="M183 12l-40 73h35l-27 69 74-93h-38l24-49z" fill="#cfe2ff" stroke="#95b7ff" stroke-width="3"/>';
case 'snow':return '<g stroke="#e9f8ff" stroke-width="4"><path d="M177 28v104M125 80h104M141 44l74 73m0-73-74 73"/></g>';
case 'fox':return '<path d="M64 52L36 0l53 31M154 51l30-51-58 32" fill="#e8e3ff" stroke="#bea1f6" stroke-width="4"/><path d="M179 132q43-54 48-14-2 51-54 58" fill="#ece1ff" opacity=".72"/>';
case 'whale':return '<path d="M121 43q42-40 90-7l20-23-2 34-19 13q-46 34-89-17" fill="#a4e9ef" stroke="#d4ffff" stroke-width="3"/><circle cx="185" cy="39" r="3" fill="#305b73"/>';
case 'music':return '<path d="M165 108q-28-12-30 19 7 32 31 24 26 15 36-17 3-28-32-29z" fill="#a2c6f7" stroke="#e9f9ff" stroke-width="4"/><path d="M125 103l91 47M134 91l75 73" stroke="#eaf8ff" stroke-width="3"/>';
default:return '';
}}
function portrait(id){
const p=specs[id]||specs.s1;
const a=p[0],dark=p[1],gold=p[2],type=p[3],uid='p'+id;
return '<svg class="zy-portrait" viewBox="0 0 230 300" role="img" aria-label="'+p[4]+'角色立绘" xmlns="http://www.w3.org/2000/svg">'+
'<defs><radialGradient id="'+uid+'-bg"><stop stop-color="'+a+'" stop-opacity=".56"/><stop offset="1" stop-color="'+dark+'"/></radialGradient>'+
'<linearGradient id="'+uid+'-robe" x1="0" y1="0" x2="1" y2="1"><stop stop-color="'+a+'"/><stop offset=".55" stop-color="'+dark+'"/><stop offset="1" stop-color="#11152f"/></linearGradient>'+
'<linearGradient id="'+uid+'-skin"><stop stop-color="#ffe4d1"/><stop offset=".57" stop-color="#ecd0bb"/><stop offset="1" stop-color="#cf9e91"/></linearGradient>'+
'<linearGradient id="'+uid+'-hair"><stop stop-color="'+(type==='fox'||type==='snow'||type==='music'?'#faf6ff':'#22213c')+'"/><stop offset="1" stop-color="'+(type==='fox'||type==='snow'||type==='music'?'#9b95bd':'#080e27')+'"/></linearGradient></defs>'+
'<rect width="230" height="300" fill="url(#'+uid+'-bg)"/>'+
'<circle cx="160" cy="62" r="62" fill="#f9e3ba" opacity=".25"/>'+
'<circle cx="157" cy="60" r="47" fill="#fffae2" opacity=".15"/>'+
'<path d="M-10 178Q30 139 64 158T130 148T245 172V300H-10Z" fill="#07152b" opacity=".48"/>'+
'<path d="M6 180h214v7H6zm34-40 74-47 76 47-16 3-60-32-60 32zm17 42h9v55h-9zm105 0h9v55h-9z" fill="#ead6bd" opacity=".12"/>'+
'<circle cx="114" cy="126" r="92" fill="none" stroke="'+gold+'" stroke-opacity=".21" stroke-width="1.5" stroke-dasharray="5 9"/>'+
'<path d="M49 300Q37 250 38 199Q40 160 78 151L99 136H138L158 152Q207 169 202 230L216 300Z" fill="url(#'+uid+'-robe)" stroke="'+gold+'" stroke-opacity=".7" stroke-width="2.5"/>'+
'<path d="M40 176Q11 204 8 300h74l-24-103" fill="'+dark+'" stroke="'+gold+'" stroke-opacity=".36" stroke-width="2"/>'+
'<path d="M186 174q39 37 39 126h-75l21-98" fill="'+dark+'" stroke="'+gold+'" stroke-opacity=".3" stroke-width="2"/>'+
'<path d="M101 148l14 28 20-29 19 17-22 56-33-3-23-57z" fill="'+gold+'" opacity=".83"/>'+
'<path d="M109 140v30h20v-30z" fill="#dab8a0"/>'+
'<path d="M72 139q-16-77 34-104 45-26 72 49l-5 102-30-46H85L75 181Z" fill="url(#'+uid+'-hair)" stroke="'+gold+'" stroke-opacity=".38" stroke-width="2"/>'+
'<ellipse cx="116" cy="101" rx="38" ry="51" fill="url(#'+uid+'-skin)" stroke="#ffe8cf" stroke-opacity=".43"/>'+
'<path d="M79 92q-11-62 36-62 55 2 47 62l-15-19-11-17q-22 21-57 36" fill="url(#'+uid+'-hair)"/>'+
'<path d="M82 101l18-4M130 96l17 4" stroke="#47353b" stroke-width="2.7" stroke-linecap="round"/>'+
'<path d="M84 103q8-4 18 0M127 103q10-4 18 0" stroke="#201e31" stroke-width="2.8" stroke-linecap="round"/>'+
'<circle cx="93" cy="102" r="2.5" fill="#bc986b"/><circle cx="135" cy="102" r="2.5" fill="#bc986b"/>'+
'<path d="M114 108q-3 13-1 16l6 0" fill="none" stroke="#a97870" stroke-width="1.3"/>'+
'<path d="M105 132q11 4 19-1" fill="none" stroke="#b16976" stroke-width="2" stroke-linecap="round"/>'+
'<path d="M73 75q18-49 47-46 35 0 44 36-14-23-38-13-26-6-53 23" fill="url(#'+uid+'-hair)"/>'+
'<path d="M66 159q-22 40-27 99M165 164q18 33 29 95" stroke="'+gold+'" stroke-width="2" stroke-opacity=".66" fill="none"/>'+
'<path d="M92 212l23 25 23-27M106 248l9 10 10-10" fill="none" stroke="'+gold+'" stroke-opacity=".66" stroke-width="2"/>'+
'<path d="M63 282L112 222l48 60M93 282l20-39 26 39" fill="none" stroke="'+gold+'" stroke-opacity=".27" stroke-width="2"/>'+
'<circle cx="111" cy="181" r="7" fill="'+gold+'"/><circle cx="111" cy="181" r="3" fill="#fff8d7"/>'+
special(type,gold)+
'<g fill="'+gold+'" opacity=".85"><circle cx="29" cy="38" r="2.4"/><circle cx="210" cy="88" r="2"/><circle cx="13" cy="113" r="1.7"/><circle cx="193" cy="38" r="1.7"/></g>'+
'<path d="M17 77l6 14-6 14-6-14zm183 124 5 10-5 10-5-10z" fill="'+gold+'" opacity=".7"/>'+
'</svg>';
}
function monster(seed){
const horns=seed%2===0;
return '<svg class="zy-portrait zy-monster" viewBox="0 0 230 300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">'+
'<defs><radialGradient id="zy-enemy-fog"><stop stop-color="#e26d80"/><stop offset="1" stop-color="#252040"/></radialGradient></defs>'+
'<rect width="230" height="300" fill="url(#zy-enemy-fog)" opacity=".5"/>'+
'<circle cx="116" cy="118" r="88" fill="#f8b7b9" opacity=".12"/>'+
'<path d="M38 300q-15-135 74-173 89 28 78 173z" fill="#522b4b" stroke="#d4868a" stroke-width="3"/>'+
(horns?'<path d="M73 100 60 25l55 60 55-60-12 80" fill="#8e4a65" stroke="#ffc3ad" stroke-width="3"/>':'<path d="M67 108q-13-78 48-91 62 16 50 90" fill="#71446b"/>')+
'<ellipse cx="116" cy="132" rx="62" ry="78" fill="#b36b79" stroke="#eb9fa2" stroke-width="3"/>'+
'<path d="M72 124q20-17 39 3M119 128q20-20 42-4" fill="none" stroke="#fff3a6" stroke-width="7" stroke-linecap="round"/>'+
'<circle cx="91" cy="124" r="6" fill="#4c1b40"/><circle cx="143" cy="124" r="6" fill="#4c1b40"/>'+
'<path d="M104 169l12 14 12-14M84 203q34 26 66 0" stroke="#f8d7cd" stroke-width="3" fill="none"/>'+
'<path d="M45 246q60 30 143 0" stroke="#e4ac89" stroke-width="4" opacity=".7" fill="none"/>'+
'<g fill="#f8e0c7" opacity=".65"><circle cx="28" cy="66" r="3"/><circle cx="193" cy="78" r="2"/><circle cx="36" cy="214" r="4"/></g>'+
'</svg>';
}
window.ZYArt={portrait,monster,ids:Object.keys(specs)};
})();
