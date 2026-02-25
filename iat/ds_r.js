define(['questAPI'], function (Quest) {
    //Note - this questionnaire is used for all demo studies.  Don't make 
    // weight task specific changes to it.
    var API = new Quest();
    var isTouch = API.getGlobal().isTouch;
    const pageText1 =
        `<div style="margin: 15px;">
            <h1>Lūdzu atzīmē, cik tu piekrīti katram no sekojošajiem apgalvojumiem, vai cik patiesi tie ir par tevi.</h1>
        </div>`;
    const pageText2 =
        `<div style="margin: 15px;">
            <h1>Cik pretīga tev šķistu katra no sekojošajām situācijām?</h1>
        </div>`;
    /**
    * Settings
    */
    API.addSettings('logger', { pulse: 3 });

    /**
    * Page prototype
    */
    API.addPagesSet('piekritu', {
        noSubmit: false, //Change to true if you don't want to show the submit button.
        submitText: "Tālāk",
        v1style: 2,
        decline: false,
        declineText: isTouch ? 'Decline' : 'Decline to Answer',
        autoFocus: true,
        header: 'Riebuma skala (DS-R)',
        text: pageText1,
        numbered: false,
        progressBar: isTouch ? 'Page <%= pagesMeta.number %> out of 2' : 'Page <%= pagesMeta.number %> out of 2'
    });
    API.addPagesSet('pretigi', {
        noSubmit: false, //Change to true if you don't want to show the submit button.
        submitText: "Tālāk",
        v1style: 2,
        decline: false,
        declineText: isTouch ? 'Decline' : 'Decline to Answer',
        autoFocus: true,
        header: 'Riebuma skala (DS-R)',
        text: pageText2,
        numbered: false,
        progressBar: isTouch ? 'Page <%= pagesMeta.number %> out of 2' : 'Page <%= pagesMeta.number %> out of 2'
    });
    /**
    * Question prototypes
    */
    API.addQuestionsSet('slider7',{
        type: 'slider',
        stem: 'Piemērs',
        required: true,
        min:1,
        max:7,
        steps:7,
        labels: ['Pilnībā nepiekrītu', 'Neitrāli', 'Pilnībā piekrītu']
    });
    API.addQuestionsSet('slider4-piekritu',{
        type: 'slider',
        stem: 'Piemērs',
        required: true,
        min:1,
        max:5,
        steps:5,
        labels: ['Pilnīgi nepiekrītu', 'Daļēji nepiekrītu', 'Ne piekrītu, ne nepiekrītu', 'Daļēji piekrītu', 'Pilnīgi piekrītu']
    });
    API.addQuestionsSet('slider4-pretigi',{
        type: 'slider',
        stem: 'Piemērs',
        required: true,
        min:1,
        max:5,
        steps:5,
        labels: ['Nemaz nav pretīga', 'Mazliet pretīga', 'Vidēji pretīga', 'Ļoti pretīga', 'Ārkārtīgi pretīga']
    })

    // Questions

    API.addQuestionsSet('j1',{
        inherit: 'slider4-piekritu',
        stem: '1. Noteiktos apstākļos es iespējams būtu gatavs pagaršot pērtiķu gaļu.',
        name: 'j1'
    });
    
    API.addQuestionsSet('j2',{
        inherit: 'slider4-piekritu',
        stem: '2. Man būtu nepatīkami atrasties dabas zinību stundā un redzēt burkā iekonservētu cilvēka roku.',
        name: 'j2'
    });

    API.addQuestionsSet('j3',{
        inherit: 'slider4-piekritu',
        stem: '3. Man ir nepatīkami dzirdēt, kā kāds attīra krēpām pilnu kaklu.',
        name: 'j3'
    });
    API.addQuestionsSet('j4',{
        inherit: 'slider4-piekritu',
        stem: '4. Es nekad neļauju nevienai savai ķermeņa daļai pieskarties tualetes podam publiskā tualetē.',
        name: 'j4'
    });

    API.addQuestionsSet('j5',{
        inherit: 'slider4-piekritu',
        stem: '5. Es ietu ar līkumu, lai tikai nebūtu jāiet cauri kapsētai.',
        name: 'j5'
    });

    API.addQuestionsSet('j6',{
        inherit: 'slider4-piekritu',
        stem: '6. Man tas netraucē, ja es redzu prusaku kāda cita mājā.',
        name: 'j6'
    });

     API.addQuestionsSet('j7',{
        inherit: 'slider4-piekritu',
        stem: '7. Man būtu ārkārtīgi nepatīkami pieskarties mirušam ķermenim.',
        name: 'j7'
    });

    API.addQuestionsSet('j8',{
        inherit: 'slider4-piekritu',
        stem: '8. Ja es redzu, ka kāds vemj, man paliek slikti.',
        name: 'j8'
    });

    API.addQuestionsSet('j9',{
        inherit: 'slider4-piekritu',
        stem: '9. Es visticamāk  neapmeklētu savu iecienītāko restorānu, ja uzzinātu, ka pavārs ir saaukstējies.',
        name: 'j9'
    });

    API.addQuestionsSet('j10',{
        inherit: 'slider4-piekritu',
        stem: '10. Mani nemaz nesatrauktu skatīties, kā cilvēks ar stikla aci izņem aci no dobuma.',
        name: 'j10'
    });

    API.addQuestionsSet('j11',{
        inherit: 'slider4-piekritu',
        stem: '11. Man būtu nepatīkami redzēt, kā žurka pārskrien pāri manam ceļam parkā.',
        name: 'j11'
    });

    API.addQuestionsSet('j12',{
        inherit: 'slider4-piekritu',
        stem: '12. Es labprātāk apēstu augli nekā papīra gabalu.',
        name: 'j12'
    });

    API.addQuestionsSet('j13',{
        inherit: 'slider4-piekritu',
        stem: '13. Pat ja es būtu izsalcis, es nedzertu no bļodas, kurā ir mana iecienītākā zupa, ja tā būtu maisīta ar  lietotu, bet rūpīgi nomazgātu mušu sitamo.',
        name: 'j13'
    });

    API.addQuestionsSet('j14',{
        inherit: 'slider4-piekritu',
        stem: '14. Man būtu nepatīkami gulēt jaukā viesnīcas istabā, ja es zinātu, ka iepriekšējā naktī tur no sirdslēkmes nomiris cilvēks.',
        name: 'j14'
    });

    API.addQuestionsSet('j15',{
        inherit: 'slider4-pretigi',
        stem: '15. Tu ieraugi kāpurus uz gaļas gabala ārā atkritumu spainī.',
        name: 'j15'
    });

    API.addQuestionsSet('j16',{
        inherit: 'slider4-pretigi',
        stem: '16. Tu redzi personu ēdam ābolu ar nazi un dakšu.',
        name: 'j16'
    });

    API.addQuestionsSet('j17',{
        inherit: 'slider4-pretigi',
        stem: '17. Ejot caur tuneli zem dzelzceļa sliedēm, tu saod urīna smaku.',
        name: 'j17'
    });

    API.addQuestionsSet('j18',{
        inherit: 'slider4-pretigi',
        stem: '18. Tu iedzer malku limonādes un tad saproti, ka padzēries no glāzes, no kuras jau bija dzēris tavs paziņa.',
        name: 'j18'
    });

    API.addQuestionsSet('j19',{
        inherit: 'slider4-pretigi',
        stem: '19. Tava drauga kaķis nomirst, un tev ar kailām rokām jāpaceļ tā mirušais ķermenis.',
        name: 'j19'
    });

     API.addQuestionsSet('j20',{
        inherit: 'slider4-pretigi',
        stem: '20. Tu redzi, kā kāds uzliek kečupu uz vaniļas saldējuma un apēd to.',
        name: 'j20'
    });

    API.addQuestionsSet('j21',{
        inherit: 'slider4-pretigi',
        stem: '21. Tu redzi cilvēku ar atsegtām zarnām pēc negadījuma.',
        name: 'j21'
    });

    API.addQuestionsSet('j22',{
        inherit: 'slider4-pretigi',
        stem: '22. Tu uzzini, ka kāds no taviem draugiem maina apakšveļu tikai reizi nedēļā.',
        name: 'j22'
    });

     API.addQuestionsSet('j23',{
        inherit: 'slider4-pretigi',
        stem: '23. Draugs tev piedāvā šokolādes gabaliņu, kas pēc formas izskatās kā suņa kakas.',
        name: 'j23'
    });

    API.addQuestionsSet('j24',{
        inherit: 'slider4-pretigi',
        stem: '24. Tu nejauši pieskaries kremēta cilvēka pelniem.',
        name: 'j24'
    });

    API.addQuestionsSet('j25',{
        inherit: 'slider4-pretigi',
        stem: '25. Tu grasies dzert glāzi piena, kad sajūti, ka tas ir saskābis.',
        name: 'j25'
    });

    API.addQuestionsSet('j26',{
        inherit: 'slider4-pretigi',
        stem: '26. Seksuālās izglītības stundas ietvaros tev ir jāpiepūš jauns prezervatīvs bez lubrikanta, izmantojot muti.',
        name: 'j26'
    });

    API.addQuestionsSet('j27',{
        inherit: 'slider4-pretigi',
        stem: '27. Tu staigā basām kājām pa betonu un uzkāp sliekai.',
        name: 'j27'
    });
    API.addSequence([
        {
            inherit: 'piekritu',
            questions: [{inherit:'j1'},{inherit:'j2'},{inherit:'j3'},{inherit:'j4'},{inherit:'j5'},{inherit:'j6'},{inherit:'j7'},{inherit:'j8'},{inherit:'j9'},{inherit:'j10'},{inherit:'j11'},{inherit:'j12'},{inherit:'j13'},{inherit:'j14'}]
        },
        {
            inherit: 'pretigi',
            questions: [{inherit:'j15'},{inherit:'j16'},{inherit:'j17'},{inherit:'j18'},{inherit:'j19'},{inherit:'j20'},{inherit:'j21'},{inherit:'j22'},{inherit:'j23'},{inherit:'j24'},{inherit:'j25'},{inherit:'j26'},{inherit:'j27'}]
        }
    ]);

    return API.script;
});