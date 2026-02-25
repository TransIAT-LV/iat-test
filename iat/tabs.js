define(['questAPI'], function (Quest) {
    //Note - this questionnaire is used for all demo studies.  Don't make 
    // weight task specific changes to it.
    var API = new Quest();
    var isTouch = API.getGlobal().isTouch;
    const pageText1 =
        `<div style="margin: 15px;">
            <h1>Lūdzu atzīmē, cik lielā mērā tu piekrīti katram no apgalvojumiem.</h1>
        </div>`;
    /**
    * Settings
    */
    API.addSettings('logger', { pulse: 3 });

    /**
    * Page prototype
    */
    API.addPagesSet('tabs', {
        noSubmit: false, //Change to true if you don't want to show the submit button.
        submitText: "Tālāk",
        v1style: 2,
        decline: false,
        declineText: isTouch ? 'Decline' : 'Decline to Answer',
        autoFocus: true,
        header: 'Transpersonu attieksmju un uzskatu skala (TABS)',
        text: pageText1,
        numbered: false,
        progressBar: isTouch ? 'Page <%= pagesMeta.number %> out of 1' : 'Page <%= pagesMeta.number %> out of 1'
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
        labels: ['Pilnīgi nepiekrītu', 'Pilnīgi piekrītu']
    });
    API.addQuestionsSet('slider4-piekritu',{
        type: 'slider',
        stem: 'Piemērs',
        required: true,
        min:1,
        max:4,
        steps:4,
        labels: ['Pilnībā nepiekrītu', 'Daļēji nepiekrītu', 'Daļēji piekrītu', 'Pilnībā piekrītu']
    });
    API.addQuestionsSet('slider4-pretigi',{
        type: 'slider',
        stem: 'Piemērs',
        required: true,
        min:1,
        max:4,
        steps:4,
        labels: ['Nemaz nav pretiga', 'Mazliet pretiga', 'Pretīga', 'Ļoti pretiga']
    })

    // Questions

    API.addQuestionsSet('J1_1',{
        inherit: 'slider7',
        stem: '1. Es justos ērti, savās mājās uz maltīti uzņemot transpersonu.',
        name: 'J1_1'
    });
    
    API.addQuestionsSet('J1_2',{
        inherit: 'slider7',
        stem: '2. Es justos ērti, atrodoties transpersonu grupā.',
        name: 'J1_2'
    });

    API.addQuestionsSet('J1_3',{
        inherit: 'slider7',
        stem: '3. Es justos neērti, ja mans priekšnieks būtu transpersona.',
        name: 'J1_3'
    });

    API.addQuestionsSet('J1_4',{
        inherit: 'slider7',
        stem: '4. Es justos neērti, cieši sadarbojoties ar transpersonu savā darbavietā.',
        name: 'J1_4'
    });

    API.addQuestionsSet('J1_5',{
        inherit: 'slider7',
        stem: '5. Ja es zinātu, ka kāds ir transpersona, es joprojām būtu atvērts veidot draudzību ar šo personu.',
        name: 'J1_5'
    });

    API.addQuestionsSet('J1_6',{
        inherit: 'slider7',
        stem: '6. Es justos ērti, ja mans kaimiņš būtu transpersona.',
        name: 'J1_6'
    });

    API.addQuestionsSet('J1_7',{
        inherit: 'slider7',
        stem: '7. Ja mans bērns atvestu mājās draugu, kas ir transpersona, es justos ērti, uzņemot šo cilvēku savās mājās.',
        name: 'J1_7'
    });

    API.addQuestionsSet('J1_8',{
        inherit: 'slider7',
        stem: '8. Es būtu sarūgtināts, ja kāds, ko pazīstu jau ilgu laiku, atklātu, ka agrāk bijis cita dzimuma.',
        name: 'J1_8'
    });

    API.addQuestionsSet('J1_9',{
        inherit: 'slider7',
        stem: '9. Ja es zinātu, ka kāds ir transpersona, es censtos no šīs personas izvairīties.',
        name: 'J1_9'
    });

    API.addQuestionsSet('J1_10',{
        inherit: 'slider7',
        stem: '10. Es vēlētos atteikt, ja transpersona lūgtu kļūt par manu mājas biedru.',
        name: 'J1_10'
    });

    API.addQuestionsSet('J1_11',{
        inherit: 'slider7',
        stem: '11. Es justos neērti, uzzinot, ka esmu vienatnē ar transpersonu.',
        name: 'J1_11'
    });

    API.addQuestionsSet('J1_12',{
        inherit: 'slider7',
        stem: '12. Es justos ērti, strādājot uzņēmumā, kas darbā uzņem transpersonas.',
        name: 'J1_12'
    });

    API.addQuestionsSet('J1_13',{
        inherit: 'slider7',
        stem: '13. Ja kāds, ko es pazīstu, man atklātu, ka ir transpersona, es iespējams, vairs nebūtu tik tuvs ar šo cilvēku.',
        name: 'J1_13'
    });

    API.addQuestionsSet('J1_14',{
        inherit: 'slider7',
        stem: '14. Ja es uzzinātu, ka mans ārsts ir transpersona, es vēlētos meklēt citu ārstu.',
        name: 'J1_14'
    });

    API.addQuestionsSet('J2_1',{
        inherit: 'slider7',
        stem: '15. Cilvēks, kurš nav pārliecināts, vai ir vīrietis vai sieviete, ir garīgi slims.',
        name: 'J2_1'
    });

    API.addQuestionsSet('J2_2',{
        inherit: 'slider7',
        stem: '16. Tas, vai cilvēks ir vīrietis vai sieviete, ir atkarīgs no tā, vai viņš jūtas kā vīrietis vai sieviete.',
        name: 'J2_2'
    });

    API.addQuestionsSet('J2_3',{
        inherit: 'slider7',
        stem: '17. Ja esi piedzimis kā vīrietis, nekas, ko dari, to nemainīs.',
        name: 'J2_3'
    });

    API.addQuestionsSet('J2_4',{
        inherit: 'slider7',
        stem: '18. Tas, vai persona ir vīrietis vai sieviete, ir atkarīgs vienīgi no viņa ārējiem dzimumorgāniem.',
        name: 'J2_4'
    });

    API.addQuestionsSet('J2_5',{
        inherit: 'slider7',
        stem: '19. Cilvēki ir tikai vīrieši vai sievietes, nepastāv nekas starp to.',
        name: 'J2_5'
    });

    API.addQuestionsSet('J2_6',{
        inherit: 'slider7',
        stem: '20. Ja transpersona identificējas kā sieviete, viņai būtu jābūt tiesībām precēties ar vīrieti.',
        name: 'J2_6'
    });

    API.addQuestionsSet('J2_7',{
        inherit: 'slider7',
        stem: '21. Lai gan lielākā daļa cilvēku ir vīrieši vai sievietes, pastāv arī citas identitātes.',
        name: 'J2_7'
    });

    API.addQuestionsSet('J2_8',{
        inherit: 'slider7',
        stem: '22. Visiem pieaugušajiem vajadzētu identificēties vai nu kā vīriešiem vai sievietēm.',
        name: 'J2_8'
    });

    API.addQuestionsSet('J2_9',{
        inherit: 'slider7',
        stem: '23. Bērnam, kas piedzimis ar neskaidriem dzimumorgāniem būtu jāpiešķir dzimums - vīrietis vai sieviete.',
        name: 'J2_9'
    });

    API.addQuestionsSet('J2_10',{
        inherit: 'slider7',
        stem: '24. Cilvēkam nav skaidri jābūt vīrietim vai sievietei, lai viņš būtu normāls un vesels.',
        name: 'J2_10'
    });

    API.addQuestionsSet('J3_1',{
        inherit: 'slider7',
        stem: '25. Transpersonas ir vērtīgi cilvēki neatkarīgi no tā, kā es jūtos par transpersonām.',
        name: 'J3_1'
    });

    API.addQuestionsSet('J3_2',{
        inherit: 'slider7',
        stem: '26. Pret transpersonām jāizturas ar tādu pašu cieņu kā pret jebkuru citu cilvēku.',
        name: 'J3_2'
    });

    API.addQuestionsSet('J3_3',{
        inherit: 'slider7',
        stem: '27. Man būtu nepieņemami redzēt, ka transpersona tiek ķircināta vai pret viņu slikti izturas.',
        name: 'J3_3'
    });

    API.addQuestionsSet('J3_4',{
        inherit: 'slider7',
        stem: '28. Transpersonas ir tādi paši cilvēki ar saviem izaicinājumiem kā mēs visi.',
        name: 'J3_4'
    });

    API.addQuestionsSet('J3_5',{
        inherit: 'slider7',
        stem: '29. Transpersonām jābūt vienādām iespējām iegūt dzīvesvietu kā jebkuram citam cilvēkam.',
        name: 'J3_5'
    });
    API.addSequence([
        {
            inherit: 'tabs',
            questions: [{inherit:'J1_1'},{inherit:'J1_2'},{inherit:'J1_3'},{inherit:'J1_4'},{inherit:'J1_5'},{inherit:'J1_6'},{inherit:'J1_7'},{inherit:'J1_8'},{inherit:'J1_9'},{inherit:'J1_10'},{inherit:'J1_11'},{inherit:'J1_12'},{inherit:'J1_13'},{inherit:'J1_14'},{inherit:'J2_1'},{inherit:'J2_2'},{inherit:'J2_3'},{inherit:'J2_4'},{inherit:'J2_5'},{inherit:'J2_6'},{inherit:'J2_7'},{inherit:'J2_8'},{inherit:'J2_9'},{inherit:'J2_10'},{inherit:'J3_1'},{inherit:'J3_2'},{inherit:'J3_3'},{inherit:'J3_4'},{inherit:'J3_5'}]
        }
    ]);

    return API.script;
});