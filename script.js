var i=0;

var massiv = new Array ('marcy.jpg','brewmaster.jpg', 'invoker.jpg','axe.jpg','earth.webp');
var massiv_hero_name = new Array ("Marci","Brewmaster", "Invoker","Axe", "Футбольчик");
var massiv_hero_history = new Array (
    "У Марси много обожателей, но о её происхождении известно немногим. Обычно она сопровождает в пути принцессу Мирану, но корни их дружбы сплетены в таких секретах, которые ни одна из них не раскроет без надобности. Для союзников она — беспощадная и честная защитница. Для противников же — бесстрашное препятствие на пути к тем, кого она считает другом. Неразумные оппоненты могут счесть её телосложение невыдающимся, но внутренняя сила наделяет удары Марси невероятной мощью. Она истребит всех, кто решит встать у неё на пути, но до последнего вздоха будет хладнокровной сторонницей того, кто заслужит её доверие.",
    "Глубоко в Скулящих горах, в долине, что под Разрушенным городом, древний орден Ойо веками практиковал свои ритуалы священного помутнения, соединяясь с миром духов посредством грандиозных хмельных праздников. Рожденный плотской матерью от отца-небожителя, молодой Мангикс стал первым, кто совместил в себе таланты обеих линий. Он занимался с величайшими эстетами Ордена, со временем заполучив с прилежной верностью к напиткам право соревноваться за титул Хмелевара — высшего звания во всей спиртотворческой касте. Девять дней Мангикс сражался и пил до последнего, — оба аспекта были одинаково важны — стараясь одолеть и перепить старшего мастера. Девять ночей они шатались и крутились, спотыкались и наносили удар за ударом — и так до тех пор, пока воин постарше наконец не свалился на землю в пьяном ступоре, и его соперник был наречен новым Хмелеваром. Теперь новый, молодой Хмелевар взывает к силе предков Ойо, дабы те дали ему скорость в обращении с посохом. К своим предкам-небожителям он взывает, когда пользуется магией. И, подобно всем предыдущим Хмелеварам его родины, его послали путешествовать по миру с единственной целью. В бродяжничестве он постигает просвещение сквозь принятие алкоголя, пребывая в постоянных поисках ответа на древнюю духовную загадку; пытаясь надумать ту самую мысль, которая вновь воссоединит духовный и материальный миры",
    "Магия в своей самой ранней, даже можно сказать, самой мощной форме, всегда являлась в основном искусством памяти. Она не требовала техник, палочек или других принадлежностей, за исключением разума самого чародея. Всё, что ему было нужно — мнемонические средства, помогающие колдующему вспомнить в полных деталях ту психологическую формулу, что раскроет магическую силу. Величайшие волшебники тех дней были одарены отличной памятью, а сами заклинания были настолько сложны и громоздки, что чародеи были вынуждены на чем-то специализироваться. Однако даже самые отличные волшебники могли надеяться лишь на то, что они запомнят за всю свою жизнь три-четыре заклинания, не более. Обычные маги знали всего два заклинания, так что это не такое уж и необычное явление, когда деревенский чародей знал только одно заклинание, да и то требовало титанических усилий, куч подсказок и инструкций, работающих, как лекарство от забывчивости, в те редкие случаи, когда это самое заклинание просили продемонстрировать. Но среди всех этих волшебников было всего одно, но гениальное и владеющее огромной памятью исключение, и имя ему — Invoker. Уже в своей юности взрослый не по годам волшебник сумел набить руку на использовании не четырех, не пяти, и даже не семи, а не менее десятка заклинаний, которые он сотворял практически мгновенно! Еще больше он уже и так знал, но просто считал бесполезными. Одно из его заклинаний — Sempiternal Cantrap — было такой огромной мощи, что следы от его использования в первые дни создания мира видны до сих пор (или просто расщеплены на атомы). Большинство почти-бессмертных живут тихо, пряча от мира свой секрет, но Invoker — отнюдь не тот, кто хранит свой дар в кладовке. Он — древний, знающий гораздо больше остальных, разум которого все еще имеет свободное место для рассуждений о смысле существования… как и для колдовства, которым он развлекает себя, наблюдая за последними днями этого мира.",
    "Ещё будучи рядовым бугаем в армии Красного тумана, Могул Хан положил глаз на генеральский титул. Битву за битвой он самыми кровавыми способами доказывал собственное превосходство. Облегчало подъём в чинах и то, что без тени сомнения он мог обезглавить старшего по званию. В семилетней кампании на Тысячеболотье Могул Хан отличился в кровопролитных бойнях, и звезда его славы засияла еще ярче, но число соратников неизменно сокращалось. В ночь безоговорочной победы он провозгласил себя генералом Красного тумана, присвоив себе заодно и титул верховного военачальника. Однако теперь в его отряде не значилось ни одного воина. Множество бойцов было повержено врагом, но и от его топора погибло достаточно. Стоит ли говорить, что большинство солдат теперь ни за что не переманить под его знамена? Но Могул Хана это совсем не смущает, ведь он знает: один в поле воин.",
    "Глубоко среди скал и утёсов Повершья есть заброшенный рудокопами разрез, где давным-давно добывали священный нефрит. Когда-то из этого редкого материала вырезали изваяние великого генерала Каолина, и легло оно во главе могилы десяти тысяч каменных воинов: солдатов и священников, шутов и акробатов — мастера высекли великое множество статуй и на веки вечные опустили их в тёмные объятья почвы. Но не знали ремесленники, что разрез тот был необыкновенным: в нём обитал дух самой земли, единый с планетой. Долго копилась мощь в нефритовом изваянии, отрезанном от живительного источника, и спустя тысячу лет оно проложило себе путь на поверхность. Теперь вновь рождённый великий Каолин путешествует по дорогам Повершья, борясь во имя духа земли и при нужде призывая остатки великой армии, что и по сей день сокрыта в любящих объятьях земляной толщи."
    );
    var hero_logo = new Array ('person.webp','brew.png','invo.png','axe.png','earth.png');
    var audio = new Audio();
        audio.src = 'footbal.mp3';
