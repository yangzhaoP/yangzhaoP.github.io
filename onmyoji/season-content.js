(function(){
'use strict';
const sets=[
{id:'flame',name:'赤焰',icon:'🔥',color:'#e99075',two:'攻击 +10',four:'攻击再 +16'},
{id:'bloom',name:'桃源',icon:'🌸',color:'#e89ac5',two:'生命 +55',four:'生命再 +95'},
{id:'rock',name:'山岳',icon:'🛡️',color:'#d8c17f',two:'防御 +9',four:'防御再 +18'},
{id:'storm',name:'疾风',icon:'🍃',color:'#8fe6cc',two:'速度 +6',four:'速度再 +9'}
];
const chapters=[
{stage:1,title:'第一章 · 月落神社',subtitle:'一封来自彼岸的灵契',text:'初秋的黄昏，周渝在旧神社前拾到一枚发光的符咒。纸上写着：“当月光照亮山门，百鬼将再临人间。”竹影武士从竹林中现身，说：“若想守住此地，请与我们同行。”',reward:'在妖境中获得第一场胜利，解锁第二章。'},
{stage:2,title:'第二章 · 桃花的约定',subtitle:'花落之前，必须找到失落的灵石',text:'花瓣逆风而起，桃花灵轻轻推开神社的木门。门后并非庭院，而是通往妖境的长阶。她将暖光放进周渝掌心：“哪怕前方尽是妖气，记得还有人与你并肩。”',reward:'探索至第 5 关，开启首领挑战。'},
{stage:5,title:'第三章 · 百鬼的低语',subtitle:'夜鸦盘旋，古老的封印正在裂开',text:'第三道鸟居上，古老的符文一一熄灭。蜃海游侠从雾中归来，带回了不祥的消息：妖境首领正在收集四方灵力。只有不同属性的式灵相互配合，才有机会阻止它。',reward:'通关第 10 关，解锁下一篇绘卷。'},
{stage:10,title:'第四章 · 幻月狐影',subtitle:'九重幻境里的真相',text:'银白色的狐尾在月光下舒展，千面狐抬手揭下一张面具。“妖怪并非天生为恶，真正危险的，是被遗忘的约定。”周渝看见一片更广阔的天空，故事远未结束。',reward:'继续收集式灵，挑战更高层妖境。'},
{stage:20,title:'第五章 · 星海回响',subtitle:'风雪之后，星光终将归来',text:'星鲸载着众人渡过星海，霜弦姬的琴声穿透云层。周渝终于明白，灵契不是掌控式灵的力量，而是相互守护的誓约。新的远征，就从此刻开始。',reward:'前往高阶妖境，继续守护百鬼世界。'}
];
const achievements=[
{id:'hello',title:'初入妖境',desc:'赢得第一场战斗',kind:'wins',goal:1,jade:120,coins:100},
{id:'explorer',title:'千山独行',desc:'累计赢得 5 场战斗',kind:'wins',goal:5,jade:240,coins:280},
{id:'hero',title:'百鬼降伏',desc:'累计赢得 20 场战斗',kind:'wins',goal:20,jade:650,coins:850},
{id:'collect',title:'唤灵初试',desc:'完成 10 次召唤',kind:'pulls',goal:10,jade:160,coins:180},
{id:'fortune',title:'百卷灵契',desc:'累计召唤 30 次',kind:'pulls',goal:30,jade:350,coins:350},
{id:'level',title:'境界突破',desc:'任一式灵提升至 10 级',kind:'level',goal:10,jade:260,coins:250},
{id:'trial',title:'妖境开拓',desc:'通关第 5 关',kind:'stage',goal:6,jade:400,coins:500},
{id:'master',title:'阴阳之主',desc:'通关第 15 关',kind:'stage',goal:16,jade:850,coins:1200}
];
const kinds=['hp','atk','def','spd','crit'];
const nameStat={hp:'生命',atk:'攻击',def:'防御',spd:'速度',crit:'暴击'};
function makeSoul(id,slot,setId,stage=1){
const kind=(slot===1?'hp':slot===2?'atk':slot===3?'def':kinds[Math.floor(Math.random()*kinds.length)]);
const roll=Math.max(1,Math.min(12,Math.floor(stage/4)+1));
const base=kind==='hp'?34+roll*15:kind==='atk'?6+roll*3:kind==='def'?4+roll*2:kind==='spd'?2+Math.ceil(roll/2):2+Math.ceil(roll/2);
return {id:String(id),slot:slot,set:setId,kind:kind,base:base,level:0};
}
function startingSouls(){
return [
makeSoul(1,1,'bloom',1),makeSoul(2,2,'flame',1),makeSoul(3,3,'rock',1),makeSoul(4,4,'flame',1),makeSoul(5,5,'bloom',1),makeSoul(6,6,'storm',1),
makeSoul(7,1,'flame',1),makeSoul(8,2,'bloom',1),makeSoul(9,4,'rock',1),makeSoul(10,5,'flame',1)
];
}
function normalize(g){
if(!g||typeof g!=='object')return null;
const id=String(g.id),slot=Math.floor(Number(g.slot)),set=String(g.set),kind=String(g.kind);
if(!/^[a-zA-Z0-9_-]{1,16}$/.test(id)||slot<1||slot>6||!sets.some(s=>s.id===set)||!nameStat[kind])return null;
return {id,slot,set,kind,base:Math.max(1,Math.min(1000,Math.floor(Number(g.base)||5))),level:Math.max(0,Math.min(12,Math.floor(Number(g.level)||0)))};
}
function number(gear){return gear.base+Math.round(gear.base*gear.level*.2)}
function benefits(data,id){
const equipped=data.soulEquip?.[id]||{},bag=data.soulBag||[];
const chosen=Object.values(equipped).map(gid=>bag.find(g=>g.id===gid)).filter(Boolean);
const stats={hp:0,atk:0,def:0,spd:0,crit:0};
const counts={};for(const g of chosen){stats[g.kind]+=number(g);counts[g.set]=(counts[g.set]||0)+1;}
if((counts.flame||0)>=2)stats.atk+=10;if((counts.flame||0)>=4)stats.atk+=16;
if((counts.bloom||0)>=2)stats.hp+=55;if((counts.bloom||0)>=4)stats.hp+=95;
if((counts.rock||0)>=2)stats.def+=9;if((counts.rock||0)>=4)stats.def+=18;
if((counts.storm||0)>=2)stats.spd+=6;if((counts.storm||0)>=4)stats.spd+=9;
return {stats,counts,count:chosen.length};
}
function progress(def,data){
if(def.kind==='level')return Math.max(1,...Object.values(data.owned||{}).map(x=>x.level||1));
if(def.kind==='stage')return data.maxStage||1;
return data[def.kind]||0;
}
window.ZYSeason={sets,chapters,achievements,makeSoul,startingSouls,normalize,number,benefits,progress,nameStat};
})();