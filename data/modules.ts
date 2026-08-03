import { Module } from "@/types/module";

export const modules: Module[] = [
  // ── CORE VALUES — EN (Welcome) ───────────────────────────────────────────
  {
    id: "core-values-en",
    moduleNum: 0,
    lang: "en",
    category: "welcome",
    title: "Core Values",
    subtitle: "Trust · Teamwork · Quality · Safety · Respect",
    slides: [
      {
        type: "title",
        title: "Core Values",
        subtitle: "Trust · Teamwork · Quality · Safety · Respect",
      },
      {
        type: "story",
        title: "Welcome to DTEC",
        date: "New Hire Orientation",
        body: "Welcome to Down To Earth Compliance — you can call us DTEC.\n\nAs you settle into your new role here we will provide training on how to install erosion and sediment control devices. You will learn about our processes for requesting equipment repairs, how to call in when you cannot make it to work, how to complete a work order, and how to operate safely. You will also learn about our culture and how we operate.",
      },
      {
        type: "story",
        title: "How We Do It Matters",
        date: "Why This Matters",
        body: "At DTEC we are convinced that how we do something is as important as what we do. So to help us all get on the same page and to make sure that team members know what is expected of them, we introduce our Core Values and spend some time discussing them together.\n\nOur goal is to live these out in the workplace because we believe these are basic requirements for any team to operate well. If all of our employees are living out these values, the day-to-day work experience will be more enjoyable for most of us, and our clients will benefit, too.",
      },
      {
        type: "story",
        title: "Let's Be Honest About the Risk",
        date: "Being Honest",
        body: "There is a risk that we verbally agree to show up and use these values, but don't actually show them in our actions. There is also a risk that one person's definition of respect is different from someone else's, and that can cause us to fall short of our goals and disappoint our coworkers.\n\nSo we are going to give examples of each of these values. These are the behaviors that support and back up the values. The examples are not the complete list, but they should help us gain clarity.",
      },
      {
        type: "content",
        title: "DTEC's Five Core Values",
        bullets: [
          "1. Trust",
          "2. Teamwork",
          "3. Quality",
          "4. Safety",
          "5. Respect",
        ],
      },
      {
        type: "story",
        title: "Trust",
        date: "Core Value 1 of 5",
        body: "Trust is foundational for working teams. If we don't trust each other, we are not going to communicate well, we may be tempted to avoid those we don't trust, and often people who don't trust each other engage in blaming or gossiping about each other. We believe that working for a high trust environment is worth it and we expect every one of our team members to actively contribute to building a positive work environment.",
      },
      {
        type: "content",
        title: "Trust — In Action",
        bullets: [
          "We admit mistakes because we trust we won't be punished, but will be coached.",
          "We don't hold back information because sharing the whole picture is most helpful.",
          "We show up on time, because when we keep our commitments we build trust.",
          "We complete assignments in a way that we can be proud of, so that clients and teammates know they can rely on us.",
          "We calmly discuss differences of opinion with others because we trust we can find common ground, and we can be respectful even when we disagree.",
        ],
      },
      {
        type: "numbered-list",
        title: "Trust — Discussion",
        items: [
          { num: "1", heading: "Which one of the examples is easy for you to do?", body: "" },
          { num: "2", heading: "Which one of the examples is harder for you to do?", body: "" },
          { num: "3", heading: "Can you think of other behaviors that demonstrate a work environment built on trust?", body: "" },
        ],
      },
      {
        type: "story",
        title: "Teamwork",
        date: "Core Value 2 of 5",
        body: "Teamwork means we recognize that the job in front of us is bigger than any one person. Crews that work well together get more done, stay safer, and take pride in the finished job. When teamwork breaks down, tasks get duplicated or missed, small problems turn into big ones, and the workday feels a lot longer.",
      },
      {
        type: "content",
        title: "Teamwork — In Action",
        bullets: [
          "We pitch in to help a teammate who is falling behind, without being asked.",
          "We communicate changes in the plan or schedule to everyone who is affected, not just the people directly in front of us.",
          "We share credit for a job well done, because a finished project is a team result.",
          "We ask for help when we need it instead of struggling alone or falling behind schedule.",
          "We look out for new team members and help them learn the ropes.",
        ],
      },
      {
        type: "numbered-list",
        title: "Teamwork — Discussion",
        items: [
          { num: "1", heading: "Which one of the examples is easy for you to do?", body: "" },
          { num: "2", heading: "Which one of the examples is harder for you to do?", body: "" },
          { num: "3", heading: "Can you think of a time teamwork made a tough job easier?", body: "" },
        ],
      },
      {
        type: "story",
        title: "Quality",
        date: "Core Value 3 of 5",
        body: "Quality means we take pride in the work we install and the way we install it. Erosion and sediment control only works if it's done right the first time. Poor quality work costs the company money to fix, can put a project out of compliance, and puts more strain on the team to correct it later. Quality work results in loyal clients, which is good for everyone.",
      },
      {
        type: "content",
        title: "Quality — In Action",
        bullets: [
          "We follow the specifications and installation standards, even when a shortcut looks faster.",
          "We double check our own work before we call a task complete.",
          "We speak up when we see an install that doesn't meet the standard, whether it's ours or a teammate's.",
          "We take care of our tools and equipment so they are ready to perform when we need them.",
          "We ask questions when we're unsure of the right way to do something, instead of guessing.",
          "Quality matters in all areas — how we drive, our communication with clients, our work safety habits, and keeping a clean workspace, for example.",
        ],
      },
      {
        type: "numbered-list",
        title: "Quality — Discussion",
        items: [
          { num: "1", heading: "Which one of the examples is easy for you to do?", body: "" },
          { num: "2", heading: "Which one of the examples is harder for you to do?", body: "" },
          { num: "3", heading: "What does a “job well done” look like in your role?", body: "" },
        ],
      },
      {
        type: "story",
        title: "Safety",
        date: "Core Value 4 of 5",
        body: "Safety means everyone gets to go home the same way they came to work. Our job sites have real hazards, so we depend on each other to follow safe practices and to watch out for one another. Safety shortcuts might save a few minutes, but they can cost someone their health or their life. We demand safe operating procedures for all positions, but we also want you to look out for teammates and keep them safe as well.",
      },
      {
        type: "content",
        title: "Safety — In Action",
        bullets: [
          "We wear the required personal protective equipment every time, not just when someone is watching.",
          "We stop work and speak up when we see an unsafe condition or unsafe act.",
          "We report near misses and injuries right away so we can fix the hazard before someone gets hurt.",
          "We take the time to do a job safely, even when we're on a tight schedule.",
          "We look out for our teammates, especially when they are new or working in an unfamiliar area.",
        ],
      },
      {
        type: "numbered-list",
        title: "Safety — Discussion",
        items: [
          { num: "1", heading: "Which one of the examples is easy for you to do?", body: "" },
          { num: "2", heading: "Which one of the examples is harder for you to do?", body: "" },
          { num: "3", heading: "What would you do if you saw a coworker taking a safety shortcut?", body: "" },
        ],
      },
      {
        type: "story",
        title: "Respect",
        date: "Core Value 5 of 5",
        body: "Respect means we treat every teammate, client, and member of the public the way we would want to be treated, regardless of role, background, or how busy the day is. Respect is often defined differently by different people, which is why we talk about it directly instead of assuming everyone already agrees on what it looks like.",
      },
      {
        type: "content",
        title: "Respect — In Action",
        bullets: [
          "We listen to others without interrupting, even when we disagree with what they're saying.",
          "We speak to teammates the way we would want to be spoken to, especially in a stressful moment.",
          "We value every role on the team, understanding that the work only gets done because everyone contributes.",
          "We keep our word and follow through on what we say we'll do.",
          "We address disagreements directly with the person involved, rather than talking about them behind their back.",
        ],
      },
      {
        type: "numbered-list",
        title: "Respect — Discussion",
        items: [
          { num: "1", heading: "Which one of the examples is easy for you to do?", body: "" },
          { num: "2", heading: "Which one of the examples is harder for you to do?", body: "" },
          { num: "3", heading: "What does respect look like to you, and how might that be different for someone else on the team?", body: "" },
        ],
      },
      {
        type: "numbered-list",
        title: "Beyond the Big Five",
        subtitle: "The five core values above are a good summary of how we want people to behave at DTEC. But there are a few more “unwritten” culture rules worth noting.",
        items: [
          { num: "1", heading: "We Invest in Employees", body: "If you want to add job skills, aim for another position, or just learn a personal skill like stress management, you can work with your supervisor or our trainer to create an IDP — an individual development plan. We love it when employees have goals and actively work to achieve them." },
          { num: "2", heading: "We Don't Do Drama", body: "We all have a lot on our plates, and one area we love to see growth in is emotional intelligence. Emotions aren't to be avoided, but we want to see healthy behaviors increasing over time — unproductive patterns need to be addressed if you want to stick around at DTEC." },
          { num: "3", heading: "Come As You Are, But Don't Stay That Way", body: "DTEC has often hired folks who have been incarcerated, gang affiliated, or struggled with drugs or alcohol. None of that is a problem if it's in your past — we're more interested in who you're becoming. We maintain a strict zero tolerance policy for drug and alcohol use. Need help managing your choices? Talk to your supervisor." },
          { num: "4", heading: "Cool Heads Prevail", body: "Site conditions will sometimes be challenging, or clients disrespectful or hard to deal with. Cool heads win because in the long run we get over these challenges and move on. Stepping back to analyze our options, or get other opinions, helps us move past the moment constructively." },
        ],
      },
      {
        type: "closing",
        message: "Trust · Teamwork · Quality\nSafety · Respect",
        sub: "These values only matter if we live them out — on the job site, with clients, and with each other. Welcome to the team.",
        footer: "DTEC — Down to Earth Compliance  |  Core Values Complete",
      },
    ],
  },

  // ── CORE VALUES — ES (Welcome) ───────────────────────────────────────────
  {
    id: "core-values-es",
    moduleNum: 0,
    lang: "es",
    category: "welcome",
    title: "Valores Fundamentales",
    subtitle: "Confianza · Trabajo en Equipo · Calidad · Seguridad · Respeto",
    slides: [
      {
        type: "title",
        title: "Valores Fundamentales",
        subtitle: "Confianza · Trabajo en Equipo · Calidad · Seguridad · Respeto",
      },
      {
        type: "story",
        title: "Bienvenido a DTEC",
        date: "Orientación de Nuevo Empleado",
        body: "Bienvenido a Down To Earth Compliance — nos puedes llamar DTEC.\n\nA medida que te adaptas a tu nuevo puesto, te daremos capacitación sobre cómo instalar dispositivos de control de erosión y sedimento. Aprenderás sobre nuestros procesos para solicitar reparaciones de equipo, cómo avisar cuando no puedes llegar al trabajo, cómo completar una orden de trabajo, y cómo operar de forma segura. También aprenderás sobre nuestra cultura y cómo operamos.",
      },
      {
        type: "story",
        title: "Cómo Lo Hacemos Importa",
        date: "Por Qué Esto Importa",
        body: "En DTEC estamos convencidos de que cómo hacemos algo es tan importante como lo que hacemos. Para ayudarnos a todos a estar en la misma página y asegurarnos de que los miembros del equipo sepan lo que se espera de ellos, presentamos nuestros Valores Fundamentales y dedicamos tiempo a discutirlos juntos.\n\nNuestra meta es vivir estos valores en el trabajo porque creemos que son requisitos básicos para que cualquier equipo funcione bien. Si todos nuestros empleados viven estos valores, la experiencia diaria de trabajo será más agradable para la mayoría de nosotros, y nuestros clientes también se beneficiarán.",
      },
      {
        type: "story",
        title: "Seamos Honestos Sobre el Riesgo",
        date: "Siendo Honestos",
        body: "Existe el riesgo de que aceptemos verbalmente mostrar estos valores, pero no los demostremos realmente en nuestras acciones. También existe el riesgo de que la definición de respeto de una persona sea diferente a la de otra, y eso puede hacer que no cumplamos nuestras metas y decepcionemos a nuestros compañeros.\n\nPor eso vamos a dar ejemplos de cada uno de estos valores. Estos son los comportamientos que respaldan los valores. Los ejemplos no son la lista completa, pero deben ayudarnos a tener más claridad.",
      },
      {
        type: "content",
        title: "Los Cinco Valores Fundamentales de DTEC",
        bullets: [
          "1. Confianza",
          "2. Trabajo en Equipo",
          "3. Calidad",
          "4. Seguridad",
          "5. Respeto",
        ],
      },
      {
        type: "story",
        title: "Confianza",
        date: "Valor Fundamental 1 de 5",
        body: "La confianza es fundamental para los equipos de trabajo. Si no confiamos unos en otros, no nos vamos a comunicar bien, podemos sentirnos tentados a evitar a quienes no confiamos, y a menudo las personas que no confían entre sí terminan culpándose o chismeando unas de otras. Creemos que trabajar en un ambiente de alta confianza vale la pena y esperamos que cada uno de nuestros compañeros contribuya activamente a construir un ambiente de trabajo positivo.",
      },
      {
        type: "content",
        title: "Confianza — En Acción",
        bullets: [
          "Admitimos nuestros errores porque confiamos en que no seremos castigados, sino guiados.",
          "No nos guardamos información porque compartir el panorama completo es lo más útil.",
          "Llegamos a tiempo, porque cuando cumplimos nuestros compromisos construimos confianza.",
          "Completamos las tareas de una manera de la que podemos sentirnos orgullosos, para que clientes y compañeros sepan que pueden contar con nosotros.",
          "Discutimos con calma las diferencias de opinión con otros porque confiamos en que podemos encontrar puntos en común, y podemos ser respetuosos aun cuando no estemos de acuerdo.",
        ],
      },
      {
        type: "numbered-list",
        title: "Confianza — Discusión",
        items: [
          { num: "1", heading: "¿Cuál de estos ejemplos es fácil para ti?", body: "" },
          { num: "2", heading: "¿Cuál de estos ejemplos es más difícil para ti?", body: "" },
          { num: "3", heading: "¿Puedes pensar en otros comportamientos que demuestren un ambiente de trabajo basado en la confianza?", body: "" },
        ],
      },
      {
        type: "story",
        title: "Trabajo en Equipo",
        date: "Valor Fundamental 2 de 5",
        body: "El trabajo en equipo significa que reconocemos que el trabajo que tenemos por delante es más grande que cualquier persona. Las cuadrillas que trabajan bien juntas logran más, se mantienen más seguras, y se sienten orgullosas del trabajo terminado. Cuando el trabajo en equipo falla, las tareas se duplican o se olvidan, los problemas pequeños se vuelven grandes, y el día de trabajo se siente mucho más largo.",
      },
      {
        type: "content",
        title: "Trabajo en Equipo — En Acción",
        bullets: [
          "Ayudamos a un compañero que se está atrasando, sin que nos lo pidan.",
          "Comunicamos los cambios en el plan o el horario a todos los afectados, no solo a las personas que tenemos enfrente.",
          "Compartimos el crédito por un trabajo bien hecho, porque un proyecto terminado es un resultado de equipo.",
          "Pedimos ayuda cuando la necesitamos en lugar de luchar solos o atrasarnos en el horario.",
          "Cuidamos a los nuevos miembros del equipo y les ayudamos a aprender cómo funciona todo.",
        ],
      },
      {
        type: "numbered-list",
        title: "Trabajo en Equipo — Discusión",
        items: [
          { num: "1", heading: "¿Cuál de estos ejemplos es fácil para ti?", body: "" },
          { num: "2", heading: "¿Cuál de estos ejemplos es más difícil para ti?", body: "" },
          { num: "3", heading: "¿Puedes pensar en un momento en que el trabajo en equipo hizo un trabajo difícil más fácil?", body: "" },
        ],
      },
      {
        type: "story",
        title: "Calidad",
        date: "Valor Fundamental 3 de 5",
        body: "Calidad significa que nos sentimos orgullosos del trabajo que instalamos y de la forma en que lo instalamos. El control de erosión y sedimento solo funciona si se hace bien desde la primera vez. El trabajo de mala calidad le cuesta dinero a la empresa para corregirlo, puede sacar un proyecto de cumplimiento, y pone más presión al equipo para arreglarlo después. El trabajo de calidad resulta en clientes leales, lo cual es bueno para todos.",
      },
      {
        type: "content",
        title: "Calidad — En Acción",
        bullets: [
          "Seguimos las especificaciones y estándares de instalación, incluso cuando un atajo parece más rápido.",
          "Revisamos nuestro propio trabajo antes de decir que una tarea está terminada.",
          "Hablamos cuando vemos una instalación que no cumple con el estándar, ya sea la nuestra o la de un compañero.",
          "Cuidamos nuestras herramientas y equipo para que estén listos cuando los necesitemos.",
          "Hacemos preguntas cuando no estamos seguros de la forma correcta de hacer algo, en lugar de adivinar.",
          "Recordamos que la calidad importa en todas las áreas — cómo manejamos, nuestra comunicación con los clientes, nuestros hábitos de seguridad, y mantener un espacio de trabajo limpio, por ejemplo.",
        ],
      },
      {
        type: "numbered-list",
        title: "Calidad — Discusión",
        items: [
          { num: "1", heading: "¿Cuál de estos ejemplos es fácil para ti?", body: "" },
          { num: "2", heading: "¿Cuál de estos ejemplos es más difícil para ti?", body: "" },
          { num: "3", heading: "¿Cómo se ve un “trabajo bien hecho” en tu rol?", body: "" },
        ],
      },
      {
        type: "story",
        title: "Seguridad",
        date: "Valor Fundamental 4 de 5",
        body: "Seguridad significa que todos regresan a casa de la misma forma en que llegaron al trabajo. Nuestros sitios de trabajo tienen riesgos reales, así que dependemos unos de otros para seguir prácticas seguras y cuidarnos mutuamente. Los atajos de seguridad pueden ahorrar unos minutos, pero pueden costarle a alguien su salud o su vida. Exigimos procedimientos de operación seguros para todos los puestos, pero también queremos que cuides a tus compañeros y los mantengas seguros.",
      },
      {
        type: "content",
        title: "Seguridad — En Acción",
        bullets: [
          "Usamos el equipo de protección personal requerido todas las veces, no solo cuando alguien nos está observando.",
          "Detenemos el trabajo y hablamos cuando vemos una condición o acto inseguro.",
          "Reportamos los cuasi accidentes y lesiones de inmediato para poder corregir el riesgo antes de que alguien se lastime.",
          "Nos tomamos el tiempo para hacer un trabajo de forma segura, incluso cuando tenemos un horario apretado.",
          "Cuidamos a nuestros compañeros, especialmente cuando son nuevos o están trabajando en un área desconocida.",
        ],
      },
      {
        type: "numbered-list",
        title: "Seguridad — Discusión",
        items: [
          { num: "1", heading: "¿Cuál de estos ejemplos es fácil para ti?", body: "" },
          { num: "2", heading: "¿Cuál de estos ejemplos es más difícil para ti?", body: "" },
          { num: "3", heading: "¿Qué harías si vieras a un compañero tomando un atajo de seguridad?", body: "" },
        ],
      },
      {
        type: "story",
        title: "Respeto",
        date: "Valor Fundamental 5 de 5",
        body: "Respeto significa que tratamos a cada compañero, cliente, y miembro del público de la forma en que nosotros querríamos ser tratados, sin importar su rol, procedencia, o qué tan ocupado esté el día. El respeto a menudo se define de forma diferente por diferentes personas, por eso hablamos de ello directamente en lugar de asumir que todos ya están de acuerdo en cómo se ve.",
      },
      {
        type: "content",
        title: "Respeto — En Acción",
        bullets: [
          "Escuchamos a los demás sin interrumpir, incluso cuando no estamos de acuerdo con lo que dicen.",
          "Le hablamos a nuestros compañeros de la forma en que nosotros querríamos que nos hablaran, especialmente en un momento estresante.",
          "Valoramos cada rol en el equipo, entendiendo que el trabajo solo se logra porque todos contribuyen.",
          "Cumplimos nuestra palabra y hacemos lo que decimos que vamos a hacer.",
          "Hablamos los desacuerdos directamente con la persona involucrada, en lugar de hablar de ellos a sus espaldas.",
        ],
      },
      {
        type: "numbered-list",
        title: "Respeto — Discusión",
        items: [
          { num: "1", heading: "¿Cuál de estos ejemplos es fácil para ti?", body: "" },
          { num: "2", heading: "¿Cuál de estos ejemplos es más difícil para ti?", body: "" },
          { num: "3", heading: "¿Cómo se ve el respeto para ti, y en qué podría ser diferente para otra persona del equipo?", body: "" },
        ],
      },
      {
        type: "numbered-list",
        title: "Más Allá de los Cinco Principales",
        subtitle: "Los cinco valores fundamentales anteriores son un buen resumen de cómo queremos que se comporte la gente en DTEC. Pero hay algunas reglas de cultura más “no escritas” que vale la pena mencionar.",
        items: [
          { num: "1", heading: "Invertimos en los Empleados", body: "Si quieres agregar habilidades laborales, aspirar a otro puesto, o simplemente aprender una habilidad personal como el manejo del estrés, puedes trabajar con tu supervisor o nuestro capacitador para crear un IDP — un plan de desarrollo individual. Nos encanta cuando nuestros empleados tienen metas y trabajan activamente para lograrlas." },
          { num: "2", heading: "No Hacemos Drama", body: "Todos tenemos mucho en nuestro plato, y una de las áreas donde como empresa amamos ver crecimiento es en la inteligencia emocional. No decimos que las emociones deban evitarse, pero sí queremos ver comportamientos saludables aumentando con el tiempo — los comportamientos improductivos o patrones de malas decisiones deben abordarse si quieres seguir en DTEC." },
          { num: "3", heading: "Ven Como Eres, Pero No Te Quedes Así", body: "DTEC frecuentemente ha contratado personas que han estado encarceladas, afiliadas a pandillas, o que han luchado con drogas o alcohol. Ninguna de esas cosas es un problema, si están en tu pasado. Nos interesa más en quién te estás convirtiendo. Tu vida fuera del trabajo es tuya, pero mantenemos una política de tolerancia cero para el uso de drogas y alcohol. ¿Necesitas ayuda manejando tus decisiones? Habla con tu supervisor." },
          { num: "4", heading: "La Calma Prevalece", body: "Las condiciones del sitio a veces serán difíciles, o los clientes podrán ser irrespetuosos o difíciles de tratar. Mantener la calma gana porque a largo plazo superamos estos retos y seguimos adelante. Tomar un paso atrás para analizar nuestras opciones, u obtener otras opiniones, nos ayuda a superar el momento de manera constructiva." },
        ],
      },
      {
        type: "closing",
        message: "Confianza · Trabajo en Equipo\nCalidad · Seguridad · Respeto",
        sub: "Estos valores solo importan si los vivimos — en el sitio de trabajo, con los clientes, y entre nosotros. Bienvenido al equipo.",
        footer: "DTEC — Down to Earth Compliance  |  Valores Fundamentales Completo",
      },
    ],
  },

  // ── MODULE 00 — EN ──────────────────────────────────────────────────────
  {
    id: "00-en",
    moduleNum: 0,
    lang: "en",
    category: "stormwater",
    title: "Introduction to Stormwater",
    subtitle: "Training Module 00",
    slides: [
      {
        type: "title",
        title: "Introduction to\nStormwater",
        subtitle: "Training Module 00",
      },
      {
        type: "story",
        title: "How It All Started",
        date: "June 22, 1969 — Cleveland, Ohio",
        body: "The Cuyahoga River caught fire. Not for the first time — but this time the photos ran in Time magazine and the country finally paid attention.\n\nDecades of industrial and municipal waste had turned the river into a toxic, oil-slicked waterway. The fire lasted 30 minutes. The outrage lasted years.\n\nThree years later, Congress passed the Clean Water Act — and stormwater regulation was born.",
        image: "/images/slide7.png",
      },
      {
        type: "timeline",
        title: "A Brief History of Stormwater Regulation",
        events: [
          { year: "1948", label: "Federal Water\nPollution Control Act" },
          { year: "1972", label: "Clean Water\nAct passed" },
          { year: "1987", label: "NPDES stormwater\nprogram created" },
          { year: "1992", label: "Colorado adopts\nCDPS program" },
          { year: "Today", label: "Ongoing\nenforcement" },
        ],
        note: "1948 — The Federal Water Pollution Control Act was the first federal law to address water pollution in the U.S. It recognized the problem but gave the government almost no power to act on it. Rivers were still catching fire and cities were dumping freely into waterways. It took 24 more years — and a national environmental crisis — before Congress passed the Clean Water Act with real teeth.",
      },
      {
        type: "content",
        title: "What Is Stormwater?",
        bullets: [
          "Rain and snowmelt that flows over land instead of soaking in",
          "Picks up sediment, oil, chemicals, and debris as it travels",
          "Flows into storm drains, ditches, and directly into streams",
          "Unlike sewage, stormwater is usually NOT treated before it is discharged",
          "Construction sites are one of the leading sources of water pollution in the U.S. That's why stormwater management matters.",
        ],
        image: "/images/slide3.png",
      },
      {
        type: "stat-callout",
        title: "Why It Matters",
        stats: [
          { value: "#1", label: "Source of water quality impairment in the U.S.", detail: "Runoff carries more pollution into rivers and streams than almost anything else — and construction sites are among the worst offenders." },
          { value: "80%", label: "Of water pollution comes from land-based sources.", detail: "Most pollution doesn't come from factory pipes — it comes from rain washing across land and picking up whatever is on the ground." },
          { value: "$40K+", label: "Average fine for a single stormwater permit violation.", detail: "And daily fines can reach $25,000. One missed inspection, one uncontrolled discharge — the client pays, and so does their schedule." },
        ],
      },
      {
        type: "numbered-list",
        title: "And When It Isn't Controlled — Here's What Follows",
        items: [
          { num: "01", heading: "Notice of Violation (NOV)", body: "A formal written warning from state or local regulators — goes on the project record." },
          { num: "02", heading: "Stop-Work Order", body: "All site work halts immediately until the problem is fixed and inspected. Costs can run thousands per day." },
          { num: "03", heading: "Financial Penalties", body: "Fines can exceed $25,000 per day per violation. Repeat violations escalate fast." },
          { num: "04", heading: "Permit Revocation", body: "Lose your permit and you cannot operate. Getting it back takes time, money, and legal effort." },
        ],
      },
      {
        type: "content",
        title: "The Law That Started It All — The Clean Water Act",
        bullets: [
          "Passed in 1972 — directly in response to events like the Cuyahoga River fire — it set the national standard for controlling what goes into U.S. waterways",
          "It gave the EPA authority to require permits for any operation that discharges pollutants — including stormwater from construction sites",
          "That permit program is called NPDES — National Pollutant Discharge Elimination System. It's the backbone of stormwater regulation in the U.S.",
          "Any construction site disturbing 1 acre or more is required to get NPDES permit coverage before breaking ground — no exceptions",
          "The Clean Water Act is the legal foundation everything else is built on — federal, state, and local. Every rule you'll see in this training traces back to it.",
        ],
        image: "/images/slide11.png",
      },
      {
        type: "numbered-list",
        title: "What the Permit Requires — On Every Site",
        subtitle: "Under the NPDES program, every permitted construction site must meet four requirements. These aren't suggestions — they're conditions of the permit.",
        items: [
          { num: "01", heading: "You need a permit", body: "If a project disturbs 1 acre or more of ground, it needs permit coverage before a single shovel hits the dirt. Operating without a permit is illegal — and the client is the one on the hook." },
          { num: "02", heading: "You must use BMPs", body: "BMPs (Best Management Practices) are the physical controls that stop sediment and pollution from leaving the site — silt fence, wattles, inlet protection, and more. Installing and maintaining them is what DTEC does." },
          { num: "03", heading: "You must have a SWPPP", body: "A SWPPP (Stormwater Pollution Prevention Plan) is a written plan that maps out exactly how the site will control runoff. It must be on-site at all times and updated whenever conditions change." },
          { num: "04", heading: "You must inspect regularly", body: "Someone must walk the site every 14 days and within 24 hours after any rain of half an inch or more. Everything found — and fixed — must be written down and kept on record." },
        ],
      },
      {
        type: "process-steps",
        title: "How Colorado Runs It — CDPS",
        subtitle: "The federal government lets states run NPDES themselves. Colorado's version is CDPS (Colorado Discharge Permit System), run by CDPHE — the state health department. Here's the life of a permit:",
        steps: [
          { when: "Before you dig", action: "Submit a Notice of Intent (NOI)", detail: "The NOI (Notice of Intent) is the application filed with CDPHE for coverage under permit COR400000. Until it's approved, breaking ground is illegal." },
          { when: "While on site", action: "Maintain your SWPPP & BMPs", detail: "The SWPPP and BMPs on the client's site must stay current the entire life of the project. Inspect every 14 days and after rain. Fix what's found within required timeframes." },
          { when: "When you're done", action: "Submit a Notice of Termination (NOT)", detail: "The NOT (Notice of Termination) is filed once the site is stabilized and revegetated. It formally ends the client's permit obligations." },
        ],
      },
      {
        type: "enforcement",
        title: "So Who Actually Enforces All This?",
        columns: [
          { level: "Federal — EPA", detail: "Wrote the national rules. Rarely visits a jobsite — but can step in on major or repeat violations." },
          { level: "State — CDPHE", detail: "Runs the CDPS permit you just learned about. Inspects sites, issues NOVs, and fines up to $25,000 per day." },
          { level: "Local — City/County", detail: "MS4 (city/county storm sewer) inspectors. They visit most often, can stop work on the spot, and often have stricter rules than the state." },
        ],
        note: "Local MS4 permit holders in DTEC's work area: Denver • Aurora • Jefferson County • Adams County • CDOT — Know which jurisdiction the client's project is in.",
        footer: "Local inspectors often show up before CDPHE does — and they can shut down the project immediately.",
      },
      {
        type: "closing",
        message: "Our commitment:\nProtecting Colorado's\nwater. Every project,\nevery time.",
        sub: "Stormwater management is critical to protecting Colorado's water resources and ensuring compliance. Regular inspections, proactive communication, and proper BMPs are essential. Collaboration and communication are the keys to success.",
        footer: "DTEC — Down to Earth Compliance  |  Module 00 Complete",
      },
    ],
  },

  // ── MODULE 00 — ES ──────────────────────────────────────────────────────
  {
    id: "00-es",
    moduleNum: 0,
    lang: "es",
    category: "stormwater",
    title: "Introduccion a Aguas Pluviales",
    subtitle: "Modulo de Capacitacion 00",
    slides: [
      {
        type: "title",
        title: "Introduccion a\nAguas pluviales",
        subtitle: "Modulo de Capacitacion 00",
      },
      {
        type: "story",
        title: "Como Empezo Todo",
        date: "22 de junio de 1969 — Cleveland, Ohio",
        body: "El rio Cuyahoga se incendio. No era la primera vez — pero esta vez las fotos salieron en la revista Time y el pais por fin puso atencion.\n\nDecadas de residuos industriales y municipales habian convertido el rio en un canal toxico. El incendio duro 30 minutos. La indignacion duro anos.\n\nTres anos despues, el Congreso aprobo la Ley de Agua Limpia — y asi nacio la regulacion de aguas pluviales.",
        image: "/images/slide7.png",
      },
      {
        type: "timeline",
        title: "Un Poco de Historia",
        events: [
          { year: "1948", label: "Primera ley federal\ncontra contaminacion" },
          { year: "1972", label: "Ley de\nAgua Limpia" },
          { year: "1987", label: "Programa NPDES\npara lluvia" },
          { year: "1992", label: "Colorado adopta\nel programa CDPS" },
          { year: "Hoy", label: "Cumplimiento\nactivo" },
        ],
        note: "1948 — La primera ley federal contra la contaminacion del agua reconocio el problema pero no le dio poder real al gobierno para actuar. Los rios seguian incendiandose y las ciudades tiraban desechos libremente. Pasaron 24 anos — y una crisis ambiental nacional — antes de que el Congreso aprobara la Ley de Agua Limpia con dientes de verdad.",
      },
      {
        type: "content",
        title: "Que son las Aguas Pluviales?",
        bullets: [
          "Es la lluvia y el deshielo que corre por el suelo en lugar de absorberse",
          "Recoge tierra, aceite, quimicos y basura mientras fluye",
          "Va a parar a desagues, zanjas y directamente a los rios",
          "A diferencia de las aguas negras, las aguas pluviales generalmente NO son tratadas antes de descargarse",
          "Los sitios de construccion son una de las principales fuentes de contaminacion del agua en EE.UU. Por eso importa el manejo de las aguas pluviales.",
        ],
        image: "/images/slide3.png",
      },
      {
        type: "stat-callout",
        title: "Por Que Es Importante",
        stats: [
          { value: "#1", label: "Causa principal de contaminacion del agua en EE.UU.", detail: "El agua que corre arrastra mas contaminacion a rios y arroyos que casi cualquier otra cosa — y los sitios de construccion son de los peores." },
          { value: "80%", label: "De la contaminacion del agua viene de fuentes en tierra.", detail: "La mayoria no viene de tubos de fabricas — viene de la lluvia que corre por el suelo y arrastra lo que encuentra." },
          { value: "$40K+", label: "Multa promedio por una sola violacion al permiso.", detail: "Y las multas diarias pueden llegar a $25,000. Una inspeccion olvidada, una descarga sin control — el cliente paga, y su calendario tambien." },
        ],
      },
      {
        type: "numbered-list",
        title: "Y Cuando No Se Controla — Esto Es Lo Que Sigue",
        items: [
          { num: "01", heading: "Aviso de Violacion (NOV)", body: "Un aviso formal por escrito del estado o la ciudad — queda en el expediente del proyecto." },
          { num: "02", heading: "Orden de Paro de Obra", body: "Todo el trabajo en el sitio se detiene hasta que se corrija el problema. Puede costar miles de dolares por dia." },
          { num: "03", heading: "Multas Economicas", body: "Las multas pueden pasar de $25,000 por dia por violacion. Las violaciones repetidas aumentan rapido." },
          { num: "04", heading: "Cancelacion del Permiso", body: "Sin permiso no se puede trabajar. Recuperarlo toma tiempo, dinero y tramites legales." },
        ],
      },
      {
        type: "content",
        title: "La Ley Que Empezo Todo — La Ley de Agua Limpia",
        bullets: [
          "Aprobada en 1972 — como respuesta directa a eventos como el incendio del rio Cuyahoga — establecio la norma nacional para proteger los rios y lagos de EE.UU.",
          "Le dio poder a la EPA para exigir permisos a cualquier operacion que descargue contaminantes — incluyendo aguas pluviales de sitios de construccion",
          "Ese programa de permisos se llama NPDES — National Pollutant Discharge Elimination System. Es la columna vertebral de la regulacion de aguas pluviales en EE.UU.",
          "Todo sitio de construccion que mueva 1 acre o mas debe tener cobertura NPDES antes de empezar — sin excepciones",
          "La Ley de Agua Limpia es la base legal de todo lo demas — federal, estatal y local. Cada regla que veras en esta capacitacion viene de ahi.",
        ],
        image: "/images/slide11.png",
      },
      {
        type: "numbered-list",
        title: "Lo Que Exige el Permiso — En Cada Sitio",
        subtitle: "Bajo el programa NPDES, todo sitio con permiso debe cumplir cuatro requisitos. No son sugerencias — son condiciones del permiso.",
        items: [
          { num: "01", heading: "Necesitas un permiso", body: "Si un proyecto mueve 1 acre o mas de terreno, necesita cobertura de permiso antes de meter una sola pala. Operar sin permiso es ilegal — y el cliente es el responsable." },
          { num: "02", heading: "Tienes que usar BMPs", body: "Los BMPs (Best Management Practices) son los controles fisicos que evitan que el sedimento salga del sitio — barrera de sedimento, wattles, proteccion de coladeras y mas. Instalarlos y mantenerlos es el trabajo de DTEC." },
          { num: "03", heading: "Necesitas un SWPPP", body: "El SWPPP (Stormwater Pollution Prevention Plan) es un plan escrito que explica exactamente como el sitio va a controlar el agua. Debe estar en obra en todo momento y actualizarse cuando cambian las condiciones." },
          { num: "04", heading: "Tienes que inspeccionar seguido", body: "Alguien debe recorrer el sitio cada 14 dias y dentro de las 24 horas despues de media pulgada de lluvia o mas. Todo lo que se encuentre — y se corrija — debe quedar por escrito." },
        ],
      },
      {
        type: "process-steps",
        title: "Como Lo Maneja Colorado — CDPS",
        subtitle: "El gobierno federal deja que los estados manejen NPDES por su cuenta. La version de Colorado es CDPS (Colorado Discharge Permit System), administrada por CDPHE — el departamento de salud del estado. Asi es la vida de un permiso:",
        steps: [
          { when: "Antes de excavar", action: "Presenta un NOI (Aviso de Intencion)", detail: "El NOI (Notice of Intent) es la solicitud que se presenta con CDPHE para cobertura bajo el permiso COR400000. Hasta que sea aprobado, es ilegal empezar a excavar." },
          { when: "Mientras estas en obra", action: "Mantiene tu SWPPP y tus BMPs", detail: "El SWPPP y los BMPs del sitio del cliente deben estar al dia durante todo el proyecto. Inspecciona cada 14 dias y despues de Lluvia o Nieve. Corrige lo que se encuentre a tiempo." },
          { when: "Cuando terminas", action: "Presenta un NOT (Aviso de Terminacion)", detail: "El NOT (Notice of Termination) se presenta una vez que el sitio esta estabilizado y revegetado (70%). Cierra formalmente las obligaciones del permiso del cliente." },
        ],
      },
      {
        type: "enforcement",
        title: "Entonces, Quien Hace Cumplir Todo Esto?",
        columns: [
          { level: "Federal — EPA", detail: "Escribio las reglas nacionales. Raramente visita una obra — pero puede intervenir en violaciones graves o repetidas." },
          { level: "Estatal — CDPHE", detail: "Maneja el permiso CDPS que acabas de conocer. Inspecciona sitios, emite NOVs y multa hasta $25,000 por dia." },
          { level: "Local — Ciudad/Condado", detail: "Inspectores MS4 (drenaje pluvial de ciudad/condado). Son los que mas visitan, pueden parar la obra en el momento y muchas veces tienen reglas mas estrictas que el estado." },
        ],
        note: "Ciudades con permiso MS4 en el area de trabajo de DTEC: Denver • Aurora • Condado Jefferson • Condado Adams • CDOT — Hay que saber en que jurisdiccion esta el proyecto del cliente.",
        footer: "Los inspectores locales muchas veces llegan antes que CDPHE — y pueden parar la obra en el acto.",
      },
      {
        type: "closing",
        message: "Nuestro compromiso:\nProtegiendo el agua\nde Colorado.\nCada proyecto, siempre.",
        sub: "El manejo del aguas pluviales es clave para proteger los recursos hidricos de Colorado y garantizar el cumplimiento. Las inspecciones regulares, la comunicacion proactiva y los BMPs correctos son esenciales. La colaboracion y la comunicacion son la clave del exito.",
        footer: "DTEC — Down to Earth Compliance  |  Modulo 00 Completo",
      },
    ],
  },

  // ── MODULE 02 — EN ──────────────────────────────────────────────────────
  {
    id: "02-en",
    moduleNum: 2,
    lang: "en",
    category: "stormwater",
    title: "Silt Fence Installation: Trencher Method",
    subtitle: "Colorado specs, installation steps, inspection & maintenance",
    slides: [
      {
        type: "title",
        title: "Silt Fence Installation:\nTrencher Method",
        subtitle: "Colorado specs, installation steps, inspection & maintenance",
      },
      {
        type: "section-divider",
        sectionNum: 1,
        title: "Materials & Specifications",
        subtitle: "Colorado / CDOT M&S Standards",
      },
      {
        type: "content",
        title: "Silt Fence Material Specifications — Colorado Standard",
        bullets: [
          "Fabric: woven or nonwoven geotextile — minimum 100 lb/in tensile strength (ASTM D4632)",
          "Fabric must meet CDOT Class A or Class B filter fabric requirements",
          "Posts: 1.5\" x 1.5\" hardwood or steel T-posts — minimum 5 ft length",
          "Post spacing: maximum 6 ft on center (reduce to 4 ft on slopes >3:1)",
          "Wire backing: 14-gauge welded wire mesh required on slopes >2:1 or flow velocities >1 ft/s",
          "Height above ground: minimum 18 inches, maximum 24 inches",
          "Trench depth: minimum 6 inches — fabric keyed into trench and backfilled",
          "Reference: CDOT M&S Standard Plan M-208-1",
        ],
      },
      {
        type: "two-column",
        title: "When to Use Silt Fence — Colorado Site Conditions",
        leftTitle: "Appropriate Applications",
        leftBullets: [
          "Perimeter control along down-slope property edges",
          "Slopes up to 2:1 (H:V) with sheet flow conditions",
          "Drainage areas up to 0.25 acres per 100 ft of fence",
          "Flow depth at fence line: max 1.5 feet",
          "Linear disturbed areas — road cuts, lot grading",
          "Around stockpiles on flat to moderate slopes",
        ],
        rightTitle: "NOT Appropriate For",
        rightBullets: [
          "Concentrated flow / drainage channels",
          "Slopes steeper than 2:1 without wire backing",
          "Standing water or wet soils (use wattle or rock check dam)",
          "Drainage areas over 0.5 acres (use sediment trap instead)",
          "Areas where equipment will cross frequently",
          "High-flow events without additional upstream BMPs",
        ],
      },
      {
        type: "section-divider",
        sectionNum: 2,
        title: "Trencher Installation Steps",
        subtitle: "The DTEC method — machine trenched for consistent depth",
      },
      {
        type: "content",
        title: "Pre-Installation — Site Preparation",
        bullets: [
          "Locate and mark the fence alignment — follow the contour of the slope, not straight across",
          "Check for underground utilities before trenching — call 811 at least 3 business days prior",
          "Remove large rocks, debris, or obstructions from the fence line",
          "Identify any drainage swales or concentrated flow areas — do NOT place silt fence across them",
          "Mark the location of any required outlet structures or overflow areas",
          "Review the site SWPPP map to confirm fence alignment matches approved plan",
        ],
      },
      {
        type: "content",
        title: "Trencher Machine Setup & Operation",
        bullets: [
          "Set trencher blade depth: minimum 6 inches — measure and confirm before starting run",
          "Machine trenches a continuous slot for the fabric key-in — consistent depth is the #1 quality factor",
          "Operate trencher along marked fence line — maintain consistent speed for uniform trench",
          "Trench width: approximately 4 inches — wide enough to key in fabric and backfill firmly",
          "Stop and hand-dig around any obstacles — do not force machine through roots or rocks",
          "Inspect trench depth at start, middle, and end of each run — minimum 6\" throughout",
        ],
      },
      {
        type: "content",
        title: "Fabric Installation & Staking",
        bullets: [
          "Unroll fabric along uphill side of trench — keep fabric clean and free of tears",
          "Key fabric into trench: minimum 6 inches of fabric in trench, folded toward uphill side",
          "Backfill trench and compact firmly — use foot tamping or mechanical compactor on long runs",
          "Drive posts on downhill side of fabric, immediately adjacent to trench",
          "Post spacing: 6 ft maximum on center (4 ft on steeper slopes)",
          "Posts must be driven minimum 18 inches into the ground",
          "Attach fabric to posts using wire staples or zip ties — minimum 3 attachment points per post",
          "Height above ground: 18 inches minimum — trim or fold excess fabric",
        ],
      },
      {
        type: "image-placeholder",
        title: "Trencher Installation — Step-by-Step Photos",
        caption: "[Insert photos: trencher in operation, fabric key-in, post driving, finished installation]",
        note: "Show correct trench depth measurement and fabric attachment method",
      },
      {
        type: "section-divider",
        sectionNum: 3,
        title: "Inspection & Maintenance",
        subtitle: "Keeping silt fence performing under Colorado conditions",
      },
      {
        type: "content",
        title: "Inspection Checklist — Every 14 Days & After 0.5\" Rain",
        bullets: [
          "□  Fabric intact — no tears, holes, or bypassing at ends",
          "□  Posts plumb and firmly in ground — none leaning or pulled out",
          "□  Trench key-in intact — no undercutting or washout under fabric",
          "□  Fabric height adequate — sediment accumulation less than 1/3 of fabric height",
          "□  No concentrated flow conditions at or near fence line",
          "□  End returns present where fence meets slope or structure",
          "□  No overtopping — if overflow occurred, identify cause and add upstream BMPs if needed",
          "□  Document inspection in SWPPP log with date, inspector name, and findings",
        ],
      },
      {
        type: "content",
        title: "Maintenance & Repair",
        bullets: [
          "Sediment removal: required when accumulation reaches 1/3 of fence height (approx. 6 inches)",
          "Remove sediment by hand or small equipment — do not damage fabric",
          "Sediment must be stabilized on site — do not dump near waterways",
          "Torn or holed fabric: cut out damaged section and overlap new fabric minimum 18 inches",
          "Leaning posts: re-drive or replace — a leaning fence cannot hold back sediment",
          "Undercut fabric (water tunneling under): dig out, re-key fabric, recompact trench",
          "After major storm (1.0\" or more): full inspection and repair before next predicted storm",
        ],
      },
      {
        type: "content",
        title: "Removal & Final Stabilization",
        bullets: [
          "Silt fence may be removed when the upslope area is 70% stabilized with permanent vegetation",
          "Or when the site has received a Notice of Termination (NOT) from CDPHE",
          "Removal process: pull posts, roll up fabric, remove all hardware from site",
          "Sediment deposited on downhill side must be graded and stabilized",
          "Do not leave posts or stakes in the ground after removal",
          "Document removal in SWPPP — note date and stabilization status",
        ],
      },
      {
        type: "closing",
        message: "Installed Right, Maintained Right — Every Time",
        sub: "A properly trenched and staked silt fence is your first line of defense. Don't cut corners on depth or staking — the inspector will find it, and so will the next rainstorm.",
      },
    ],
  },

  // ── MODULE 02 — ES ──────────────────────────────────────────────────────
  {
    id: "02-es",
    moduleNum: 2,
    lang: "es",
    category: "stormwater",
    title: "Instalación de Cerca de Sedimentos: Método de Trinchera",
    subtitle: "Especificaciones de Colorado, pasos de instalación, inspección y mantenimiento",
    slides: [
      {
        type: "title",
        title: "Instalación de Cerca de Sedimentos:\nMétodo de Máquina Trinchera",
        subtitle: "Especificaciones de Colorado, pasos de instalación, inspección y mantenimiento",
      },
      {
        type: "section-divider",
        sectionNum: 1,
        title: "Materiales y Especificaciones",
        subtitle: "Estándares de Colorado / CDOT M&S",
      },
      {
        type: "content",
        title: "Especificaciones de Materiales para Silt Fence — Estándar Colorado",
        bullets: [
          "Tela: geotextil tejido o no tejido — resistencia a la tracción mínima de 100 lb/pulg (ASTM D4632)",
          "La tela debe cumplir con los requisitos de tela filtrante Clase A o Clase B de CDOT",
          "Postes: madera dura 1.5\" x 1.5\" o postes T de acero — longitud mínima de 5 pies",
          "Espaciado de postes: máximo 6 pies entre centros (reducir a 4 pies en pendientes >3:1)",
          "Malla de alambre: malla de alambre soldado calibre 14 requerida en pendientes >2:1",
          "Altura sobre el suelo: mínimo 18 pulgadas, máximo 24 pulgadas",
          "Profundidad de zanja: mínimo 6 pulgadas — tela anclada en zanja y rellenada",
          "Referencia: Plan Estándar CDOT M&S M-208-1",
        ],
      },
      {
        type: "section-divider",
        sectionNum: 2,
        title: "Pasos de Instalación con Máquina Trinchera",
        subtitle: "El método DTEC — zanja mecánica para profundidad uniforme",
      },
      {
        type: "content",
        title: "Pre-Instalación — Preparación del Sitio",
        bullets: [
          "Localizar y marcar la alineación de la cerca — seguir el contorno de la pendiente",
          "Verificar servicios subterráneos antes de trinchear — llamar al 811 al menos 3 días hábiles antes",
          "Remover rocas grandes, escombros u obstrucciones de la línea de cerca",
          "Identificar cunetas de drenaje o áreas de flujo concentrado — NO colocar silt fence en ellas",
          "Marcar la ubicación de cualquier estructura de salida requerida",
          "Revisar el mapa del SWPPP para confirmar que la alineación coincide con el plan aprobado",
        ],
      },
      {
        type: "content",
        title: "Instalación de Tela y Estacado",
        bullets: [
          "Desenrollar la tela en el lado pendiente arriba de la zanja — mantener la tela limpia y sin desgarros",
          "Anclar tela en la zanja: mínimo 6 pulgadas de tela en la zanja, doblada hacia el lado pendiente arriba",
          "Rellenar la zanja y compactar firmemente — usar compactación a pie o compactador mecánico",
          "Clavar postes en el lado pendiente abajo de la tela, inmediatamente adyacente a la zanja",
          "Espaciado de postes: máximo 6 pies entre centros (4 pies en pendientes más pronunciadas)",
          "Los postes deben clavarse mínimo 18 pulgadas en el suelo",
          "Fijar la tela a los postes con grapas de alambre o amarres — mínimo 3 puntos de fijación por poste",
        ],
      },
      {
        type: "section-divider",
        sectionNum: 3,
        title: "Inspección y Mantenimiento",
        subtitle: "Manteniendo el silt fence funcionando en las condiciones de Colorado",
      },
      {
        type: "content",
        title: "Lista de Verificación de Inspección — Cada 14 Días y Después de 0.5\" de Lluvia",
        bullets: [
          "□  Tela intacta — sin desgarros, agujeros ni bypass en los extremos",
          "□  Postes a plomo y firmemente en el suelo — ninguno inclinado o arrancado",
          "□  Anclaje de zanja intacto — sin socavación ni lavado bajo la tela",
          "□  Altura de tela adecuada — acumulación de sedimento menor de 1/3 de la altura de la tela",
          "□  Sin condiciones de flujo concentrado en o cerca de la línea de cerca",
          "□  Sin desbordamiento — si ocurrió, identificar la causa y agregar BMPs aguas arriba",
          "□  Documentar la inspección en el registro del SWPPP con fecha, nombre del inspector y hallazgos",
        ],
      },
      {
        type: "content",
        title: "Mantenimiento y Reparación",
        bullets: [
          "Remoción de sedimento: requerida cuando la acumulación alcanza 1/3 de la altura de la cerca",
          "Remover sedimento a mano o con equipo pequeño — no dañar la tela",
          "El sedimento debe estabilizarse en el sitio — no tirar cerca de cursos de agua",
          "Tela rota o con agujeros: cortar la sección dañada y superponer nueva tela mínimo 18 pulgadas",
          "Postes inclinados: volver a clavar o reemplazar — una cerca inclinada no puede retener sedimento",
          "Tela socavada: desenterrar, reanchar la tela, recompactar la zanja",
          "Después de tormenta mayor (1.0\" o más): inspección completa antes de la próxima tormenta",
        ],
      },
      {
        type: "closing",
        message: "Instalado Bien, Mantenido Bien — Siempre",
        sub: "Una cerca de sedimentos correctamente zanjeada y estacada es tu primera línea de defensa. No reduzcas la profundidad ni el estacado — el inspector lo encontrará, y también lo hará la próxima tormenta.",
      },
    ],
  },

  // ── MODULE 01 — EN ──────────────────────────────────────────────────────
  {
    id: "01-en",
    moduleNum: 1,
    lang: "en",
    category: "stormwater",
    title: "Sediment vs. Erosion",
    subtitle: "Two different problems, two different fixes",
    slides: [
      {
        type: "title",
        title: "Sediment vs. Erosion",
        subtitle: "Two different problems, two different fixes",
      },
      {
        type: "story",
        title: "Why This Matters",
        body: "Erosion and sediment are not the same thing.\n\nThey are two different problems, and we fix them with two different kinds of tools. Knowing the difference is the start of every job — and the answer when an inspector asks why a BMP is where it is.",
        callout: "Get this one distinction right and the rest of the job makes sense.",
        image: "/images/sed-vs-er-site-overview.jpg",
      },
      {
        type: "content",
        title: "Erosion: The Process",
        bullets: [
          "Erosion is soil on the move — wind and water picking it up and carrying it away",
          "On construction sites, bare ground has no grass or roots holding it down — it erodes fast",
          "Rain hits bare dirt and washes it downhill",
          "Wind picks up dry soil and blows it as dust",
          "Runoff cuts small channels (rills) into slopes",
          "EROSION = THE CAUSE",
        ],
        image: "/images/sed-vs-er-gully.jpg",
      },
      {
        type: "content",
        title: "Sediment: The Material",
        bullets: [
          "Sediment is the soil that already moved — dirt, sand, and mud that erosion picked up and dropped where it doesn't belong",
          "It ends up in streets, storm inlets, and creeks — and it's the #1 pollutant leaving construction sites",
          "Even small amounts cloud water and harm aquatic life downstream",
          "SEDIMENT = THE RESULT",
        ],
        image: "/images/sed-vs-er-inlet.png",
      },
      {
        type: "content",
        title: "Not Just Soil: Other Pollutants",
        bullets: [
          "Sediment isn't the only pollutant — anything that rides off-site in runoff counts",
          "Hydraulic oil, diesel, and gas from equipment can foul storm drains and streams",
          "Even a small fuel leak can have major consequences — contain spills immediately",
          "Report any fuel or chemical spill to your supervisor right away",
        ],
        image: "/images/sed-vs-er-fuel-spill.png",
      },
      {
        type: "two-column",
        title: "Erosion Is the Action. Sediment Is the Result.",
        leftTitle: "Erosion — The Action",
        leftBullets: [
          "Soil getting carried away — you can watch it happen",
          "Dust blowing off a dry stockpile",
          "Water cutting into a slope and forming rills",
          "The process that puts soil in motion",
        ],
        rightTitle: "Sediment — The Result",
        rightBullets: [
          "What's left behind after the move",
          "The mud on the street",
          "The dirt piled around a storm inlet",
          "The cloudy brown water in the drainage ditch",
        ],
        image: "/images/sed-vs-er-rill-closeup.jpg",
      },
      {
        type: "two-column",
        title: "Two Different Kinds of BMPs",
        leftTitle: "Erosion Control — Keep Soil from Moving",
        leftBullets: [
          "Erosion control blankets (ECBs)",
          "Turf reinforcement mats (TRMs)",
          "Hydraulic mulch (hydromulch)",
          "Seeding & hydroseeding",
          "Surface roughening",
        ],
        rightTitle: "Sediment Control — Catch Soil Already Moving",
        rightBullets: [
          "Silt fence",
          "Straw wattles",
          "Heavy-duty wattles",
          "Rock socks",
          "Inlet protection",
        ],
        image: "/images/sed-vs-er-slope2.jpg",
      },
      {
        type: "content",
        title: "What It Looks Like On Site",
        bullets: [
          "Erosion: a slope failing and sliding — bare soil with nothing holding it in place",
          "Sediment: mud washing across the site, around inlets, and into streets",
          "BMPs doing their job: erosion control blanket protecting the slope, silt fence at the toe, riprap slowing concentrated flow at outlets",
        ],
        image: "/images/sed-vs-er-ecb-slope.jpg",
      },
      {
        type: "numbered-list",
        title: "If You Remember Three Things",
        items: [
          { num: "1", heading: "Erosion is the process. Sediment is the result.", body: "Soil getting carried away is erosion. The dirt out of place after the move is sediment." },
          { num: "2", heading: "Two different problems, two different BMPs.", body: "Erosion control keeps soil from moving. Sediment control catches soil already moving." },
          { num: "3", heading: "Stop erosion at the source.", body: "Stopping erosion before it starts beats chasing sediment downstream — so we always use both types of BMPs together." },
        ],
      },
      {
        type: "closing",
        message: "Erosion Is the Cause.\nSediment Is the Result.\nWe Stop Both.",
        sub: "Every BMP you install is a direct answer to one of these two problems. Know which one you're solving — and install it right.",
        footer: "DTEC — Down to Earth Compliance  |  Module 03 Complete",
      },
    ],
  },

  // ── MODULE 01 — ES ──────────────────────────────────────────────────────
  {
    id: "01-es",
    moduleNum: 1,
    lang: "es",
    category: "stormwater",
    title: "Sedimento vs. Erosion",
    subtitle: "Dos problemas diferentes, dos soluciones diferentes",
    slides: [
      {
        type: "title",
        title: "Sedimento vs. Erosion",
        subtitle: "Dos problemas diferentes, dos soluciones diferentes",
      },
      {
        type: "story",
        title: "Por Que Importa Esto",
        body: "La erosion y el sedimento no son lo mismo.\n\nSon dos problemas diferentes, y los arreglamos con dos tipos de herramientas diferentes. Saber la diferencia es el inicio de cada trabajo — y la respuesta cuando un inspector pregunta por que un BMP esta donde esta.",
        callout: "Si entiendes esta diferencia, el resto del trabajo tiene sentido.",
        image: "/images/sed-vs-er-site-overview.jpg",
      },
      {
        type: "content",
        title: "Erosion: El Proceso",
        bullets: [
          "La erosion es tierra en movimiento — el viento y el agua levantandola y llevandosela",
          "En las obras, el suelo queda pelado sin pasto ni raices que lo sujeten — asi que se erosiona rapido",
          "La lluvia pega en la tierra pelada y la arrastra cuesta abajo",
          "El viento levanta tierra seca y la sopla como polvo",
          "El escurrimiento abre canales chicos (canalillos) en las pendientes",
          "EROSION = LA CAUSA",
        ],
        image: "/images/sed-vs-er-gully.jpg",
      },
      {
        type: "content",
        title: "Sedimento: El Material",
        bullets: [
          "El sedimento es la tierra que ya se movio — la tierra, arena y lodo que la erosion levanto y dejo donde no debe estar",
          "Va a parar a las calles, alcantarillas y arroyos — y es el contaminante numero 1 que sale de las obras",
          "Hasta cantidades pequenas enturbian el agua y danan la vida acuatica",
          "SEDIMENTO = EL RESULTADO",
        ],
        image: "/images/sed-vs-er-inlet.png",
      },
      {
        type: "content",
        title: "No Solo Tierra: Otros Contaminantes",
        bullets: [
          "El sedimento no es el unico contaminante — todo lo que se va de la obra con el agua cuenta",
          "El aceite hidraulico, diesel y gasolina de la maquinaria pueden ensuciar alcantarillas y arroyos",
          "Hasta una fuga pequena puede tener grandes consecuencias — contiene los derrames de inmediato",
          "Reporta cualquier derrame de combustible o quimico a tu supervisor de inmediato",
        ],
        image: "/images/sed-vs-er-fuel-spill.png",
      },
      {
        type: "two-column",
        title: "La Erosion es la Accion. El Sedimento es el Resultado.",
        leftTitle: "Erosion — La Accion",
        leftBullets: [
          "La tierra que se esta llevando — lo puedes ver pasar",
          "Polvo soplando de una pila de tierra seca",
          "El agua abriendo la pendiente y formando canalillos",
          "El proceso que pone la tierra en movimiento",
        ],
        rightTitle: "Sedimento — El Resultado",
        rightBullets: [
          "Lo que queda despues del movimiento",
          "El lodo en la calle",
          "La tierra apilada alrededor de una alcantarilla",
          "El agua turbia y cafe en la cuneta",
        ],
        image: "/images/sed-vs-er-rill-closeup.jpg",
      },
      {
        type: "two-column",
        title: "Dos Tipos Diferentes de BMPs",
        leftTitle: "Control de Erosion — Evitar que la Tierra se Mueva",
        leftBullets: [
          "Mantas de control de erosion (ECBs)",
          "Tapetes de refuerzo de cesped (TRMs)",
          "Mulch hidraulico (hydromulch)",
          "Semilla e hidrosiembra",
          "Aspereado de la superficie",
        ],
        rightTitle: "Control de Sedimento — Atrapar la Tierra que ya se Mueve",
        rightBullets: [
          "Cerca de limo (silt fence)",
          "Rollos de paja (wattles)",
          "Wattles de alta resistencia",
          "Rock socks",
          "Proteccion de alcantarillas",
        ],
        image: "/images/sed-vs-er-slope2.jpg",
      },
      {
        type: "content",
        title: "Como Se Ve en la Obra",
        bullets: [
          "Erosion: una pendiente cediendo y deslizandose — suelo pelado sin nada que lo sujete",
          "Sedimento: lodo lavandose por la obra, alrededor de alcantarillas y hacia las calles",
          "BMPs haciendo su trabajo: manta de control de erosion protegiendo la pendiente, silt fence al pie, riprap frenando el flujo concentrado en las salidas",
        ],
        image: "/images/sed-vs-er-ecb-slope.jpg",
      },
      {
        type: "numbered-list",
        title: "Si Recuerdas Tres Cosas",
        items: [
          { num: "1", heading: "La erosion es el proceso. El sedimento es el resultado.", body: "La tierra que se esta llevando es erosion. La tierra fuera de lugar despues del movimiento es sedimento." },
          { num: "2", heading: "Dos problemas diferentes, dos tipos de BMPs.", body: "El control de erosion evita que la tierra se mueva. El control de sedimento atrapa la tierra que ya se movio." },
          { num: "3", heading: "Detener la erosion en el origen.", body: "Detener la erosion antes de que empiece es mejor que perseguir el sedimento despues — por eso siempre usamos los dos tipos de BMPs juntos." },
        ],
      },
      {
        type: "closing",
        message: "La Erosion es la Causa.\nEl Sedimento es el Resultado.\nNosotros Detenemos Ambos.",
        sub: "Cada BMP que instalas es la respuesta directa a uno de estos dos problemas. Sabe cual estas resolviendo — e instalalo bien.",
        footer: "DTEC — Down to Earth Compliance  |  Modulo 03 Completo",
      },
    ],
  },

  // ── FIELD OPS — READING BMP DRAWINGS — EN ────────────────────────────────
  {
    id: "field-bmp-en",
    moduleNum: 0,
    lang: "en",
    category: "field-ops",
    title: "Reading BMP Plans & Drawings",
    subtitle: "Field Operations Training",
    slides: [
      {
        type: "title",
        title: "Reading BMP\nPlans & Drawings",
        subtitle: "How to find your BMPs on a construction plan set — the cover sheet, the legend, the scale, and the site itself.",
      },
      {
        type: "content",
        title: "The Cover Page — Anatomy of a Plan Set",
        bullets: [
          "Every plan set starts with a cover sheet. Before you read anything else, find these six things:",
          "1. Project name & address — who, and where",
          "2. Vicinity map — cross streets nearby",
          "3. Sheet list table — way to each section",
          "4. Project team — who to call with questions",
          "5. Title block — sheet title, dates, revisions",
          "6. Sheet number — bottom-right, every page",
        ],
        image: "/images/bmp-cover-sheet.png",
      },
      {
        type: "numbered-list",
        title: "Step 1 · Get Yourself Oriented",
        items: [
          { num: "1", heading: "Align with true North", body: "Stand on site and match your position to the plan's North arrow — usually near the legend or title block." },
          { num: "2", heading: "Pick a fixed landmark", body: "A building corner, utility pole, or access road that appears on both the plan and the site." },
          { num: "3", heading: "Match your orientation", body: "Face the same direction the landmark shows on the plan before you start reading anything else." },
        ],
      },
      {
        type: "content",
        title: "Step 2 · Find Your Location",
        bullets: [
          "The vicinity map shows the project location and nearby cross streets. It helps you visualize where the site sits before you ever get there.",
          "TIP: Most projects don't have a set address yet. This map is often your only way to find the location and cross streets.",
        ],
      },
      {
        type: "content",
        title: "Step 3 · Use the Sheet Index",
        bullets: [
          "The sheet index lists every sheet in the set with its number and title. This is your way to find the section you need — fast.",
          "TIP: Not every plan set says \"Stormwater.\" Also look for \"BMP\" or \"Erosion Control\" in the sheet titles.",
          "In this example, the stormwater sheets run from C-9 through C-20.",
        ],
      },
      {
        type: "content",
        title: "Step 4 · Find the Sheet Number",
        bullets: [
          "Every page has a sheet number in the title block, bottom-right corner. It tells you exactly where you are in the set — and lets you cross-reference other sheets.",
          "Bottom-right corner of every page, no exceptions.",
        ],
        image: "/images/bmp-sheet-number.png",
      },
      {
        type: "content",
        title: "Step 5 · Read the BMP Legend",
        bullets: [
          "The legend translates each symbol into a real BMP. Familiarize yourself with the symbols before you walk the site — every install on the plan is drawn with one of these.",
          "Exact symbols can vary by engineer — always check the legend on your specific plan set, not just your memory of a past one.",
        ],
        image: "/images/bmp-legend.png",
      },
      {
        type: "enforcement",
        title: "Step 6 · Boundaries — LOC vs. LOD",
        columns: [
          { level: "LOC — Limits of Construction", detail: "Defines where all construction work and operations must stay to maintain control and stay compliant with the site plan." },
          { level: "LOD — Limits of Disturbance", detail: "Outlines where any potential disturbance — clearing, grading, or temporary access — might occur." },
        ],
        note: "Active work must stay inside the LOC. LOD marks the outer edge of any possible disturbance.",
      },
      {
        type: "content",
        title: "Step 7 · Read the Scale",
        bullets: [
          "The scale shows the ratio between measurements on the plan and real-world distance. It's usually near the title block or legend.",
          "WORKED EXAMPLE — Scale: 1\" = 40'. Measured on plan: 2 inches. Real distance: 2\" × 40' = 80 feet.",
          "Measure the desired distance on the plan with a scale ruler, then multiply by the scale factor to get the actual distance.",
        ],
      },
      {
        type: "content",
        title: "Putting It Together · Example 1 — Perimeter Controls",
        bullets: [
          "Construction Fence and Silt Fence run together along the Limits of Construction on the north and west sides.",
          "Two Inlet Protections sit near the existing water main and fire hydrant marked for removal.",
          "The legend on this sheet is your key — confirm each symbol before you install.",
        ],
        image: "/images/bmp-example-perimeter.png",
      },
      {
        type: "content",
        title: "Putting It Together · Example 2 — Access & Washout Controls",
        bullets: [
          "Rock Socks line the east perimeter, along the site road.",
          "Vehicle Tracking Control pads sit at two access points on the east side.",
          "A Concrete Washout Area sits north of each VTC pad.",
          "Silt Fence continues along the west perimeter, following the Limits of Construction.",
        ],
        image: "/images/bmp-example-access-washout.png",
      },
      {
        type: "content",
        title: "Putting It Together · Example 3 — Erosion Control Blanket",
        bullets: [
          "ECB covers the graded slope face to hold soil in place until vegetation establishes.",
          "The LOC boundary follows the top and toe of the slope, tying into the grading limits.",
          "ECB goes down before seeding — it protects the seed bed as much as the soil underneath.",
        ],
        image: "/images/bmp-example-ecb.png",
      },
      {
        type: "numbered-list",
        title: "Quick Reference · Before You Walk the Site",
        items: [
          { num: "1", heading: "Orient yourself", body: "Match the plan's North arrow to true North." },
          { num: "2", heading: "Find your sheets", body: "Use the sheet index — check \"BMP\" and \"Erosion Control\" too." },
          { num: "3", heading: "Check the legend", body: "Know your symbols before you're standing on site." },
          { num: "4", heading: "Read the scale", body: "Measure real distances off the plan." },
          { num: "5", heading: "Locate your BMPs", body: "Confirm what's on site matches what's on the plan." },
        ],
      },
      {
        type: "closing",
        message: "Reading the Plan Right\nthe First Time Means\nFewer Surprises",
        sub: "Orient yourself, find your sheets, check the legend, read the scale, and locate your BMPs before you start work.",
        footer: "DTEC — Colorado Erosion Control & Stormwater Management  |  Module Complete",
      },
    ],
  },

  // ── FIELD OPS — READING BMP DRAWINGS — ES ────────────────────────────────
  {
    id: "field-bmp-es",
    moduleNum: 0,
    lang: "es",
    category: "field-ops",
    title: "Como Leer Planos y Dibujos de BMPs",
    subtitle: "Capacitacion de Operaciones de Campo",
    slides: [
      {
        type: "title",
        title: "Como Leer Planos\ny Dibujos de BMPs",
        subtitle: "Como encontrar tus BMPs en un juego de planos de construccion: la portada, la leyenda, la escala y el sitio mismo.",
      },
      {
        type: "content",
        title: "La Hoja de Portada — Partes de un Juego de Planos",
        bullets: [
          "Todo juego de planos empieza con una hoja de portada. Antes de leer cualquier otra cosa, busca estas seis cosas:",
          "1. Nombre y direccion del proyecto — quien y donde",
          "2. Mapa de ubicacion — calles cercanas",
          "3. Tabla de hojas — tu guia para cada seccion",
          "4. Equipo del proyecto — a quien llamar con preguntas",
          "5. Bloque de titulo — titulo de hoja, fechas, revisiones",
          "6. Numero de hoja — abajo a la derecha, cada pagina",
        ],
        image: "/images/bmp-cover-sheet.png",
      },
      {
        type: "numbered-list",
        title: "Paso 1 · Orientate en el Sitio",
        items: [
          { num: "1", heading: "Alineate con el norte real", body: "Parate en el sitio y ajusta tu posicion con la flecha del norte del plano. Casi siempre esta cerca de la leyenda o del bloque de titulo." },
          { num: "2", heading: "Escoge un punto fijo", body: "Una esquina de edificio, un poste de luz o un camino de acceso que salga tanto en el plano como en el sitio." },
          { num: "3", heading: "Acomoda tu orientacion", body: "Mira hacia la misma direccion que muestra ese punto en el plano antes de empezar a leer otra cosa." },
        ],
      },
      {
        type: "content",
        title: "Paso 2 · Encuentra tu Ubicacion",
        bullets: [
          "El mapa de ubicacion muestra donde esta el proyecto y las calles cercanas. Te ayuda a ubicar el sitio antes de llegar.",
          "TIP: Muchos proyectos todavia no tienen direccion. Este mapa suele ser la unica forma de encontrar la ubicacion y las calles cercanas.",
        ],
      },
      {
        type: "content",
        title: "Paso 3 · Usa la Tabla de Hojas",
        bullets: [
          "La tabla de hojas enlista cada hoja del juego con su numero y su titulo. Es la forma mas rapida de encontrar la seccion que necesitas.",
          "TIP: No todos los planos dicen \"Stormwater\" (aguas pluviales). Tambien busca \"BMP\" o \"Erosion Control\" en los titulos de las hojas.",
          "En este ejemplo, las hojas de aguas pluviales van de la C-9 a la C-20.",
        ],
      },
      {
        type: "content",
        title: "Paso 4 · Encuentra el Numero de Hoja",
        bullets: [
          "Cada pagina trae un numero de hoja en el bloque de titulo, abajo a la derecha. Te dice en que parte del juego estas y te deja cruzar informacion con otras hojas.",
          "Abajo a la derecha en cada pagina, sin excepcion.",
        ],
        image: "/images/bmp-sheet-number.png",
      },
      {
        type: "content",
        title: "Paso 5 · Lee la Leyenda de BMP",
        bullets: [
          "La leyenda traduce cada simbolo a un BMP real. Familiarizate con los simbolos antes de caminar el sitio: cada instalacion del plano se dibuja con uno de estos.",
          "Los simbolos cambian segun el ingeniero. Siempre revisa la leyenda de tu juego de planos, no te confies de lo que recuerdas de otro trabajo.",
        ],
        image: "/images/bmp-legend.png",
      },
      {
        type: "enforcement",
        title: "Paso 6 · Limites — LOC vs. LOD",
        columns: [
          { level: "LOC — Limits of Construction (Limites de Construccion)", detail: "Marca donde se debe quedar todo el trabajo y las operaciones de construccion, para mantener el control y cumplir con el plano del sitio." },
          { level: "LOD — Limits of Disturbance (Limites de Alteracion)", detail: "Marca donde puede haber alteracion: despalme, nivelacion o acceso temporal." },
        ],
        note: "El trabajo activo se queda dentro del LOC. El LOD marca el borde exterior de cualquier alteracion posible.",
      },
      {
        type: "content",
        title: "Paso 7 · Lee la Escala",
        bullets: [
          "La escala muestra la relacion entre las medidas del plano y la distancia real. Casi siempre esta cerca del bloque de titulo o de la leyenda.",
          "EJEMPLO RESUELTO — Escala: 1\" = 40'. Medido en el plano: 2 pulgadas. Distancia real: 2\" × 40' = 80 pies.",
          "Mide en el plano la distancia que quieres con una regla de escala y luego multiplicala por el factor de escala para sacar la distancia real.",
        ],
      },
      {
        type: "content",
        title: "Juntando Todo · Ejemplo 1 — Controles de Perimetro",
        bullets: [
          "La CF (Construction Fence, cerca de construccion) y la SF (Silt Fence, cerca de limo) van juntas por los Limits of Construction en los lados norte y oeste.",
          "Dos IP (Inlet Protection, proteccion de entrada de alcantarilla) quedan cerca de la linea de agua y del hidrante marcados para retirar.",
          "La leyenda de esta hoja es tu clave: confirma cada simbolo antes de instalar.",
        ],
        image: "/images/bmp-example-perimeter.png",
      },
      {
        type: "content",
        title: "Juntando Todo · Ejemplo 2 — Controles de Acceso y Lavado",
        bullets: [
          "Los RS (Rock Sock, salchicha de roca) van por el perimetro este, junto al camino del sitio.",
          "Los VTC (Vehicle Tracking Control, control de arrastre de llantas) van en dos accesos del lado este.",
          "Un CWA (Concrete Washout Area, area de lavado de concreto) queda al norte de cada VTC.",
          "La SF sigue por el perimetro oeste, siguiendo los Limits of Construction.",
        ],
        image: "/images/bmp-example-access-washout.png",
      },
      {
        type: "content",
        title: "Juntando Todo · Ejemplo 3 — Erosion Control Blanket (Manta)",
        bullets: [
          "El ECB (Erosion Control Blanket, manta de control de erosion) cubre la cara del talud nivelado para detener el suelo hasta que crezca la vegetacion.",
          "El limite LOC sigue la corona y el pie del talud, ligandose con los limites de nivelacion.",
          "El ECB se coloca antes de la siembra: protege la cama de semilla igual que al suelo de abajo.",
        ],
        image: "/images/bmp-example-ecb.png",
      },
      {
        type: "numbered-list",
        title: "Referencia Rapida · Antes de Caminar el Sitio",
        items: [
          { num: "1", heading: "Orientate", body: "Alinea la flecha del norte del plano con el norte real." },
          { num: "2", heading: "Encuentra tus hojas", body: "Usa la tabla de hojas. Tambien busca \"BMP\" y \"Erosion Control\"." },
          { num: "3", heading: "Revisa la leyenda", body: "Conoce tus simbolos antes de estar parado en el sitio." },
          { num: "4", heading: "Lee la escala", body: "Mide distancias reales en el plano." },
          { num: "5", heading: "Ubica tus BMP", body: "Confirma que lo del sitio coincida con lo del plano." },
        ],
      },
      {
        type: "closing",
        message: "Leer Bien el Plano\nla Primera Vez\nSignifica Menos Sorpresas",
        sub: "Orientate, encuentra tus hojas, revisa la leyenda, lee la escala y ubica tus BMP antes de empezar el trabajo.",
        footer: "DTEC — Down to Earth Compliance  |  Modulo Completo",
      },
    ],
  },
];

export function getModule(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

export function getModulesByNum(num: number): Module[] {
  return modules.filter((m) => m.moduleNum === num);
}