function next() {
    i++;
    if (i==massiv.length) {i=0;};
    document.querySelector('.block2').style.backgroundImage= "url(" + massiv[i] + ")";
    document.querySelector('.heroName').innerHTML = massiv_hero_name[i];
    document.querySelector('.history').innerHTML = massiv_hero_history[i];
    if (i==4) {
        audio.play();     
              }
    else {
        audio.pause();
        audio.currentTime = 0;
    }
}
function back() {
    i--;
    if (i==-1) {i=massiv.length-1;};
    document.querySelector('.block2').style.backgroundImage= "url(" + massiv[i] + ")";
    document.querySelector('.heroName').innerHTML = massiv_hero_name[i];
    document.querySelector('.history').innerHTML = massiv_hero_history[i];
    if (i==4) {
        audio.play();     
              }
    else {
        audio.pause();
        audio.currentTime = 0;
    }
}















function test () {
document.querySelector('.block2').style.backgroundImage="url('brewmaster.jpg')";
document.querySelector('.heroName').innerHTML = "Brewmaster";
document.querySelector('.history').innerHTML = "Глубоко в Скулящих горах, в долине, что под Разрушенным городом, древний орден Ойо веками практиковал свои ритуалы священного помутнения, соединяясь с миром духов посредством грандиозных хмельных праздников. Рожденный плотской матерью от отца-небожителя, молодой Мангикс стал первым, кто совместил в себе таланты обеих линий. Он занимался с величайшими эстетами Ордена, со временем заполучив с прилежной верностью к напиткам право соревноваться за титул Хмелевара — высшего звания во всей спиртотворческой касте. Девять дней Мангикс сражался и пил до последнего, — оба аспекта были одинаково важны — стараясь одолеть и перепить старшего мастера. Девять ночей они шатались и крутились, спотыкались и наносили удар за ударом — и так до тех пор, пока воин постарше наконец не свалился на землю в пьяном ступоре, и его соперник был наречен новым Хмелеваром. Теперь новый, молодой Хмелевар взывает к силе предков Ойо, дабы те дали ему скорость в обращении с посохом. К своим предкам-небожителям он взывает, когда пользуется магией. И, подобно всем предыдущим Хмелеварам его родины, его послали путешествовать по миру с единственной целью. В бродяжничестве он постигает просвещение сквозь принятие алкоголя, пребывая в постоянных поисках ответа на древнюю духовную загадку; пытаясь надумать ту самую мысль, которая вновь воссоединит духовный и материальный миры.";
document.querySelector('.person').src="brew.png"
}

