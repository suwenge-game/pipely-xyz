(function(){
'use strict';
const D={黄:'yellow',绿:'green',蓝:'blue',紫:'purple'};
const p=(id,groups)=>({id,groups:groups.map(x=>({name:x[0],difficulty:x[1],words:x.slice(2)})),words:groups.flatMap(x=>x.slice(2))});
const PUZZLES=[
p(1,[["带‘春’的成语","黄","春风得意","春暖花开","春华秋实","春色满园"],["厨房调味料","绿","花椒","八角","香叶","孜然"],["既是姓也是颜色","蓝","白","黄","蓝","朱"],["可接‘机’组成词","紫","司","飞","危","耳"]]),
p(2,[["四种球类运动","黄","足球","篮球","排球","网球"],["以‘画’开头的词","绿","画家","画布","画笔","画展"],["可形容声音","蓝","清脆","低沉","沙哑","洪亮"],["与‘鱼’同音结尾","紫","多余","结余","富裕","治愈"]]),
p(3,[["十二生肖动物","黄","鼠","牛","虎","兔"],["常见云形","绿","卷云","积云","层云","雨云"],["‘打’字开头的动作","蓝","打量","打听","打扮","打磨"],["可接‘门’组成词","紫","入","掌","冷","窍"]]),
p(4,[["文房四宝","黄","笔","墨","纸","砚"],["咖啡做法","绿","拿铁","摩卡","美式","浓缩"],["含数字的成语","蓝","一诺千金","三心二意","五湖四海","七上八下"],["可接‘光’组成词","紫","月","眼","耳","时"]]),
p(5,[["中国传统节日","黄","春节","元宵","端午","中秋"],["雨的强度","绿","毛毛雨","小雨","中雨","暴雨"],["表示观看","蓝","瞧","瞥","盯","望"],["与‘事’同音的字","紫","市","室","式","试"]]),
p(6,[["常见乐器","黄","钢琴","小提琴","长笛","鼓"],["带‘心’的成语","绿","心平气和","心直口快","心满意足","心照不宣"],["可以‘开’的东西","蓝","花","门","会","车"],["可接‘手’组成词","紫","歌","对","新","留"]]),
p(7,[["东南西北","黄","东","南","西","北"],["面食","绿","馒头","面条","饺子","包子"],["形容速度快","蓝","迅速","飞快","敏捷","疾驰"],["可接‘板’组成词","紫","黑","地","滑","样"]]),
p(8,[["四季","黄","春","夏","秋","冬"],["电脑输入设备","绿","鼠标","键盘","触控板","麦克风"],["都有‘一’的成语","蓝","一帆风顺","一见如故","一鸣惊人","一鼓作气"],["与‘期’同音的字","紫","七","妻","漆","欺"]]),
p(9,[["水果","黄","苹果","香蕉","葡萄","西瓜"],["可装液体的容器","绿","瓶","杯","壶","桶"],["表示结束","蓝","收尾","落幕","终止","告终"],["可接‘点’组成词","紫","起","终","焦","甜"]]),
p(10,[["天气现象","黄","风","雨","雪","雾"],["常见棋类","绿","围棋","象棋","跳棋","军棋"],["含反义词的成语","蓝","大同小异","出生入死","左顾右盼","前因后果"],["可接‘面’组成词","紫","封","水","桌","体"]]),
p(11,[["鸟类","黄","麻雀","燕子","喜鹊","海鸥"],["纸张用途","绿","书写","绘画","包装","折叠"],["‘白’可表示的含义","蓝","颜色","空白","清楚","免费"],["与‘路’同音的字","紫","鹿","露","录","陆"]]),
p(12,[["人体感官","黄","视觉","听觉","嗅觉","味觉"],["带‘海’的成语","绿","海阔天空","海纳百川","沧海一粟","四海为家"],["可以‘上’的地方","蓝","山","楼","岸","台"],["可接‘子’组成词","紫","棋","面","日","原"]]),
p(13,[["花卉","黄","牡丹","茉莉","菊花","荷花"],["书籍部分","绿","封面","目录","正文","封底"],["表示安静","蓝","寂静","宁静","幽静","沉静"],["可接‘头’组成词","紫","木","念","码","甜"]]),
p(14,[["交通工具","黄","火车","轮船","飞机","地铁"],["烹饪方式","绿","煎","炒","蒸","烤"],["以‘风’结尾的词","蓝","作风","学风","家风","台风"],["与‘才’同音的字","紫","材","财","裁","柴"]]),
p(15,[["学习用品","黄","铅笔","橡皮","尺子","本子"],["常见树木","绿","松树","柳树","梧桐","银杏"],["‘红’的引申义","蓝","走红","分红","红利","红人"],["可接‘心’组成词","紫","中","放","决","圆"]]),
p(16,[["江河湖海","黄","江","河","湖","海"],["茶类","绿","绿茶","红茶","乌龙茶","白茶"],["带动物的成语","蓝","画蛇添足","守株待兔","亡羊补牢","闻鸡起舞"],["可接‘线’组成词","紫","视","光","前","底"]]),
p(17,[["家庭成员","黄","爷爷","奶奶","爸爸","妈妈"],["颜色","绿","橙","青","紫","灰"],["都能形容味道","蓝","甘","酸","苦","辣"],["与‘功’同音的字","紫","工","公","弓","宫"]]),
p(18,[["昆虫","黄","蝴蝶","蜜蜂","蜻蜓","蚂蚁"],["时间单位","绿","秒","分","时","日"],["以‘手’开头的词","蓝","手艺","手稿","手势","手册"],["可接‘场’组成词","紫","市","磁","球","考"]]),
p(19,[["早餐食物","黄","鸡蛋","豆浆","油条","粥"],["山的地貌","绿","山峰","山谷","山脊","山坡"],["表示聪明","蓝","机灵","睿智","聪慧","敏锐"],["可接‘球’组成词","紫","台","地","眼","月"]]),
p(20,[["水上活动","黄","游泳","冲浪","划船","潜水"],["中国画题材","绿","山水","花鸟","人物","走兽"],["含‘然’的词","蓝","果然","忽然","居然","竟然"],["与‘镜’同音近音","紫","静","净","境","敬"]]),
p(21,[["蔬菜","黄","白菜","萝卜","番茄","黄瓜"],["舞台角色","绿","主角","配角","替身","群演"],["可被‘打’的对象","蓝","电话","招呼","球","折扣"],["可接‘台’组成词","紫","阳","电","讲","前"]]),
p(22,[["服装","黄","衬衫","外套","长裤","裙子"],["海边景物","绿","沙滩","贝壳","礁石","浪花"],["带‘马’的成语","蓝","马到成功","一马当先","走马观花","青梅竹马"],["与‘象’同音的字","紫","像","向","项","相"]]),
p(23,[["口味","黄","酸","甜","苦","咸"],["常见金属","绿","铁","铜","铝","锡"],["可表示第一","蓝","首","冠","甲","头"],["可接‘车’组成词","紫","火","风","水","板"]]),
p(24,[["校园地点","黄","教室","操场","食堂","图书馆"],["书法字体","绿","楷书","隶书","行书","草书"],["带‘月’的成语","蓝","花好月圆","日新月异","披星戴月","镜花水月"],["与‘篮’同音近音","紫","蓝","兰","栏","拦"]]),
p(25,[["宠物","黄","猫","狗","兔子","金鱼"],["常用量词","绿","本","张","枚","束"],["表示走路","蓝","漫步","踱步","疾走","跋涉"],["可接‘房’组成词","紫","书","厨","票","心"]]),
p(26,[["圆形物体","黄","硬币","车轮","光盘","月饼"],["戏曲行当","绿","生","旦","净","丑"],["以‘老’开头的称呼","蓝","老师","老板","老乡","老友"],["可接‘家’组成词","紫","画","作","行","专"]]),
p(27,[["四大名著简称","黄","红楼","西游","水浒","三国"],["运动场地","绿","泳池","跑道","球场","拳台"],["形容颜色浅","蓝","淡","素","嫩","粉"],["与‘道’同音近音","紫","到","倒","稻","盗"]]),
p(28,[["甜点","黄","蛋糕","布丁","曲奇","冰淇淋"],["摄影用语","绿","光圈","快门","焦距","曝光"],["可接‘气’组成词","蓝","天","力","勇","语"],["含‘门’的抽象词","紫","窍门","门路","热门","冷门"]]),
p(29,[["房间","黄","客厅","卧室","厨房","书房"],["水的状态","绿","冰","水","水汽","霜"],["表示同意","蓝","赞成","认可","应允","附和"],["可接‘报’组成词","紫","海","电","回","预"]]),
p(30,[["音乐速度术语","黄","慢板","行板","快板","急板"],["常见宝石","绿","钻石","翡翠","玛瑙","水晶"],["带‘高’的成语","蓝","高瞻远瞩","高朋满座","高枕无忧","高山流水"],["与‘石’同音的字","紫","时","十","食","实"]]),
p(31,[["办公用品","黄","订书机","文件夹","回形针","便签"],["表示开始","绿","启程","开幕","动工","起步"],["可接‘海’组成地名","蓝","上","青","珠","威"],["与‘启’同音近音","紫","起","企","岂","绮"]]),
p(32,[["夜空所见","黄","月亮","星星","流星","银河"],["四种香气","绿","花香","果香","木香","茶香"],["带‘手’的成语","蓝","手到擒来","妙手回春","爱不释手","眼高手低"],["可接‘卡’组成词","紫","打","关","门","声"]]),
p(33,[["旅行用品","黄","行李箱","地图","护照","相机"],["常见鱼类","绿","鲤鱼","鲫鱼","带鱼","鳕鱼"],["表示很多","蓝","众多","无数","繁多","海量"],["与‘游’同音的字","紫","油","邮","由","尤"]]),
p(34,[["四种笔","黄","铅笔","钢笔","毛笔","粉笔"],["气象测量","绿","温度","湿度","气压","风速"],["可接‘盘’组成词","蓝","键","算","光","沙"],["含‘开’但非打开","紫","开朗","开支","开胃","开窍"]]),
p(35,[["常见早餐饮品","黄","牛奶","豆浆","咖啡","果汁"],["几何图形","绿","圆形","三角形","正方形","梯形"],["表示害怕","蓝","恐惧","胆怯","惊慌","畏缩"],["可接‘音’组成词","紫","口","录","回","福"]]),
p(36,[["春天景象","黄","燕归","花开","草绿","冰融"],["门的部件","绿","门框","门锁","门把","门铃"],["含‘云’的成语","蓝","云淡风轻","壮志凌云","过眼云烟","风起云涌"],["与‘花’近音的字","紫","华","划","滑","哗"]]),
p(37,[["陆地动物","黄","大象","长颈鹿","斑马","犀牛"],["织物","绿","棉","麻","丝","绒"],["‘冷’可形容","蓝","天气","态度","颜色","笑话"],["可接‘记’组成词","紫","日","游","笔","书"]]),
p(38,[["常见汤类","黄","鸡汤","鱼汤","酸辣汤","紫菜汤"],["地图方向","绿","上北","下南","左西","右东"],["带‘石’的成语","蓝","水落石出","滴水穿石","一石二鸟","点石成金"],["可接‘花’组成词","紫","雪","火","眼","浪"]]),
p(39,[["球场位置","黄","前锋","中锋","后卫","门将"],["木工工具","绿","锯","刨","凿","锤"],["表示仔细看","蓝","端详","审视","打量","凝视"],["与‘锋’同音的字","紫","风","封","峰","丰"]]),
p(40,[["四种桥","黄","拱桥","吊桥","浮桥","立交桥"],["常见电器","绿","冰箱","空调","洗衣机","电视"],["带‘水’的成语","蓝","水到渠成","水滴石穿","水深火热","水落石出"],["可接‘龙’组成词","紫","水","火","车","恐"]]),
p(41,[["发光物","黄","太阳","灯泡","蜡烛","萤火虫"],["语文标点","绿","逗号","句号","问号","冒号"],["‘长’的不同读法含义","蓝","长度","长大","校长","擅长"],["可接‘台’的设备","紫","电","机","灯","灶"]]),
p(42,[["四种船","黄","帆船","渔船","货船","游轮"],["制作陶器步骤","绿","揉泥","拉坯","晾干","烧制"],["含‘金’的成语","蓝","金玉良言","金枝玉叶","一诺千金","点石成金"],["与‘舟’同音近音","紫","周","州","粥","洲"]]),
p(43,[["自然声音","黄","雷声","雨声","风声","涛声"],["舞蹈类型","绿","芭蕾","街舞","国标舞","现代舞"],["可接‘清’组成词","蓝","看","澄","肃","冷"],["‘跑’的不同搭配","紫","跑题","跑腿","跑单","跑调"]]),
p(44,[["四种门票","黄","电影票","车票","船票","景区票"],["中药材","绿","枸杞","当归","甘草","陈皮"],["带‘木’的成语","蓝","木已成舟","缘木求鱼","入木三分","呆若木鸡"],["可接‘皮’组成词","紫","果","头","调","顽"]]),
p(45,[["冬季物品","黄","围巾","手套","棉帽","暖炉"],["汉字结构","绿","左右","上下","包围","独体"],["表示突然","蓝","猛然","骤然","蓦然","倏然"],["与‘暖’近音的字","紫","软","卵","乱","栾"]]),
p(46,[["四种面包","黄","吐司","法棍","贝果","可颂"],["电话相关动作","绿","拨号","接听","挂断","回拨"],["带‘口’的成语","蓝","口若悬河","口是心非","口耳相传","异口同声"],["可接‘包’组成词","紫","书","荷","面","沙"]]),
p(47,[["森林中的事物","黄","树木","苔藓","溪流","松果"],["常见证件","绿","身份证","学生证","驾驶证","工作证"],["‘亮’可形容","蓝","光线","嗓音","眼睛","观点"],["与‘溪’同音近音","紫","西","希","吸","惜"]]),
p(48,[["四种灯","黄","台灯","路灯","吊灯","壁灯"],["面部表情","绿","微笑","皱眉","眨眼","撇嘴"],["带‘火’的成语","蓝","火上浇油","火树银花","炉火纯青","星火燎原"],["可接‘星’组成词","紫","明","救","行","童"]]),
p(49,[["常见早餐主食","黄","面包","馒头","煎饼","饭团"],["水彩画材料","绿","颜料","画纸","水桶","画笔"],["表示熟练","蓝","娴熟","老练","纯熟","精通"],["可接‘团’组成词","紫","集","社","饭","谜"]]),
p(50,[["植物的部分","黄","根","茎","叶","花"],["四种风","绿","微风","季风","海风","山风"],["含‘生’的成语","蓝","生龙活虎","生机勃勃","熟能生巧","乐极生悲"],["与‘叶’同音近音","紫","夜","业","页","液"]]),
p(51,[["四种钟","黄","闹钟","挂钟","座钟","摆钟"],["阅读动作","绿","浏览","朗读","默读","精读"],["可接‘白’组成词","蓝","明","空","雪","坦"],["‘落’的不同搭配","紫","落选","落脚","落款","落幕"]]),
p(52,[["雨具","黄","雨伞","雨衣","雨靴","斗笠"],["四种香料","绿","肉桂","丁香","豆蔻","胡椒"],["带‘天’的成语","蓝","天马行空","天长地久","天花乱坠","天衣无缝"],["可接‘鼓’组成词","紫","腰","战","锣","拨"]])
];
function hashSeed(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function dateKey(offset=0){const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+offset);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function seededShuffle(arr,seed){const out=[...arr],rand=mulberry32(hashSeed(seed));for(let i=out.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out}
function dailyIndex(key=dateKey()){return hashSeed(`word-links:${key}`)%PUZZLES.length}
let state={mode:'daily',puzzle:null,remaining:[],selected:new Set(),solved:[],mistakes:0,started:0,finished:false};
const $=id=>document.getElementById(id);
function storageKey(){return `wordlinks:${state.mode}:${state.puzzle.id}:${state.mode==='daily'?dateKey():'practice'}`}
function pick(mode){if(mode==='daily')return PUZZLES[dailyIndex()];let i=Math.floor(Math.random()*PUZZLES.length);if(state.puzzle&&PUZZLES[i].id===state.puzzle.id)i=(i+1)%PUZZLES.length;return PUZZLES[i]}
function start(mode='daily',forced){state={mode,puzzle:forced||pick(mode),remaining:[],selected:new Set(),solved:[],mistakes:0,started:Date.now(),finished:false};state.remaining=seededShuffle(state.puzzle.words,`${state.puzzle.id}:${mode==='daily'?dateKey():Date.now()}`);if(mode==='daily')restore();render()}
function save(){if(state.mode!=='daily')return;localStorage.setItem(storageKey(),JSON.stringify({remaining:state.remaining,solved:state.solved,mistakes:state.mistakes,started:state.started,finished:state.finished}))}
function restore(){try{const x=JSON.parse(localStorage.getItem(storageKey()));if(x&&Array.isArray(x.remaining)){state.remaining=x.remaining;state.solved=x.solved||[];state.mistakes=x.mistakes||0;state.started=x.started||Date.now();state.finished=!!x.finished}}catch(e){localStorage.removeItem(storageKey())}}
function render(){const root=$('connections-game');if(!root)return;root.innerHTML=`<div class="game-head"><div><h2>${state.mode==='daily'?'今日词组':'随机练习'}</h2><p>${state.mode==='daily'?dateKey():`题库 #${state.puzzle.id}`}</p></div><div class="mode-switch" role="group" aria-label="游戏模式"><button data-mode="daily" class="${state.mode==='daily'?'active':''}">每日</button><button data-mode="practice" class="${state.mode==='practice'?'active':''}">练习</button></div></div><div class="status-row"><div class="mistakes">错误机会 ${[0,1,2,3].map(i=>`<i class="mistake-dot ${i<state.mistakes?'used':''}"></i>`).join('')}</div><div id="game-message" class="message" aria-live="polite"></div></div><div class="groups">${state.solved.map(g=>groupHTML(g)).join('')}</div><div class="word-grid">${state.remaining.map(w=>`<button class="word ${state.selected.has(w)?'selected':''}" data-word="${w}" aria-pressed="${state.selected.has(w)}">${w}</button>`).join('')}</div><div class="controls"><button class="control" data-action="shuffle" ${state.finished?'disabled':''}>洗牌</button><button class="control" data-action="clear" ${state.selected.size?'':'disabled'}>清除</button><button class="control primary" data-action="submit" ${state.selected.size===4&&!state.finished?'':'disabled'}>提交分组</button></div>${state.finished?resultHTML():''}`;bind()}
function groupHTML(g){return `<div class="solved-group tier-${D[g.difficulty]}"><strong>${g.difficulty} · ${g.name}</strong><span>${g.words.join('、')}</span></div>`}
function resultHTML(){const win=state.solved.length===4&&state.mistakes<4;return `<div class="result"><h3>${win?grade(state.mistakes):'本轮结束'}</h3><p>${win?`你用 ${state.mistakes} 次错误完成了全部分组。`:'四次机会已用完，答案已经揭晓。'}</p><div class="share-grid">${state.puzzle.groups.map(g=>D[g.difficulty][0].toUpperCase()).join(' ')}</div>${state.mode==='practice'?'<button class="control primary" data-action="new">再来一题</button>':''}</div>`}
function grade(m){return m===0?'完美分组':m===1?'优秀表现':'顺利通过'}
function bind(){document.querySelectorAll('[data-word]').forEach(b=>b.addEventListener('click',()=>toggle(b.dataset.word)));document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>start(b.dataset.mode)));document.querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',()=>action(b.dataset.action)))}
function toggle(word){if(state.finished)return;if(state.selected.has(word))state.selected.delete(word);else if(state.selected.size<4)state.selected.add(word);render()}
function action(a){if(a==='clear'){state.selected.clear();render()}else if(a==='shuffle'){state.remaining=seededShuffle(state.remaining,`${Date.now()}:${state.mistakes}`);state.selected.clear();render()}else if(a==='submit')submit();else if(a==='new')start('practice')}
function submit(){if(state.selected.size!==4)return false;const chosen=[...state.selected];const group=state.puzzle.groups.find(g=>g.words.every(w=>state.selected.has(w)));if(group){state.solved.push(group);state.remaining=state.remaining.filter(w=>!state.selected.has(w));state.selected.clear();if(state.solved.length===4){state.finished=true;recordScore()}save();render();return true}state.mistakes++;state.selected.clear();if(state.mistakes>=4){state.finished=true;state.puzzle.groups.filter(g=>!state.solved.some(s=>s.name===g.name)).forEach(g=>state.solved.push(g));state.remaining=[]}save();render();const msg=$('game-message');if(msg)msg.textContent=state.finished?'答案已揭晓':'不是一组，再想想';return false}
function recordScore(){const key='wordlinks:scores';let scores=[];try{scores=JSON.parse(localStorage.getItem(key))||[]}catch(e){}scores.push({puzzle:state.puzzle.id,mode:state.mode,mistakes:state.mistakes,seconds:Math.round((Date.now()-state.started)/1000),date:dateKey()});scores.sort((a,b)=>a.mistakes-b.mistakes||a.seconds-b.seconds);localStorage.setItem(key,JSON.stringify(scores.slice(0,10)))}
function yesterdayAnswer(){const puzzle=PUZZLES[dailyIndex(dateKey(-1))];return {date:dateKey(-1),groups:puzzle.groups}}
window.WordLinks={puzzles:PUZZLES,dailyIndex,dateKey,yesterdayAnswer,start};
window.__test={puzzleCount:PUZZLES.length,validatePuzzle(x){return x.words.length===16&&new Set(x.words).size===16&&x.groups.length===4&&x.groups.every(g=>g.words.length===4&&D[g.difficulty])},solveCurrent(){if(!state.puzzle)return false;state.solved=[...state.puzzle.groups];state.remaining=[];state.mistakes=0;state.finished=true;render();return true},getState(){return {...state,selected:[...state.selected]}}};
document.addEventListener('DOMContentLoaded',()=>{if($('connections-game'))start(document.body.dataset.mode||'daily');const y=$('yesterday-answer');if(y){const data=yesterdayAnswer();y.innerHTML=`<summary>查看 ${data.date} 答案</summary>${data.groups.map(groupHTML).join('')}`}});
})();
