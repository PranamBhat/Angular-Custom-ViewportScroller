import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <div id="lipsum">
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus eleifend egestas. Nullam porta tellus et vulputate varius. Curabitur quam risus, suscipit et aliquam ut, consectetur eu turpis. Duis consequat sed neque non accumsan. Phasellus tincidunt tellus odio, vel imperdiet nibh ultrices a. Aliquam eget justo justo. Vestibulum vitae congue diam. Pellentesque efficitur erat et facilisis imperdiet. Nulla eros nibh, congue id vestibulum ac, iaculis sit amet ipsum. Sed eget lorem commodo, efficitur elit eget, porta lectus. Curabitur tempor, mauris sed imperdiet rhoncus, nisi ante egestas eros, vel facilisis tellus ligula ut sapien. Etiam vehicula faucibus purus, sed tincidunt lectus malesuada sit amet.
</p>
<p>
Vivamus facilisis quis erat eget bibendum. In interdum pellentesque sodales. Vestibulum scelerisque quam sed sem vehicula lobortis. Praesent nunc lacus, suscipit at nibh non, malesuada porttitor nisi. Donec ultricies nisi id velit tincidunt ornare. Vivamus nulla leo, placerat nec faucibus a, eleifend quis nisi. Donec vitae tempor libero. Phasellus ligula ante, congue nec varius congue, bibendum sed tortor. Vestibulum pulvinar ornare ante, vitae auctor risus dictum ut. Phasellus dignissim vehicula tristique.
</p>
<p>
Donec accumsan pharetra nisi, eu gravida est dapibus ut. Curabitur non turpis sit amet erat iaculis cursus. Praesent semper ornare augue eu pulvinar. Etiam vel volutpat metus. Ut cursus aliquet dapibus. Suspendisse potenti. Sed nibh metus, molestie nec ex vel, dapibus finibus enim. Nullam suscipit lobortis imperdiet. Praesent ultricies, dolor nec lobortis posuere, ligula lacus consequat elit, cursus dignissim risus risus porta felis. Suspendisse erat mi, elementum tincidunt sagittis at, finibus a magna. In hac habitasse platea dictumst.
</p>
<p>
Nam sagittis urna non congue bibendum. Maecenas varius leo quis massa porta, bibendum tincidunt arcu pretium. Nullam rhoncus, arcu a efficitur cursus, lectus sapien egestas tortor, non accumsan dui leo non mi. Morbi aliquet enim nec nisl viverra interdum. In vitae porta elit. In sit amet magna sollicitudin, finibus eros sed, mattis lorem. Fusce vitae nisi sem. Aliquam dictum, tellus at volutpat fermentum, est leo tincidunt nibh, a fringilla turpis velit et metus. Cras non odio vel odio scelerisque bibendum ut sit amet libero. Duis nunc metus, sollicitudin ac aliquam et, ultrices sed eros.
</p>
<p>
Aliquam augue felis, sodales vitae volutpat eget, accumsan id neque. Nunc pulvinar tristique ligula a tincidunt. Phasellus at sem scelerisque nisl faucibus maximus sit amet fermentum dolor. Fusce tristique lacus enim. Aenean nec erat id nulla rutrum lobortis. Vestibulum vitae commodo urna. Praesent in orci dapibus, auctor nunc non, viverra est. Nunc a tristique nulla. Cras at varius nibh. Nulla interdum ex eget commodo tempor. Sed sit amet odio libero. Curabitur nec purus rhoncus, finibus libero consequat, dictum eros. In sodales ac massa a auctor. Aenean vel mi ante.
</p>
<p>
Sed sollicitudin mi at justo faucibus, in vestibulum metus consequat. Vestibulum placerat dignissim eros eu varius. Nunc sodales risus et magna pharetra pretium. Praesent aliquet tincidunt metus eget lacinia. Nulla tincidunt tortor nec lectus ultricies tincidunt. Donec finibus, nunc eu condimentum vehicula, libero velit rhoncus felis, et vulputate sapien neque non nisi. Duis nec lectus sollicitudin, hendrerit nulla in, vestibulum odio. Nulla vel diam non lorem commodo aliquet eget a tortor. Donec vel rutrum nunc. In hac habitasse platea dictumst. Ut leo erat, efficitur in condimentum at, gravida vitae mauris. Vivamus cursus dui libero, et sodales dui vulputate at. Maecenas gravida tortor id metus malesuada, sit amet dictum dui commodo.
</p>
<p>
Donec finibus dui nec lobortis mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam elementum arcu non nunc consectetur, sit amet condimentum ipsum congue. Nam laoreet volutpat egestas. Maecenas pharetra quam id sem laoreet, quis congue ante aliquam. Sed sollicitudin convallis tortor, non maximus enim lacinia sed. Etiam fermentum, enim id dignissim placerat, dolor libero commodo mauris, eu bibendum nulla elit ut nisl. Praesent varius aliquam blandit. Praesent pretium erat eu magna convallis, non ultrices nunc hendrerit. Morbi mollis neque eu tortor malesuada, ac hendrerit velit mollis. Duis hendrerit rhoncus metus sit amet hendrerit. Quisque et facilisis leo, in aliquam neque. Vestibulum interdum aliquet interdum.
</p>
<p>
In nec enim accumsan, porttitor justo nec, iaculis lacus. Phasellus venenatis tincidunt urna, a vestibulum nisi condimentum a. Donec iaculis tempor elit. Etiam nec imperdiet neque, sit amet congue felis. In malesuada efficitur lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia consequat tortor, eget volutpat lorem ornare quis. Maecenas vitae sodales tortor, vel viverra augue. Nullam eu mattis ligula.
</p>
<p>
In sollicitudin gravida nulla, quis elementum felis lobortis et. Sed malesuada, leo vitae congue pretium, lacus sapien interdum felis, vel semper elit nisi ac lacus. Cras ut auctor odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vitae eros tempor, ultrices mauris vel, convallis neque. Suspendisse tortor arcu, hendrerit eget enim eget, aliquam tincidunt dui. Donec molestie, enim sit amet ultrices dapibus, sem est iaculis nunc, eu ornare massa purus ac ipsum. Nullam augue tortor, tempus in mattis a, efficitur ac diam. Maecenas in ornare leo, quis dignissim nisl. Donec et aliquam velit. Pellentesque pharetra leo ac augue sodales rhoncus.
</p>
<p>
Aliquam iaculis leo vitae luctus semper. Ut ac ipsum elementum, eleifend ex quis, sodales massa. Nulla efficitur neque ut fringilla commodo. Phasellus mi lacus, condimentum et est eu, aliquet euismod odio. Sed sed commodo neque. Quisque non nisl dictum, dapibus lacus non, bibendum nunc. Donec consectetur posuere dui, at viverra ipsum lacinia quis. Nam sed suscipit risus, non commodo elit. Praesent bibendum arcu ac ante dignissim, eu faucibus ipsum sagittis. Fusce imperdiet, turpis id feugiat efficitur, mi diam dapibus lacus, quis iaculis enim mi a elit. Nunc mauris nunc, dictum nec velit a, blandit commodo lorem. Nulla vel convallis leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut bibendum elementum massa bibendum luctus. Maecenas eget nisl ut massa fringilla dictum eu sit amet ligula.
</p>
<p>
Donec ut enim et lorem pulvinar lacinia. Etiam eu pellentesque urna. Nullam gravida nisl ut leo porttitor, eget tristique augue bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ut diam ligula. Praesent sodales arcu non molestie efficitur. Duis commodo vestibulum dictum. Fusce sit amet sem sit amet felis convallis efficitur. Nullam sed justo mauris. Vestibulum quis sapien vel purus feugiat ullamcorper non vitae eros. Integer tortor mauris, dictum nec maximus a, viverra quis ante. Sed malesuada enim diam, non condimentum mi euismod et. Cras eu est ac ligula scelerisque accumsan eget eu leo. Vivamus ut dui suscipit, mattis magna at, euismod sapien. Nam sed nisi at lacus ultrices malesuada.
</p>
<p>
Fusce a augue aliquet, malesuada mi fringilla, vestibulum ante. Sed nisi neque, blandit nec facilisis quis, congue quis nisi. Integer tempor tempor tortor eget lobortis. Nulla eget fringilla leo, a iaculis turpis. Aliquam ut gravida mi. Vivamus metus massa, accumsan ut enim et, tempor pharetra dolor. Proin semper sagittis tortor, nec bibendum enim faucibus sit amet. Suspendisse hendrerit arcu et ex commodo, sit amet suscipit sapien maximus. Quisque interdum, ligula ac condimentum efficitur, massa ligula eleifend augue, eu semper felis velit in magna.
</p>
<p>
Sed gravida sollicitudin enim et blandit. Aenean eu aliquam arcu. Nunc suscipit massa turpis. Duis in sem tellus. Pellentesque vitae nunc quis neque porta tincidunt. Donec elementum nisi sem, quis lacinia turpis molestie sit amet. Proin vitae elit eget turpis congue semper et in sapien. Curabitur lobortis massa vitae lacus iaculis, vulputate suscipit felis accumsan.
</p>
<p>
Mauris in convallis dolor. Ut tincidunt sapien mi, sed varius ipsum euismod vel. Nulla non arcu eu dolor eleifend faucibus in quis nisl. Donec congue urna a porta varius. Nulla scelerisque metus non lorem dictum elementum vel ac libero. In commodo lectus suscipit, semper massa at, cursus lacus. Maecenas commodo lorem nunc, varius congue est tincidunt sed. Donec congue efficitur efficitur. In eget tortor nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
</p>
<p>
Praesent magna metus, aliquam in risus ut, consequat gravida velit. Maecenas sem diam, bibendum at bibendum sit amet, auctor at mi. Nullam at dolor luctus, iaculis ante sed, bibendum nunc. Morbi lacinia neque vitae lectus vulputate, vel tempor quam ultrices. Donec sodales consectetur convallis. Cras ac consectetur velit. Sed congue magna sapien, eget vehicula erat luctus vitae. Integer consequat condimentum lectus, in pharetra est cursus eget. Vivamus et efficitur turpis. Cras ac efficitur dolor.
</p>
<p>
Vivamus tincidunt metus quis pharetra luctus. Suspendisse tellus est, tristique vitae mollis sit amet, aliquet non massa. Sed interdum nisl vitae semper vulputate. Phasellus egestas tellus sed tincidunt porttitor. Phasellus lacinia ac leo eget luctus. Nunc tortor ex, eleifend non elit vitae, feugiat gravida nisl. Proin quis mi lectus. Duis in commodo purus, eget dictum diam. Nam accumsan, lorem vel gravida convallis, velit arcu iaculis dolor, at ornare magna nibh ac turpis. Sed metus purus, finibus eu pharetra eget, sagittis a velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis porttitor metus vitae quam lacinia sodales. Sed magna dolor, sodales nec felis at, pharetra tincidunt est. In massa velit, malesuada quis leo vel, molestie bibendum magna.
</p>
<p>
Integer imperdiet suscipit tortor, et convallis neque tristique in. Quisque vitae porta ante, a molestie velit. Phasellus commodo elit sollicitudin, iaculis augue sit amet, faucibus mauris. Aenean sed metus sit amet tortor tempus accumsan. Morbi pharetra ipsum non felis imperdiet, ac dapibus enim tincidunt. Proin fermentum ipsum quis suscipit volutpat. Suspendisse tempor id eros eget egestas. Donec sed tincidunt tellus. Vivamus tincidunt mauris in erat maximus, id sollicitudin est rhoncus. Nulla urna erat, tincidunt a leo et, imperdiet euismod odio. Vestibulum quis tempus arcu. Integer pulvinar dui nec fringilla rhoncus. Vestibulum mauris ligula, sodales et cursus sit amet, ullamcorper a est. Nulla arcu libero, mattis vitae lobortis eu, porttitor cursus purus. Aliquam pellentesque molestie sollicitudin. Fusce interdum sagittis nisi, et sagittis nisi mollis vitae.
</p>
<p>
Cras urna nisl, pellentesque sit amet turpis a, cursus lobortis arcu. Nullam vitae feugiat diam. Mauris malesuada justo quis quam imperdiet, vitae finibus leo euismod. Sed pharetra dolor in diam accumsan, sed sodales nisi tempus. Morbi rhoncus auctor lobortis. Sed ut tincidunt enim. Quisque feugiat enim non neque tincidunt consequat.
</p>
<p>
Vestibulum facilisis in ex vitae dignissim. Nam consequat facilisis ligula, vel elementum sem. Fusce sollicitudin felis eros, ac lobortis enim condimentum at. Sed pellentesque mauris a augue iaculis posuere. Duis semper sagittis nulla. In ultrices metus a eros porta, nec imperdiet magna vestibulum. Donec lorem nisi, eleifend ut mattis ut, pellentesque id quam. Curabitur sed faucibus metus. Fusce turpis nibh, ultrices vitae ullamcorper non, lobortis vitae risus.
</p>
<p>
Etiam molestie quam congue volutpat eleifend. Ut commodo a risus vel cursus. Sed fringilla nisi ut augue volutpat, in feugiat felis convallis. Nulla in malesuada velit, a tempus arcu. Aenean non arcu lacus. Phasellus rutrum eu odio quis rutrum. Ut cursus quam massa, a ornare nisi tincidunt quis. Praesent tincidunt eu leo ac aliquet. Phasellus ut nibh quis magna fringilla elementum. Suspendisse porttitor, arcu id accumsan lacinia, est dolor cursus nisi, et ultrices turpis magna in dui.
</p>
<p>
Donec sit amet sodales mi. Curabitur semper feugiat sapien et volutpat. Phasellus sit amet gravida elit. Nulla ultrices libero id cursus porttitor. Integer eu enim fermentum, dapibus turpis ut, varius tortor. Etiam ac sem suscipit ex ultrices ultrices vel et erat. Nam viverra vehicula nisi a aliquet. Proin nec hendrerit eros. Sed ut velit sed leo auctor porttitor vitae eu nunc. Vestibulum porta dui lacus, et suscipit est molestie ut.
</p>
<p>
Maecenas in laoreet ipsum, et placerat orci. Aenean a diam ut lacus luctus ornare a et urna. Nulla et quam non enim rutrum congue. Duis sit amet auctor turpis. Vivamus id magna ut ex semper faucibus sed eu nulla. Proin porta, felis eu pulvinar convallis, erat arcu efficitur elit, sed eleifend nisi neque vel urna. Vivamus dapibus purus quam, id sodales mi dignissim consectetur. Praesent nec ornare urna. Fusce molestie vestibulum ligula ac pretium. Ut dictum justo urna, a faucibus velit condimentum eleifend. Quisque vitae fringilla arcu. Duis eu hendrerit mi, eget efficitur est. Nunc id enim sed ipsum rutrum commodo. Ut accumsan faucibus leo, eu euismod justo vehicula quis. Praesent tempus ante eget dignissim rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
<p>
Integer rutrum scelerisque ligula, eu lobortis ipsum. Donec mollis urna sed lacus lacinia, eleifend tincidunt est egestas. Cras ac leo quis nulla sodales fringilla sit amet auctor velit. Nullam ornare urna non posuere porttitor. Duis eget ipsum ex. Fusce a maximus felis. Nam sit amet turpis commodo, elementum nisi non, faucibus velit.
</p>
<p>
Quisque tempor dui vitae dapibus tincidunt. Fusce vitae congue tellus. Maecenas fermentum egestas erat, auctor dapibus nisl rhoncus nec. Ut viverra cursus nisi vel ultrices. Sed orci nisi, venenatis in mi vel, pharetra ullamcorper neque. In hac habitasse platea dictumst. Sed tincidunt finibus felis nec laoreet. Aliquam vulputate ullamcorper nibh, sed venenatis urna maximus eget. Pellentesque gravida non nibh non posuere. Maecenas dictum tellus ut elit porttitor vehicula. Sed finibus posuere velit.
</p>
<p>
Phasellus a odio neque. Curabitur fringilla tristique consequat. Vivamus dapibus vehicula est in lacinia. Vivamus finibus placerat nibh in viverra. Duis venenatis lorem at faucibus ullamcorper. Aenean commodo metus metus, sit amet congue tortor viverra non. Vestibulum nibh odio, blandit non pharetra nec, condimentum eu ligula.
</p>
<p>
Duis sit amet purus ac justo efficitur fermentum nec in justo. Curabitur quis lacus a tortor vestibulum luctus. Curabitur venenatis ante vel dolor tempus condimentum. Nulla tempor faucibus auctor. Vestibulum ullamcorper elit in lectus semper efficitur. Maecenas a arcu non magna accumsan tempus sed ut lorem. Phasellus eleifend pharetra facilisis. Donec efficitur, orci a viverra ultrices, justo erat euismod tellus, at tristique ligula tellus non orci. Proin id elementum purus. Nulla nec purus nec justo bibendum euismod. Mauris fermentum massa eget ornare molestie. Proin sapien sem, molestie eget purus at, scelerisque blandit est. Mauris vehicula augue a tortor pellentesque accumsan. Praesent interdum libero quis purus semper sollicitudin.
</p>
<p>
Sed maximus blandit fermentum. Quisque at sem mattis, faucibus dui quis, sodales nibh. Nullam sit amet odio vitae enim venenatis tincidunt vel vel quam. Vivamus et nisi malesuada, vestibulum ante ut, laoreet tortor. Vivamus in interdum arcu. Etiam hendrerit enim dapibus tempor cursus. Integer maximus metus nulla, sit amet elementum nisi imperdiet id. Morbi ullamcorper sit amet turpis ut molestie. Vestibulum ut libero at odio suscipit imperdiet sed sit amet leo. Phasellus nec purus cursus, congue purus eu, tincidunt elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc dapibus egestas ligula vitae pulvinar. Quisque faucibus tellus consequat odio consectetur, vel porttitor ligula convallis. Cras finibus accumsan risus pharetra aliquet. Sed cursus, enim in eleifend cursus, nisi purus facilisis ipsum, ac tempus augue sem eget sem. Donec quis lacinia enim.
</p>
<p>
Praesent fermentum velit vel libero suscipit pellentesque. Nunc quis magna commodo, euismod leo id, faucibus mi. Donec convallis hendrerit urna ut pharetra. Integer porta velit condimentum rutrum ultrices. Maecenas turpis tortor, viverra et egestas ac, pellentesque sed risus. Curabitur ante tortor, ullamcorper ac finibus eget, congue at enim. Quisque vitae mollis leo. Integer at dui et nunc commodo congue. Quisque tempus leo consectetur est tristique hendrerit. Sed condimentum tempus risus at tincidunt.
</p>
<p>
Integer scelerisque euismod nulla eu ultrices. Vestibulum vestibulum felis et lectus dignissim, eu scelerisque quam vulputate. Donec egestas nec eros nec elementum. Proin elit lorem, suscipit venenatis sollicitudin non, commodo fermentum dolor. Curabitur iaculis molestie arcu sit amet sodales. Fusce sed porta erat, eleifend aliquam odio. Proin luctus arcu a dolor ultrices, ac porttitor felis lacinia. Sed ornare urna sed massa aliquam, nec imperdiet urna vehicula. Ut feugiat mattis nulla, pharetra lobortis ipsum molestie eu. Praesent imperdiet tincidunt urna a aliquet. Donec eu tortor in massa auctor pellentesque eu vehicula nunc. Donec at auctor ligula. Morbi id eros vitae risus imperdiet euismod. Sed in purus sed augue tempus commodo quis eget leo.
</p>
<p>
Proin massa diam, dapibus vel sapien in, ultrices tempus nibh. Aliquam erat volutpat. Suspendisse nec lacus sit amet nisi interdum vehicula et nec massa. Ut ut iaculis quam. Ut ultrices quis mi vel vehicula. Praesent cursus neque sed lectus luctus faucibus. Nunc congue arcu elementum porttitor ullamcorper. Etiam eget elit sem. Maecenas ullamcorper augue eu imperdiet venenatis. In odio risus, tempus mollis mattis luctus, fermentum lobortis turpis.
</p>
<p>
Quisque facilisis suscipit ipsum, vel luctus libero ultricies nec. Vestibulum et quam at odio lacinia mollis. Curabitur et quam eget leo ultricies rhoncus. Vivamus ornare, ipsum eget sollicitudin vestibulum, justo magna placerat leo, nec cursus nunc sem blandit massa. Vivamus urna mi, finibus et sagittis id, tincidunt a tellus. Donec scelerisque orci id eros facilisis, ac efficitur nisl mollis. Quisque dictum et mi vitae consequat. Morbi et libero viverra, imperdiet lorem vitae, convallis augue. Praesent ornare est nisl, in vestibulum est porta sit amet. Donec sagittis hendrerit turpis ac congue.
</p>
<p>
Vivamus ac velit massa. Nam tristique egestas odio ut dignissim. Aenean vel sem condimentum, dignissim neque ac, rhoncus massa. Aliquam sollicitudin neque dolor, ut egestas nunc convallis vel. Nunc mollis sed tellus at sodales. Curabitur vel neque imperdiet, sollicitudin orci at, suscipit sapien. Nam tempus molestie tortor, eget interdum dolor.
</p>
<p>
Ut accumsan libero eros, sed dictum arcu finibus blandit. In vitae tortor tristique, fermentum ligula id, varius augue. Maecenas sit amet dolor elementum, consequat lacus ut, ultrices erat. Quisque scelerisque metus non pretium euismod. Sed sed porttitor ante, eu feugiat enim. Etiam lacinia tempor ligula sit amet maximus. Cras viverra eu neque in porta. Aliquam quis purus quis ex varius placerat at in velit. Vestibulum commodo aliquam gravida. Vivamus tempus massa ante, rutrum pellentesque eros commodo luctus. Phasellus convallis dolor non condimentum interdum. Maecenas dictum diam aliquet, scelerisque sem ac, dictum massa. Vestibulum placerat, quam vitae volutpat rhoncus, nibh neque gravida massa, facilisis aliquam mauris nisi non tellus. Sed est quam, bibendum ut quam et, placerat rutrum ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut tristique turpis pellentesque tristique tempus.
</p>
<p>
Ut eget lorem nec nunc venenatis cursus. Proin lobortis mi id malesuada maximus. Sed lacinia, ex a rhoncus hendrerit, orci orci finibus elit, ut dictum sapien quam at nunc. Donec pharetra in nisi vitae tristique. Integer in erat ac mauris sagittis dictum. Integer vel luctus magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
</p>
<p>
Nulla dignissim mollis dui. Vestibulum lobortis eu mauris id dictum. Maecenas cursus odio et odio tempus, eu accumsan nisl tempus. Phasellus venenatis faucibus egestas. Integer a tortor faucibus, blandit nisi non, ullamcorper lorem. Phasellus accumsan orci sit amet ante consequat, quis lobortis quam vestibulum. Nulla est ante, elementum id massa eu, lobortis molestie tellus. Nulla consectetur leo ut augue sollicitudin pellentesque. Curabitur non urna sollicitudin, molestie enim rutrum, ullamcorper velit. Nulla facilisi. Mauris gravida diam maximus, scelerisque lorem eu, posuere neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim, urna et semper tristique, sapien leo molestie enim, a eleifend nisi massa a sem. Proin non semper ipsum, ut sollicitudin massa. Suspendisse sed pellentesque velit.
</p>
<p>
Morbi sit amet urna nec ligula facilisis posuere. Donec ac eros quam. Nullam eu semper erat. Suspendisse venenatis mollis condimentum. Ut vel maximus tortor, nec vehicula risus. Nam molestie malesuada aliquam. Mauris eu hendrerit erat. Aliquam ut facilisis tellus. Integer consectetur cursus mauris, a faucibus odio tincidunt ut. Quisque sed mi cursus, facilisis lacus sed, tincidunt erat. Sed maximus non neque at malesuada. Aenean ut quam ut orci faucibus egestas a in elit. Integer ac dapibus ex. Duis porta elit quis commodo tincidunt. Phasellus pretium dictum turpis, vitae egestas lectus fringilla at.
</p>
<p>
Vestibulum tristique nisl ut lorem ornare ultricies. Nullam in nulla nibh. Proin vitae metus dapibus, lacinia nunc tempus, tempus nunc. Donec sagittis blandit tellus vitae efficitur. Vivamus id velit lorem. Nulla lobortis sem dolor. Quisque quis mollis mi. Aliquam erat volutpat. Phasellus sit amet cursus nulla, non cursus sapien. Mauris viverra tincidunt leo, vel vulputate arcu eleifend eget.
</p>
<p>
Donec bibendum, leo sed rutrum eleifend, justo odio elementum tellus, id vehicula mi diam in elit. Aenean eget velit eget nisl ultricies malesuada non vel elit. Proin quis pellentesque magna. Nam volutpat ipsum non suscipit mattis. Nam nisl turpis, blandit dapibus sagittis in, maximus eget purus. Maecenas a tempor justo. Nullam sagittis neque in ultrices eleifend. Aliquam non magna pretium dolor ultrices volutpat sed eget velit. Praesent interdum nunc et ex euismod faucibus. Phasellus mattis nisi condimentum tellus mollis convallis. In luctus nulla at tellus pretium tincidunt.
</p>
<p>
Duis mattis vulputate nulla hendrerit rhoncus. Cras faucibus id turpis sed laoreet. Phasellus elementum sed nunc eget tincidunt. Morbi lobortis justo quis metus scelerisque, blandit venenatis dolor dictum. Vivamus eleifend felis nec dui posuere, sed dignissim leo rutrum. Curabitur ultrices elit at orci rutrum, et elementum lectus aliquet. Phasellus convallis euismod turpis et ultricies. Fusce eleifend convallis nisl ac cursus. Sed ornare justo et ultricies pellentesque. Quisque fringilla mauris eget libero finibus rutrum.
</p>
<p>
Maecenas sed leo sed tortor euismod ornare vitae non massa. Nulla gravida justo quis placerat vestibulum. Ut nibh ipsum, tristique eget pharetra et, efficitur dapibus velit. In viverra eget risus ut tempor. Donec ac elit rutrum dui ultricies hendrerit. Phasellus ac tortor in orci eleifend aliquet. Morbi faucibus et magna et posuere.
</p>
<p>
Integer id facilisis tellus. Suspendisse in tempus velit, tempor hendrerit risus. Donec suscipit aliquet fringilla. Ut vestibulum mi tincidunt tristique imperdiet. Vivamus eget ex egestas, vehicula metus et, pellentesque ex. Duis eu malesuada lectus, nec tincidunt nulla. Proin eget felis ut nunc semper pretium non eget urna. Suspendisse pellentesque aliquet magna, sed feugiat nisl ullamcorper non. Pellentesque accumsan est placerat maximus sodales. Vivamus sodales nunc mattis libero fringilla, ac fermentum elit bibendum. Vestibulum imperdiet sagittis eros, dignissim volutpat urna varius eu. Integer tempus scelerisque justo vel consectetur. Morbi tincidunt erat mauris, non placerat purus interdum sed. Vivamus pretium pharetra ligula, eu posuere felis rutrum in. Etiam consectetur mauris nec nisi posuere facilisis. Duis laoreet, purus sit amet sodales iaculis, justo arcu tincidunt enim, in scelerisque tortor magna id diam.
</p>
<p>
Mauris neque quam, egestas sit amet hendrerit at, dictum ut neque. Curabitur quis laoreet nunc. Donec dapibus ante consectetur congue maximus. Pellentesque vel felis dolor. Quisque nibh erat, feugiat in euismod id, rhoncus a urna. Sed sit amet ultricies quam, quis venenatis orci. In interdum ullamcorper neque, id laoreet metus lobortis in. Quisque velit felis, fringilla ac faucibus non, porttitor non odio. Proin tempus posuere ante, et ornare ipsum semper porta.
</p>
<p>
Pellentesque egestas a orci ac varius. Maecenas posuere tincidunt dignissim. Nam quis rutrum felis. Vestibulum felis ipsum, mollis et eleifend ullamcorper, sollicitudin viverra eros. Curabitur scelerisque non urna eu convallis. In malesuada lacus ac neque faucibus, at ultricies elit ultricies. Ut convallis elementum felis, vitae pulvinar risus. Vivamus mattis risus ac eros suscipit, a porttitor ante finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ornare ornare lorem, at tempor nibh euismod egestas. Etiam vulputate tortor vel magna porta tincidunt. Curabitur blandit blandit elit, nec mollis velit euismod vel.
</p>
<p>
In at interdum ligula, sed convallis tortor. Integer luctus dui tortor, id efficitur magna dictum eget. Ut porttitor suscipit odio, sit amet bibendum libero gravida nec. Vivamus vitae volutpat libero, sed condimentum sapien. Aenean nulla nisi, iaculis id lorem ut, faucibus vulputate nisl. Morbi eget ex commodo, auctor nisl sit amet, convallis felis. Vestibulum semper sapien ut eleifend commodo. In risus ante, sagittis non imperdiet vel, efficitur ut purus.
</p>
<p>
Sed sit amet feugiat mi, eget finibus est. Etiam vel massa eu est suscipit venenatis eget ac mauris. Aliquam scelerisque vehicula mauris eu tempus. Nunc at quam a dui posuere sollicitudin id sed lacus. Sed malesuada tincidunt elementum. Nulla suscipit tellus a nisl dignissim euismod. Aliquam erat volutpat. Proin ac efficitur nibh, eu vestibulum nulla. Ut in elit luctus, sagittis eros eget, tincidunt velit. Nam et pellentesque ante, at venenatis velit.
</p>
<p>
Phasellus convallis metus eget nisi tempor lobortis. Quisque at justo ut velit feugiat tempor id in leo. Vivamus bibendum nibh vel varius commodo. Aliquam tristique sem eget elit blandit, vitae gravida odio eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus, mi eu efficitur gravida, elit massa aliquam nulla, vitae posuere turpis erat sit amet leo. Nulla congue egestas tortor, eget porta tortor aliquam non. Ut vitae euismod metus. Aenean dapibus ornare nisi quis tempus. Vivamus sit amet felis venenatis erat tempus dignissim at id quam.
</p>
<p>
Fusce sed turpis condimentum, lobortis mauris non, accumsan risus. Ut ornare vehicula purus, ac molestie ex consequat nec. Praesent aliquet dolor non libero commodo gravida. Nullam porttitor lobortis urna, in eleifend turpis placerat at. Mauris fermentum orci ut mauris feugiat, eget varius massa lobortis. In sit amet risus eu nisl placerat eleifend. Sed pharetra pellentesque scelerisque. Vivamus vulputate augue et elit accumsan, ut fringilla dui consequat. Praesent egestas tellus magna, eget congue magna placerat nec. Donec eget tortor rhoncus, ornare sem et, ultricies diam. Praesent faucibus quis orci in egestas.
</p>
<p>
Donec sit amet iaculis sapien. Donec mattis massa posuere ligula posuere dapibus. In interdum tempor lorem, quis lacinia orci aliquet ut. Pellentesque cursus elit vitae aliquam sagittis. Suspendisse augue dui, lobortis sed facilisis sit amet, laoreet ac lacus. In vestibulum mauris sagittis luctus cursus. Duis iaculis molestie lacus, quis consectetur orci sodales nec.
</p>
<p>
In pulvinar volutpat nulla, nec egestas massa faucibus in. Mauris et magna tristique, fringilla magna eget, aliquam tortor. Suspendisse risus mi, malesuada id dignissim ut, lobortis ut nunc. Proin facilisis maximus quam et sagittis. Integer maximus tristique purus vehicula dictum. Etiam cursus ex vel pellentesque finibus. Fusce maximus tortor enim, in porttitor mi pretium eu. Sed consequat nulla sed lacus mattis tempor. Ut quis semper justo. Integer faucibus aliquet orci eu mollis. Phasellus nunc velit, rutrum efficitur magna et, ornare hendrerit arcu. Ut vulputate luctus justo, at pharetra mauris molestie eget. Vestibulum ac rhoncus orci. Aliquam tortor augue, suscipit eget efficitur id, sodales sit amet nunc. Nullam lacinia eu ligula at malesuada. Sed a ex a velit venenatis pulvinar.
</p>
<p>
Praesent finibus erat felis, non egestas lectus consectetur nec. Proin rutrum sem nec lacus pellentesque interdum vel eget elit. Integer ultrices velit ut elit maximus laoreet. In suscipit in tellus efficitur rutrum. Phasellus quis aliquam arcu. Vestibulum in ex quam. Nunc quis posuere arcu. Vestibulum non lacus nec diam pretium congue ut in ex.
</p></div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  name = 'Angular ' + VERSION.major;
}
