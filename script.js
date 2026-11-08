document.addEventListener("DOMContentLoaded", function () {

    let sections = [
        {
            name: "Механика",
            image: "img/Механика.jpg",
            intro: "Механика — первый и самый наглядный раздел физики. Она объясняет, как и почему движутся тела: от падающего яблока до летящей ракеты. Именно с механики обычно начинают изучать физику в школе."
        },
        {
            name: "Термодинамика",
            image: "img/Термодинамика.jpg",
            intro: "Термодинамика изучает тепловые явления: как нагреваются и охлаждаются тела, как работают двигатели и холодильники, и почему энергия не может просто исчезнуть, а только переходит из одной формы в другую."
        },
        {
            name: "Электродинамика",
            image: "img/Электродинамика.jpg",
            intro: "Электродинамика — про электричество и магнетизм: почему бьёт током, как работает розетка и почему магнит притягивает металл. Это один из самых «практических» разделов физики в повседневной жизни."
        },
        {
            name: "Оптика",
            image: "img/Оптика.jpg",
            intro: "Оптика изучает свет: как он распространяется, преломляется и отражается. Благодаря оптике работают очки, фотоаппараты, микроскопы и телескопы."
        },
        {
            name: "Квантовая физика",
            image: "img/Квантовая физика.jpg",
            intro: "Квантовая физика описывает мир на уровне атомов и элементарных частиц, где привычные законы механики уже не работают так же просто. Это самый сложный, но и самый удивительный раздел школьной физики."
        }
    ];

    let topics = [
        {
            id: "kinematika",
            section: "Механика",
            title: "Кинематика",
            short: "Как тела движутся: путь, скорость, ускорение",
            text: "Кинематика изучает движение тел, не разбираясь в причинах, которые это движение вызвали. Главные величины — путь, скорость и ускорение.",
            details: "Скорость показывает, как быстро меняется положение тела, а ускорение — как быстро меняется сама скорость. Если тело движется равноускоренно (например, при разгоне машины), удобно пользоваться формулами с постоянным ускорением.",
            formula: "v = s / t",
            formulaNote: "скорость при равномерном движении",
            quantities: [{ symbol: "v", meaning: "скорость", unit: "м/с" }, { symbol: "s", meaning: "путь", unit: "м" }, { symbol: "t", meaning: "время", unit: "с" }],
            variants: ["s = v * t", "t = s / v"],
            example: "Автомобиль проехал 120 км за 2 часа. Его средняя скорость: v = 120 / 2 = 60 км/ч.",
            application: "Кинематику используют, например, при расчёте тормозного пути автомобиля или траектории мяча в игре."
        },
        {
            id: "dinamika",
            section: "Механика",
            title: "Законы Ньютона",
            short: "Почему тела движутся именно так",
            text: "Динамика объясняет, почему тела движутся именно так. Второй закон Ньютона связывает силу, массу и ускорение тела.",
            details: "Кроме второго закона есть ещё два: первый говорит, что тело сохраняет скорость, если на него не действуют силы (это называют инерцией), а третий — что при взаимодействии двух тел силы всегда равны по модулю и противоположны по направлению.",
            formula: "F = m * a",
            formulaNote: "второй закон Ньютона",
            quantities: [{ symbol: "F", meaning: "сила", unit: "Н" }, { symbol: "m", meaning: "масса", unit: "кг" }, { symbol: "a", meaning: "ускорение", unit: "м/с²" }],
            variants: ["m = F / a", "a = F / m"],
            example: "Тело массой 2 кг разгоняется с ускорением 3 м/с². Сила, которая на него действует: F = 2 * 3 = 6 Н.",
            application: "Законы Ньютона объясняют, например, почему ракета летит вперёд, выбрасывая газ назад, и зачем в машине нужен ремень безопасности."
        },
        {
            id: "impuls",
            section: "Механика",
            title: "Закон сохранения импульса",
            short: "Как считать импульс при столкновениях тел",
            text: "Если на систему тел не действуют внешние силы, суммарный импульс системы не меняется. Это удобно для задач со столкновениями.",
            details: "Импульс — векторная величина, направленная так же, как скорость тела. При столкновении двух тел их суммарный импульс до и после удара остаётся одинаковым, если внешние силы не действуют.",
            formula: "p = m * v",
            formulaNote: "импульс тела",
            quantities: [{ symbol: "p", meaning: "импульс", unit: "кг·м/с" }, { symbol: "m", meaning: "масса", unit: "кг" }, { symbol: "v", meaning: "скорость", unit: "м/с" }],
            variants: ["m = p / v", "v = p / m"],
            example: "Шар массой 1 кг летит со скоростью 4 м/с. Его импульс: p = 1 * 4 = 4 кг·м/с.",
            application: "На законе сохранения импульса основана работа ракетного двигателя и расчёт столкновений бильярдных шаров."
        },
        {
            id: "energiya",
            section: "Механика",
            title: "Закон сохранения энергии",
            short: "Кинетическая и потенциальная энергия тела",
            text: "Полная механическая энергия тела (кинетическая плюс потенциальная) остаётся постоянной, если на тело не действует трение.",
            details: "Кинетическая энергия связана с движением тела, потенциальная — с его положением, например высотой. Если трения нет, одна энергия переходит в другую, а их сумма не меняется.",
            formula: "E = m * v^2 / 2 + m * g * h",
            formulaNote: "полная механическая энергия",
            quantities: [{ symbol: "E", meaning: "полная механическая энергия", unit: "Дж" }, { symbol: "m", meaning: "масса", unit: "кг" }, { symbol: "v", meaning: "скорость", unit: "м/с" }, { symbol: "g", meaning: "ускорение свободного падения", unit: "м/с²" }, { symbol: "h", meaning: "высота", unit: "м" }],
            variants: ["Eк = m * v^2 / 2 (кинетическая энергия)", "Eп = m * g * h (потенциальная энергия)"],
            example: "Мяч массой 0.5 кг подняли на высоту 2 м. Его потенциальная энергия: E = 0.5 * 10 * 2 = 10 Дж.",
            application: "Это хорошо видно на американских горках: чем выше поднимается вагончик, тем больше у него потенциальной энергии, которая потом переходит в скорость."
        },
        {
            id: "mkt",
            section: "Термодинамика",
            title: "Уравнение состояния идеального газа",
            short: "Связь давления, объёма и температуры газа",
            text: "Уравнение связывает давление, объём и температуру газа. Часто используется в задачах про баллоны, насосы и поршни.",
            details: "Формула показывает, что если нагреть газ в закрытом баллоне (объём не меняется), его давление вырастет. А если сжать газ при постоянной температуре, давление тоже увеличится.",
            formula: "p * V = (m / M) * R * T",
            formulaNote: "уравнение Менделеева — Клапейрона",
            quantities: [{ symbol: "p", meaning: "давление", unit: "Па" }, { symbol: "V", meaning: "объём", unit: "м³" }, { symbol: "m", meaning: "масса газа", unit: "кг" }, { symbol: "M", meaning: "молярная масса", unit: "кг/моль" }, { symbol: "R", meaning: "универсальная газовая постоянная", unit: "Дж/(моль·К)" }, { symbol: "T", meaning: "температура", unit: "К" }],
            variants: ["T = p * V * M / (m * R)", "V = m * R * T / (M * p)"],
            example: "Если газ нагреть при постоянном объёме, его давление увеличится — это прямо видно из формулы.",
            application: "Этим объясняется, почему нельзя нагревать закрытый аэрозольный баллончик — давление внутри может вырасти настолько, что баллон разорвёт."
        },
        {
            id: "termo1",
            section: "Термодинамика",
            title: "Первый закон термодинамики",
            short: "Куда девается переданное телу тепло",
            text: "Тепло, переданное телу, идёт на изменение его внутренней энергии и на совершение работы.",
            details: "Если тело только нагревается, но не совершает работу, всё полученное тепло идёт на увеличение внутренней энергии. Если тело ещё и расширяется (например, толкает поршень), часть тепла тратится на эту работу.",
            formula: "Q = ΔU + A",
            formulaNote: "первый закон термодинамики",
            quantities: [{ symbol: "Q", meaning: "количество теплоты", unit: "Дж" }, { symbol: "ΔU", meaning: "изменение внутренней энергии", unit: "Дж" }, { symbol: "A", meaning: "работа газа", unit: "Дж" }],
            variants: ["ΔU = Q - A", "A = Q - ΔU"],
            example: "Если газ получает 100 Дж тепла и совершает работу 30 Дж, его внутренняя энергия увеличится на 70 Дж.",
            application: "Этот закон лежит в основе работы любого теплового двигателя — от паровой машины до двигателя автомобиля."
        },
        {
            id: "kpd",
            section: "Термодинамика",
            title: "КПД теплового двигателя",
            short: "Какая часть тепла превращается в работу",
            text: "КПД показывает, какая часть полученного тепла превращается в полезную работу. КПД всегда меньше 100%.",
            details: "КПД никогда не может быть равен 100%, потому что часть тепла всегда уходит в окружающую среду — например, через выхлопные газы или систему охлаждения двигателя.",
            formula: "η = (Q1 - Q2) / Q1",
            formulaNote: "коэффициент полезного действия",
            quantities: [{ symbol: "η", meaning: "КПД", unit: "доля или %" }, { symbol: "Q1", meaning: "тепло от нагревателя", unit: "Дж" }, { symbol: "Q2", meaning: "тепло, отданное холодильнику", unit: "Дж" }],
            variants: ["Q2 = Q1 * (1 - η)"],
            example: "Двигатель получает 500 Дж и отдаёт 350 Дж холодильнику. КПД: η = (500-350)/500 = 0.3, то есть 30%.",
            application: "У современных бензиновых двигателей КПД обычно составляет 25-35%, у дизельных — немного выше."
        },
        {
            id: "kulon",
            section: "Электродинамика",
            title: "Закон Кулона",
            short: "Сила взаимодействия двух зарядов",
            text: "Закон Кулона описывает силу взаимодействия двух точечных зарядов. Чем дальше заряды друг от друга, тем слабее сила.",
            details: "Одноимённые заряды отталкиваются, разноимённые — притягиваются. Сила действует вдоль прямой, соединяющей заряды, и очень быстро уменьшается с расстоянием — за счёт квадрата в знаменателе формулы.",
            formula: "F = k * q1 * q2 / r^2",
            formulaNote: "сила взаимодействия зарядов",
            quantities: [{ symbol: "F", meaning: "сила взаимодействия", unit: "Н" }, { symbol: "k", meaning: "коэффициент пропорциональности", unit: "Н·м²/Кл²" }, { symbol: "q1", meaning: "первый заряд", unit: "Кл" }, { symbol: "q2", meaning: "второй заряд", unit: "Кл" }, { symbol: "r", meaning: "расстояние между зарядами", unit: "м" }],
            variants: ["r = sqrt(k * q1 * q2 / F)"],
            example: "Если расстояние между зарядами увеличить в 2 раза, сила их притяжения (или отталкивания) уменьшится в 4 раза.",
            application: "Закон Кулона лежит в основе работы конденсаторов и объясняет, почему волосы «встают дыбом» после расчёсывания в сухую погоду."
        },
        {
            id: "om",
            section: "Электродинамика",
            title: "Закон Ома",
            short: "Как связаны ток, напряжение и сопротивление",
            text: "Основной закон электрических цепей: сила тока прямо пропорциональна напряжению и обратно пропорциональна сопротивлению.",
            details: "Чем больше сопротивление проводника, тем меньше через него течёт ток при том же напряжении. Именно поэтому в цепь ставят резисторы — чтобы регулировать силу тока.",
            formula: "I = U / R",
            formulaNote: "закон Ома для участка цепи",
            quantities: [{ symbol: "I", meaning: "сила тока", unit: "А" }, { symbol: "U", meaning: "напряжение", unit: "В" }, { symbol: "R", meaning: "сопротивление", unit: "Ом" }],
            variants: ["U = I * R", "R = U / I"],
            example: "К резистору 10 Ом приложено напряжение 20 В. Сила тока: I = 20 / 10 = 2 А.",
            application: "Закон Ома используют при расчёте любой электрической цепи — от простой лампочки на батарейке до электропроводки в доме."
        },
        {
            id: "moshnost",
            section: "Электродинамика",
            title: "Работа и мощность тока",
            short: "Сколько энергии тратит электроприбор",
            text: "Мощность показывает, сколько энергии электрический ток передаёт устройству за единицу времени.",
            details: "Мощность показывает скорость передачи энергии. Чем выше мощность прибора, тем больше электроэнергии он потребляет за то же время — это и определяет счёт за электричество.",
            formula: "P = U * I",
            formulaNote: "мощность электрического тока",
            quantities: [{ symbol: "P", meaning: "мощность", unit: "Вт" }, { symbol: "U", meaning: "напряжение", unit: "В" }, { symbol: "I", meaning: "сила тока", unit: "А" }],
            variants: ["U = P / I", "I = P / U"],
            example: "Чайник работает при 220 В и токе 5 А. Его мощность: P = 220 * 5 = 1100 Вт.",
            application: "Именно мощность указывают на приборах: чайник на 2000 Вт нагревает воду быстрее, чем чайник на 1000 Вт."
        },
        {
            id: "induktsiya",
            section: "Электродинамика",
            title: "Электромагнитная индукция",
            short: "Как магнитное поле порождает ток",
            text: "Изменяющееся магнитное поле создаёт электрический ток в проводнике. На этом принципе работают генераторы.",
            details: "Ток возникает только тогда, когда магнитный поток меняется — например, магнит двигают или меняют силу тока в соседней катушке. Если магнит просто неподвижно лежит внутри катушки, тока не будет.",
            formula: "ЭДС = -ΔФ / Δt",
            formulaNote: "закон электромагнитной индукции Фарадея",
            quantities: [{ symbol: "ЭДС", meaning: "электродвижущая сила индукции", unit: "В" }, { symbol: "ΔФ", meaning: "изменение магнитного потока", unit: "Вб" }, { symbol: "Δt", meaning: "промежуток времени", unit: "с" }],
            variants: ["ΔФ = -ЭДС * Δt"],
            example: "Если быстро вдвинуть магнит в катушку, стрелка гальванометра отклонится — в катушке возник ток.",
            application: "На этом явлении работают генераторы на электростанциях, а также беспроводная зарядка телефонов."
        },
        {
            id: "prelomlenie",
            section: "Оптика",
            title: "Преломление света",
            short: "Почему свет «изгибается» на границе сред",
            text: "Свет меняет направление, переходя из одной среды в другую — например, из воздуха в воду.",
            details: "Свет меняет направление, потому что в разных средах (воздух, вода, стекло) он распространяется с разной скоростью. Чем сильнее отличаются среды, тем заметнее изгиб луча.",
            formula: "n1 * sin(α) = n2 * sin(β)",
            formulaNote: "закон преломления света",
            quantities: [{ symbol: "n1", meaning: "показатель преломления первой среды", unit: "—" }, { symbol: "n2", meaning: "показатель преломления второй среды", unit: "—" }, { symbol: "α", meaning: "угол падения", unit: "°" }, { symbol: "β", meaning: "угол преломления", unit: "°" }],
            variants: ["n2 = n1 * sin(α) / sin(β)"],
            example: "Именно поэтому карандаш в стакане с водой кажется «сломанным» на границе воды и воздуха.",
            application: "На преломлении света основана работа линз, очков, микроскопов и даже миражей в пустыне."
        },
        {
            id: "linzy",
            section: "Оптика",
            title: "Линзы",
            short: "Как линзы строят изображение предмета",
            text: "Линза собирает или рассеивает лучи света, формируя изображение. Формула тонкой линзы связывает расстояния до предмета и до изображения.",
            details: "Собирающая линза (выпуклая) сводит лучи в одной точке — фокусе — и может создавать увеличенное или уменьшенное изображение в зависимости от расстояния до предмета. Рассеивающая линза (вогнутая), наоборот, лучи разводит.",
            formula: "1 / F = 1 / d + 1 / f",
            formulaNote: "формула тонкой линзы",
            quantities: [{ symbol: "F", meaning: "фокусное расстояние линзы", unit: "м" }, { symbol: "d", meaning: "расстояние от предмета до линзы", unit: "м" }, { symbol: "f", meaning: "расстояние от линзы до изображения", unit: "м" }],
            variants: ["f = (F * d) / (d - F)", "d = (F * f) / (f - F)"],
            example: "В фотоаппарате линза объектива формирует уменьшенное изображение предмета на матрице.",
            application: "Линзы используются в очках, фотоаппаратах, микроскопах, телескопах и в человеческом глазу."
        },
        {
            id: "fotoeffekt",
            section: "Квантовая физика",
            title: "Фотоэффект",
            short: "Свет как поток частиц, выбивающих электроны",
            text: "Свет способен выбивать электроны из металла. Это доказывает, что свет ведёт себя не только как волна, но и как поток частиц — фотонов.",
            details: "Фотоэффект доказал, что свет ведёт себя не только как волна, но и как поток отдельных порций энергии — фотонов. Чем выше частота света, тем больше энергии несёт каждый фотон.",
            formula: "h * v = A + Ek",
            formulaNote: "уравнение Эйнштейна для фотоэффекта",
            quantities: [{ symbol: "h", meaning: "постоянная Планка", unit: "Дж·с" }, { symbol: "v", meaning: "частота света", unit: "Гц" }, { symbol: "A", meaning: "работа выхода электрона", unit: "Дж" }, { symbol: "Ek", meaning: "кинетическая энергия электрона", unit: "Дж" }],
            variants: ["Ek = h * v - A"],
            example: "На этом явлении основаны солнечные батареи и фотоэлементы в датчиках освещённости.",
            application: "На фотоэффекте основана работа солнечных панелей, цифровых камер и датчиков движения."
        },
        {
            id: "yadro",
            section: "Квантовая физика",
            title: "Атомное ядро",
            short: "Из чего состоит ядро и откуда берётся ядерная энергия",
            text: "Ядро атома состоит из протонов и нейтронов, удерживаемых ядерными силами. При распаде или синтезе ядра выделяется огромная энергия.",
            details: "Протоны и нейтроны в ядре удерживаются очень сильным, но короткодействующим ядерным взаимодействием. При делении тяжёлых ядер (как в реакторе) или слиянии лёгких (как на Солнце) выделяется огромная энергия.",
            formula: "E = m * c^2",
            formulaNote: "связь массы и энергии (Эйнштейн)",
            quantities: [{ symbol: "E", meaning: "энергия", unit: "Дж" }, { symbol: "m", meaning: "масса", unit: "кг" }, { symbol: "c", meaning: "скорость света", unit: "м/с" }],
            variants: ["m = E / c^2"],
            example: "Именно за счёт этой формулы атомные электростанции получают энергию из небольшого количества топлива.",
            application: "На делении ядер работают атомные электростанции, а на слиянии лёгких ядер — Солнце и другие звёзды."
        }
    ];

    let sidebar = document.getElementById("sidebar");
    let content = document.getElementById("content");
    let searchInput = document.getElementById("searchInput");
    let currentId = null;
    let currentSection = null;

    // ---------- навигация: история переходов + кнопки Назад / На главную / Вперёд ----------
    let navStack = [];
    let navPos = -1;

    function sameView(a, b) {
        return a && b && a.type === b.type && a.id === b.id && a.name === b.name;
    }

    function showView(view) {
        if (view.type === "home") {
            currentId = null;
            currentSection = null;
            searchInput.value = "";
            renderHome();
            renderSidebar("");
        } else if (view.type === "section") {
            currentId = null;
            currentSection = view.name;
            renderSectionOverview(view.name);
            renderSidebar(searchInput.value);
        } else if (view.type === "topic") {
            let topic = topics.find(function (t) {
                return t.id === view.id;
            });
            if (!topic) {
                return;
            }
            currentId = topic.id;
            currentSection = topic.section;
            renderContent(topic.id);
            renderSidebar(searchInput.value);
        }
        window.scrollTo(0, 0);
    }

    function navigate(view) {
        if (sameView(navStack[navPos], view)) {
            return;
        }
        navStack = navStack.slice(0, navPos + 1);
        navStack.push(view);
        navPos = navStack.length - 1;
        showView(view);
    }

    function goBack() {
        if (navPos > 0) {
            navPos = navPos - 1;
            showView(navStack[navPos]);
        }
    }

    // Порядок страниц: раздел -> его темы -> следующий раздел -> его темы ...
    function getSequence() {
        let seq = [];
        sections.forEach(function (sec) {
            seq.push({ type: "section", name: sec.name });
            topics.forEach(function (t) {
                if (t.section === sec.name) {
                    seq.push({ type: "topic", id: t.id });
                }
            });
        });
        return seq;
    }

    function getNextView() {
        let current = navStack[navPos];
        let seq = getSequence();
        for (let i = 0; i < seq.length; i++) {
            if (sameView(seq[i], current)) {
                return seq[i + 1] || null;
            }
        }
        return null;
    }

    function goForward() {
        let next = getNextView();
        if (next) {
            navigate(next);
        }
    }

    function navBarHtml(isHome) {
        if (isHome) {
            return '<div class="nav-bar">' +
                '<button class="nav-btn nav-btn-home nav-btn-start" id="startBtn">Начать</button>' +
                '</div>';
        }
        let backOff = navPos <= 0 ? " disabled" : "";
        let fwdOff = getNextView() ? "" : " disabled";
        return '<div class="nav-bar">' +
            '<button class="nav-btn" id="backBtn"' + backOff + '>← Назад</button>' +
            '<button class="nav-btn nav-btn-home" id="homeBtn">На главную</button>' +
            '<button class="nav-btn" id="forwardBtn"' + fwdOff + '>Вперёд →</button>' +
            '</div>';
    }

    function bindNav() {
        let startBtn = document.getElementById("startBtn");
        let backBtn = document.getElementById("backBtn");
        let homeBtn = document.getElementById("homeBtn");
        let forwardBtn = document.getElementById("forwardBtn");
        if (startBtn) {
            startBtn.addEventListener("click", function () {
                navigate({ type: "section", name: sections[0].name });
            });
        }
        if (backBtn) {
            backBtn.addEventListener("click", goBack);
        }
        if (homeBtn) {
            homeBtn.addEventListener("click", function () {
                navigate({ type: "home" });
            });
        }
        if (forwardBtn) {
            forwardBtn.addEventListener("click", goForward);
        }
    }

    function getSectionNames() {
        let names = [];
        sections.forEach(function (s) {
            names.push(s.name);
        });
        return names;
    }

    function renderSidebar(filter) {
        sidebar.innerHTML = "";
        let query = filter ? filter.toLowerCase().trim() : "";
        let hasResults = false;

        getSectionNames().forEach(function (sectionName) {
            let sectionTopics = topics.filter(function (t) {
                return t.section === sectionName && t.title.toLowerCase().indexOf(query) !== -1;
            });

            if (query !== "" && sectionTopics.length === 0) {
                return;
            }
            hasResults = true;

            let secTitle = document.createElement("div");
            secTitle.className = "sec-title";
            if (sectionName === currentSection && currentId === null) {
                secTitle.classList.add("active-sec");
            }
            secTitle.textContent = sectionName;
            secTitle.addEventListener("click", function () {
                navigate({ type: "section", name: sectionName });
            });
            sidebar.appendChild(secTitle);

            let list = document.createElement("ul");
            list.className = "topic-list";

            sectionTopics.forEach(function (t) {
                let li = document.createElement("li");
                li.textContent = t.title;
                if (t.id === currentId) {
                    li.classList.add("active");
                }
                li.addEventListener("click", function () {
                    navigate({ type: "topic", id: t.id });
                });
                list.appendChild(li);
            });

            sidebar.appendChild(list);
        });

        if (!hasResults) {
            let empty = document.createElement("p");
            empty.className = "no-result";
            empty.textContent = "Темы не найдены";
            sidebar.appendChild(empty);
        }
    }

    function renderSectionOverview(sectionName) {
        let sectionData = sections.find(function (s) {
            return s.name === sectionName;
        });
        if (!sectionData) {
            return;
        }
        content.classList.remove("content-wide");
        let sectionTopics = topics.filter(function (t) {
            return t.section === sectionName;
        });

        let listHtml = "";
        sectionTopics.forEach(function (t) {
            listHtml +=
                '<li data-id="' + t.id + '"><h4>' + t.title + '</h4><p>' + t.short + '</p></li>';
        });

        content.innerHTML =
            '<div class="breadcrumb">Раздел</div>' +
            '<h1>' + sectionData.name + '</h1>' +
            '<p>' + sectionData.intro + '</p>' +
            getSectionImage(sectionData.name) +
            '<ul class="section-overview-list">' + listHtml + '</ul>' +
            navBarHtml(false);

        checkImages();
        bindNav();

        let items = content.querySelectorAll(".section-overview-list li");
        items.forEach(function (li) {
            li.addEventListener("click", function () {
                navigate({ type: "topic", id: li.getAttribute("data-id") });
            });
        });
    }

    function getSectionImage(sectionName) {
        let sectionData = sections.find(function (s) {
            return s.name === sectionName;
        });
        if (!sectionData || !sectionData.image) {
            return "";
        }
        return '<img class="topic-img" src="' + sectionData.image + '" alt="' + sectionName + '">';
    }

    function checkImages() {
        let images = content.querySelectorAll(".topic-img");
        images.forEach(function (img) {
            let tries = ["jpg", "png", "jpeg", "webp"];
            let step = 0;
            img.addEventListener("error", function () {
                step = step + 1;
                if (step < tries.length) {
                    img.src = img.src.replace(/\.[a-z]+$/i, "." + tries[step]);
                } else {
                    img.style.display = "none";
                }
            });
        });
    }

    function renderContent(id) {
        let topic = topics.find(function (t) {
            return t.id === id;
        });
        if (!topic) {
            return;
        }
        content.classList.remove("content-wide");

        let quantitiesHtml = "";
        topic.quantities.forEach(function (q) {
            quantitiesHtml +=
                '<li class="quantity-row">' +
                '<span class="quantity-symbol">' + q.symbol + '</span>' +
                '<span class="quantity-meaning">' + q.meaning + '</span>' +
                '<span class="quantity-unit">' + q.unit + '</span>' +
                '</li>';
        });

        let findBadgesHtml = "";
        topic.quantities.forEach(function (q) {
            findBadgesHtml += '<span class="find-badge">' + q.symbol + '</span>';
        });

        let variantsHtml = "";
        topic.variants.forEach(function (v) {
            variantsHtml += '<div class="variant-formula">' + v + '</div>';
        });

        content.innerHTML =
            '<div class="breadcrumb">' + topic.section + '</div>' +
            '<h1>' + topic.title + '</h1>' +
            '<p>' + topic.text + ' ' + topic.details + '</p>' +

            '<div class="formula-box formula-main"><span>' + topic.formulaNote + '</span>' + topic.formula + '</div>' +

            '<h3 class="block-title">Расшифровка величин</h3>' +
            '<ul class="quantities-list">' + quantitiesHtml + '</ul>' +

            '<h3 class="block-title">Что можно найти по этой формуле</h3>' +
            '<div class="find-badges">' + findBadgesHtml + '</div>' +

            '<h3 class="block-title">Преобразованные варианты</h3>' +
            '<div class="variants-box">' + variantsHtml + '</div>' +

            '<div class="example-toggle"><button class="example-btn" id="exampleBtn">Пример применения</button></div>' +
            '<div class="example-box example-content" id="exampleContent"><h3>Пример</h3><p>' + topic.example + '</p></div>' +

            '<div class="application-box"><h3>Где встречается</h3><p>' + topic.application + '</p></div>' +
            getSectionImage(topic.section) +
            navBarHtml(false);

        checkImages();
        bindNav();

        let exampleBtn = document.getElementById("exampleBtn");
        let exampleContent = document.getElementById("exampleContent");
        exampleBtn.addEventListener("click", function () {
            exampleContent.classList.toggle("show");
            if (exampleContent.classList.contains("show")) {
                exampleBtn.textContent = "Скрыть пример";
            } else {
                exampleBtn.textContent = "Пример применения";
            }
        });
    }

    function renderHome() {
        content.classList.add("content-wide");
        content.innerHTML =
            '<div class="home">' +
            '<img class="home-logo" src="img/507_logo1.png" alt="Школа 507">' +
            '<h1 class="home-title">Справочник</h1>' +
            '<p class="home-sub">Простой конспект по школьной физике: разделы, формулы и понятные примеры для тех, кто только начинает разбираться в предмете.</p>' +
            '<div class="home-search"><input type="text" id="homeSearchInput" placeholder="Найти тему..."></div>' +
            '<ul class="home-results section-overview-list" id="homeResults"></ul>' +
            '</div>' +
            navBarHtml(true);
        bindNav();

        let homeInput = document.getElementById("homeSearchInput");

        function renderHomeResults(query) {
            let homeResults = document.getElementById("homeResults");
            homeResults.innerHTML = "";
            let q = query.toLowerCase().trim();
            if (q === "") {
                return;
            }
            let matches = topics.filter(function (t) {
                return t.title.toLowerCase().indexOf(q) !== -1;
            });
            if (matches.length === 0) {
                homeResults.innerHTML = '<p class="no-result">Темы не найдены</p>';
                return;
            }
            matches.forEach(function (t) {
                let li = document.createElement("li");
                li.innerHTML = "<h4>" + t.title + "</h4><p>" + t.short + "</p>";
                li.addEventListener("click", function () {
                    searchInput.value = "";
                    navigate({ type: "topic", id: t.id });
                });
                homeResults.appendChild(li);
            });
        }

        homeInput.addEventListener("input", function () {
            renderHomeResults(homeInput.value);
            searchInput.value = homeInput.value;
            renderSidebar(homeInput.value);
        });
    }

    navigate({ type: "home" });

    searchInput.addEventListener("input", function () {
        renderSidebar(searchInput.value);
    });

    document.getElementById("logoBtn").addEventListener("click", function () {
        navigate({ type: "home" });
    });

});