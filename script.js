var $=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
var X={hi:" यह निदान नहीं है; अंतिम निर्णय आपके डॉक्टर का है।",kn:" ಇದು ರೋಗನಿರ್ಣಯವಲ್ಲ; ಅಂತಿಮ ನಿರ್ಧಾರ ನಿಮ್ಮ ವೈದ್ಯರದು."},V={en:"en-IN",hi:"hi-IN",kn:"kn-IN"};
var D={
lab:{n:"Blood test report",t:"Lab report",d:"12 Nov 2026",
vals:[["Haemoglobin",10.2,"g/dL",12,15.5],["Fasting glucose",118,"mg/dL",70,99],["Creatinine",0.8,"mg/dL",0.6,1.1],["Potassium",6.6,"mmol/L",3.5,5.1,6],["Vitamin B12",null,"","","",0]],
flags:["Potassium 6.6 mmol/L is far above the printed range (rule K-01, above 6.0). Contact your doctor or clinic today. If you have weakness, chest pain or a racing heartbeat, go to emergency care now."],
en:"Your haemoglobin is lower than the range printed on your report. Your fasting glucose is a little high. Your potassium is much higher than the range, so please contact your doctor today.",
more:" Low haemoglobin can have many causes, and only your doctor can tell which applies. A slightly high glucose is a reason to talk about repeat testing. This explains the report and is not a diagnosis.",
hi:"आपका हीमोग्लोबिन रिपोर्ट में दी गई सीमा से कम है। फास्टिंग ग्लूकोज़ थोड़ा ज़्यादा है। पोटैशियम सीमा से बहुत ज़्यादा है, इसलिए आज ही अपने डॉक्टर से संपर्क करें।",
kn:"ನಿಮ್ಮ ಹಿಮೋಗ್ಲೋಬಿನ್ ವರದಿಯಲ್ಲಿರುವ ಮಿತಿಗಿಂತ ಕಡಿಮೆ ಇದೆ. ಫಾಸ್ಟಿಂಗ್ ಗ್ಲೂಕೋಸ್ ಸ್ವಲ್ಪ ಹೆಚ್ಚಿದೆ. ಪೊಟ್ಯಾಸಿಯಂ ತುಂಬಾ ಹೆಚ್ಚಿದೆ, ಆದ್ದರಿಂದ ಇಂದೇ ನಿಮ್ಮ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
q:["What could be causing my low haemoglobin?","Do I need to repeat the glucose test?","Is my potassium result urgent, and should it be re-tested today?"]},
rx:{n:"Prescription from Dr. Rao",t:"Prescription",d:"10 Nov 2026",
meds:[{n:"Metformin 500 mg",i:"1 tablet twice a day after food",g:"Used to help control blood sugar. Taking it after food can reduce stomach upset.",p:"Tell your doctor about vomiting, severe diarrhoea or kidney problems.",t:["08:30","20:30"]},{n:"Iron and folic acid",i:"1 tablet once a day",g:"Used to raise iron levels. It can darken stools and cause constipation.",p:"Avoid taking it with tea or milk.",t:["14:00"]},{n:"Paracetamol 650 mg",i:"1 tablet only when needed for fever or pain",g:"Used for pain and fever.",p:"Do not combine with other products that contain paracetamol.",t:[]}],
flags:[],
en:"You have three medicines. Metformin is taken twice a day after food. Iron with folic acid is taken once a day. Paracetamol is only for fever or pain, when needed. Take them exactly as written.",
more:" The prescription is the final instruction. Do not change a dose or stop a medicine without asking your doctor or pharmacist.",
hi:"आपको तीन दवाइयाँ लिखी गई हैं। मेटफॉर्मिन खाने के बाद दिन में दो बार। आयरन-फोलिक एसिड दिन में एक बार। पैरासिटामोल केवल ज़रूरत पड़ने पर बुखार या दर्द के लिए। दवाइयाँ ठीक वैसे ही लें जैसा लिखा है।",
kn:"ನಿಮಗೆ ಮೂರು ಔಷಧಿಗಳನ್ನು ಬರೆಯಲಾಗಿದೆ. ಮೆಟ್‌ಫಾರ್ಮಿನ್ ಊಟದ ನಂತರ ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ. ಐರನ್-ಫೋಲಿಕ್ ಆಸಿಡ್ ದಿನಕ್ಕೆ ಒಂದು ಬಾರಿ. ಪ್ಯಾರಸಿಟಮಾಲ್ ಅಗತ್ಯವಿದ್ದಾಗ ಮಾತ್ರ. ಬರೆದಂತೆಯೇ ತೆಗೆದುಕೊಳ್ಳಿ.",
q:["Should I keep taking metformin if I have a stomach upset?","How long do I need the iron tablets?","Which other medicines should I avoid with paracetamol?"]},
dis:{n:"Discharge summary, City Hospital",t:"Discharge summary",d:"05 Nov 2026",
appt:["Dr. Rao follow-up","2026-11-20T10:30"],
flags:["The summary says to return to emergency care for chest pain, breathlessness or fever above 38°C (rule P-03, urgent wording). Do not wait for an app to confirm this."],
en:"The summary says you were treated for a chest infection and have been discharged. You have a follow-up with Dr. Rao on 20 November. Rest, finish your medicines, and go to emergency care for chest pain, trouble breathing or a high fever.",
more:" The summary also lists your discharge medicines. Check them against your prescription and ask if anything differs.",
hi:"सारांश के अनुसार आपका सीने के संक्रमण का इलाज हुआ और छुट्टी दी गई। 20 नवंबर को डॉ. राव से फॉलो-अप है। आराम करें, दवाइयाँ पूरी करें, और सीने में दर्द, साँस की तकलीफ़ या तेज़ बुखार हो तो तुरंत आपातकालीन सेवा में जाएँ।",
kn:"ಸಾರಾಂಶದ ಪ್ರಕಾರ ನಿಮಗೆ ಎದೆಯ ಸೋಂಕಿಗೆ ಚಿಕಿತ್ಸೆ ನೀಡಲಾಗಿದೆ. ನವೆಂಬರ್ 20 ರಂದು ಡಾ. ರಾವ್ ಅವರ ಫಾಲೋ-ಅಪ್ ಇದೆ. ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ, ಔಷಧಿ ಮುಗಿಸಿ, ಎದೆನೋವು, ಉಸಿರಾಟದ ತೊಂದರೆ ಅಥವಾ ತೀವ್ರ ಜ್ವರ ಇದ್ದರೆ ತಕ್ಷಣ ತುರ್ತು ಚಿಕಿತ್ಸೆಗೆ ಹೋಗಿ.",
q:["When can I return to normal activity?","Which symptoms mean I should come back sooner?","Do my discharge medicines match my regular ones?"]}};
var cur,lang="en",lvl="simple",saved={},hist=[{d:"02 Aug 2026",n:"Blood test report",t:"Lab report",f:0},{d:"14 May 2026",n:"Prescription from Dr. Rao",t:"Prescription",f:0}],rem=[],fam=[{n:"Anita (daughter)",r:"View documents",on:1}],aud=[],popup;
function esc(s){var e=document.createElement("div");e.textContent=s;return e.innerHTML}
function log(m){aud.unshift(new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+": "+m);drawF()}
function fmt(ms){return new Date(ms).toLocaleString([],{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}
function msg(t,bad){var m=$("#msg");m.textContent=t;m.className="msg"+(bad?" bad":"")}
$$(".tab").forEach(function(b){b.onclick=function(){$$(".tab").forEach(function(x){x.setAttribute("aria-selected",x===b)});["a","r","h","f"].forEach(function(i){$("#"+i).hidden=i!==b.dataset.t})}});
$("#big").onclick=function(){var on=this.getAttribute("aria-pressed")!=="true";this.setAttribute("aria-pressed",on);document.body.style.fontSize=on?"20px":""};
function st(v){if(v[1]===null)return["","Can’t interpret"];var x=v[1];if(v[5]&&x>v[5])return["crit","Needs urgent review"];return x<v[3]?["low","Low"]:x>v[4]?["high","High"]:["ok","Within range"]}
function show(k){cur=k;var d=D[k],h='<div class="grid"><div><div class="panel"><h2>'+d.n+'</h2><p class="src">'+d.t+', dated '+d.d+'. Accepted as a medical file.</p>';
d.flags.forEach(function(f){h+='<div class="alert" role="alert"><b>Red flag.</b> '+f+'</div>'});
if(!d.flags.length)h+='<p class="src">No red-flag rules matched. That does not mean nothing needs attention, so follow your doctor’s instructions.</p>';
if(d.vals){h+='<h3>Value status</h3>';d.vals.forEach(function(v){var s=st(v);h+='<div class="row"><span>'+v[0]+'</span><span>'+(v[1]===null?"—":v[1]+" "+v[2])+'</span><span class="rg src">'+(v[1]===null?"no range printed":v[3]+" to "+v[4])+'</span><span class="tag '+s[0]+'">'+s[1]+'</span></div>'});h+='<p class="src">Status uses the range printed on your report. Source: page 1, Results table.</p>'}
if(d.meds){h+='<h3>Medicine explainer</h3>';d.meds.forEach(function(m,i){h+='<div class="med"><b>'+m.n+'</b><br>Prescribed: '+m.i+'<br><span class="src">General information: '+m.g+' '+m.p+' Source: demo reference (a verified medicine database in the full product).</span><br>'+(m.t.length?'<button class="btn g s" data-med="'+i+'">Remind me at '+m.t.join(" and ")+'</button>':'<span class="src">As needed, so no schedule reminder.</span>')+'</div>'});h+='<p class="src">Your prescription is the final instruction. CureCheck never changes a dose.</p>'}
if(d.appt)h+='<h3>Follow-up</h3><p>Dr. Rao, 20 Nov 2026, 10:30</p><button class="btn g s" data-appt>Remind me 1 hour before</button>';
h+='</div></div><div><div class="panel"><h3>Explanation</h3><div class="ctl"><span class="src">Language</span><button class="chip" data-lang="en">English</button><button class="chip" data-lang="hi">हिन्दी</button><button class="chip" data-lang="kn">ಕನ್ನಡ</button></div><div class="ctl"><span class="src">Reading level</span><button class="chip" data-lvl="simple">Simple</button><button class="chip" data-lvl="detailed">Detailed</button></div><p class="expl" id="expl" aria-live="polite"></p><div class="ctl"><button class="btn s" data-play>Listen</button><button class="btn g s" data-stop>Stop</button></div><p class="src" id="tn"></p></div>';
h+='<div class="panel"><h3>Questions for your doctor</h3><ul style="padding-left:20px;margin:6px 0">'+d.q.map(function(q){return"<li>"+q+"</li>"}).join("")+'</ul></div><button class="btn" data-save>'+(saved[k]?"Saved to history":"Save to history")+'</button></div></div>';
$("#result").innerHTML=h;ctl();$("#result").scrollIntoView({block:"nearest"})}
function ctl(){var d=D[cur];$$("[data-lang]").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.lang===lang)});$$("[data-lvl]").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.lvl===lvl)});
$("#expl").textContent=d[lang]+(lvl==="detailed"?(lang==="en"?d.more:X[lang]):"");$("#expl").lang=lang}
$("#result").onclick=function(e){var b=e.target.closest("button");if(!b)return;var s=b.dataset,d=D[cur];
if(s.lang){lang=s.lang;ctl()}else if(s.lvl){lvl=s.lvl;ctl()}
else if(s.play!==undefined){var sy=window.speechSynthesis;if(!sy){$("#tn").textContent="Audio isn’t supported in this browser.";return}sy.cancel();var u=new SpeechSynthesisUtterance($("#expl").textContent);u.lang=V[lang];var v=sy.getVoices().filter(function(x){return x.lang.indexOf(lang)===0});if(v.length){u.voice=v[0];$("#tn").textContent=""}else $("#tn").textContent="No voice for this language is installed on your device, so a default voice is used.";sy.speak(u)}
else if(s.stop!==undefined){if(window.speechSynthesis)speechSynthesis.cancel()}
else if(s.save!==undefined&&!saved[cur]){saved[cur]=1;hist.unshift({d:"13 Nov 2026",n:d.n,t:d.t,f:d.flags.length});b.textContent="Saved to history";drawH();log("Saved "+d.n)}
else if(s.med!==undefined){var m=d.meds[s.med];m.t.forEach(function(t){addR({k:"Medicine",title:m.n,time:t})});b.textContent="Reminders added";}
else if(s.appt!==undefined){addR({k:"Appointment",title:d.appt[0],at:+new Date(d.appt[1])});b.textContent="Reminder added"}};
$("#file").onchange=function(){var f=this.files[0];if(!f)return;var n=f.name.toLowerCase();
if(!/\.(pdf|jpe?g|png)$/.test(n)){msg("“"+f.name+"” was not accepted. Only PDF, JPG or PNG medical files can be uploaded.",1);return}
var k=/prescri|rx|medicine/.test(n)?"rx":/discharge|summary/.test(n)?"dis":/lab|blood|report|test|cbc|pathology/.test(n)?"lab":0;
if(!k){msg("This doesn’t look like a medical document, so it wasn’t opened. CureCheck accepts lab reports, prescriptions and discharge summaries only. (This demo judges by file name; the full product checks the content.)",1);return}
msg("Accepted as a "+D[k].t.toLowerCase()+". This demo doesn’t read your file, so a sample explanation is shown.");log("Uploaded "+f.name);show(k)};
$$("[data-s]").forEach(function(b){b.onclick=function(){msg("Showing a sample "+D[b.dataset.s].t.toLowerCase()+".");show(b.dataset.s)}});
function nextOcc(t){var p=t.split(":"),d=new Date();d.setHours(+p[0],+p[1],0,0);if(d<=Date.now())d.setDate(d.getDate()+1);return +d}
function addR(o){if(rem.some(function(r){return r.k===o.k&&r.title.toLowerCase()===o.title.toLowerCase()&&r.time===o.time&&r.at===o.at}))return;
o.next=o.k==="Medicine"?nextOcc(o.time):o.at-36e5;rem.push(o);drawR();log("Reminder set: "+o.title)}
function drawR(){$("#rl").innerHTML=rem.length?rem.map(function(r,i){return'<li><span><span class="tag ok">'+r.k+'</span> '+esc(r.title)+', '+(r.k==="Medicine"?"daily at "+r.time:fmt(r.at))+(r.paused?" (paused)":"")+(r.done?" (done)":"")+'</span><span><button class="chip" data-p="'+i+'">'+(r.paused?"Resume":"Pause")+'</button> <button class="chip" data-x="'+i+'">Remove</button></span></li>'}).join(""):'<li class="src">No reminders yet.</li>'}
$("#rl").onclick=function(e){var s=e.target.dataset;if(s.p!==undefined)rem[s.p].paused=!rem[s.p].paused;if(s.x!==undefined)rem.splice(s.x,1);drawR()};
$("#fm").onsubmit=function(e){e.preventDefault();addR({k:"Medicine",title:$("#mn").value.trim(),time:$("#mt").value});$("#mn").value=""};
$("#fa").onsubmit=function(e){e.preventDefault();addR({k:"Appointment",title:$("#an").value.trim(),at:+new Date($("#at").value)});$("#an").value=""};
function pop(r){if(popup)return;popup=r;var med=r.k==="Medicine";$("#pt").textContent=med?"Time for your medicine":"Appointment coming up";$("#pp").textContent=med?r.title+" is due now ("+r.time+"). Take it exactly as your prescription says.":r.title+" is at "+fmt(r.at)+". Bring your documents and questions.";$("#p1").textContent=med?"Taken":"Got it";$("#pop").hidden=false;$("#p1").focus()}
function end(sn){var r=popup;$("#pop").hidden=true;popup=null;if(r.demo)return;if(sn)r.next=Date.now()+6e5;else if(r.k==="Medicine")r.next=nextOcc(r.time);else r.done=1;drawR()}
$("#p1").onclick=$("#p3").onclick=function(){end()};$("#p2").onclick=function(){end(1)};
$("#demo").onclick=function(){pop({k:"Medicine",title:"Metformin 500 mg",time:"08:30",demo:1})};
setInterval(function(){rem.forEach(function(r){if(!popup&&!r.paused&&!r.done&&r.next<=Date.now())pop(r)})},5000);
function drawH(){$("#hl").innerHTML=hist.map(function(h){return'<li><span><b>'+esc(h.n)+'</b><br><span class="src">'+h.t+', '+h.d+'</span></span>'+(h.f?'<span class="tag crit">'+h.f+' red flag</span>':'<span class="tag ok">No flags</span>')+'</li>'}).join("")}
function drawF(){$("#fl").innerHTML=fam.map(function(f,i){return'<li><span>'+esc(f.n)+'<br><span class="src">'+(f.on?f.r:"Access revoked")+'</span></span>'+(f.on?'<button class="chip" data-v="'+i+'">Revoke</button>':'')+'</li>'}).join("");$("#al").innerHTML=aud.length?aud.slice(0,8).map(function(a){return'<li class="src">'+esc(a)+'</li>'}).join(""):'<li class="src">No activity yet.</li>'}
$("#fl").onclick=function(e){var i=e.target.dataset.v;if(i!==undefined){fam[i].on=0;log("Revoked access for "+fam[i].n)}};
$("#ff").onsubmit=function(e){e.preventDefault();var n=$("#fn").value.trim();fam.push({n:n,r:$("#fr").value,on:1});$("#fn").value="";log("Invited "+n+": "+$("#fr").value)};
drawR();drawH();drawF();
