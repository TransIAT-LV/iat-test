define(['questAPI'], function (Quest) {
    //Note - this questionnaire is used for all demo studies.  Don't make 
    // weight task specific changes to it.
    var API = new Quest();
    var isTouch = API.getGlobal().isTouch;
    const pageText =
        `<div>
        </div`;

    /**
    * Settings
    */
    API.addSettings('logger', { pulse: 3 });

    /**
    * Page prototype
    */
    API.addPagesSet('basicPage', {
        noSubmit: false, //Change to true if you don't want to show the submit button.
        submitText: "Tālāk",
        v1style: 2,
        decline: false,
        declineText: isTouch ? 'Decline' : 'Decline to Answer',
        autoFocus: true,
        header: 'Demogrāfiskie dati',
        text: pageText,
        numbered: false,
        progressBar: isTouch ? 'Page <%= pagesMeta.number %> out of 1' : 'Page <%= pagesMeta.number %> out of 1'
    });

    /**
    * Question prototypes
    */

    API.addQuestionsSet('basicQ', {
        decline: false,
        required: true,
        errorMsg: {
            required: isTouch ? "Lūdzu aizpildiet šo lauku!" :
                "Lūdzu aizpildiet šo lauku!"
        },
        autoSubmit: true,
        numericValues: true
    });

    API.addQuestionsSet('singleChoice', {
        inherit: 'basicQ',
        type: 'selectOne',
        help: '<%= pagesMeta.number < 10 %>',
    });

    API.addQuestionsSet('text', {
        inherit: 'basicQ',
        type: 'text',
        noSubmit: false
    });

    API.addQuestionsSet('singleChoicedrop', {
        inherit: 'basicQ',
        autoSubmit: false,
        type: 'dropdown'
    });

    API.addQuestionsSet('multiChoice', {
        inherit: 'basicQ',
        type: 'selectMulti'
    });

    API.addQuestionsSet('boolean', {
        inherit: 'basicQ',
        type: 'selectOne',
        buttons: true,
        answers: [
            { text: 'Yes', value: 1 },
            { text: 'No', value: 0 }
        ]
    });
    API.addQuestionsSet('number', {
        inherit: 'basicQ',
        type: 'textNumber',
    });
    /**
    * Actual questions
    */
    API.addQuestionsSet('age', {
        inherit: 'number',
        name: 'age',
        stem: "<b>Vecums</b> (ievadīt tikai skaitli)",
        min: 18,
        max: 100,
        required: true,
        errorMsg: {
            min: "Atļautas tikai vērtības no 18 - 100.",
            max: "Atļautas tikai vērtības no 18 - 100.",
            number: "Lūdzu ievadiet tikai skaitli."
        }

    });
    API.addQuestionsSet('education', {
        inherit: 'singleChoice',
        style: 'multiButtons',
        name: 'education',
        stem: "<b>Izglītības līmenis</b>",
        answers: [
            { text: 'Pamata', value: 1 },
            { text: 'Vidējā', value: 2 },
            { text: 'Bakalaura', value: 3 },
            { text: 'Maģistra', value: 4 },
            { text: 'Doktora', value: 5 },
        ]
    });

    API.addQuestionsSet('gender', {
        inherit: 'singleChoice',
        style: 'multiButtons',
        name: 'gender',
        stem: "<b>Dzimtes identitāte</b> <br/>  <span style='font-size:0.7em; '> <i>Cispersona</i> - cilvēks, kura dzimtes identitāte sakrīt ar dzimšanas brīdī noteikto dzimumu.<br> <i>Transpersona</i> - cilvēks, kura dzimtes identitāte atšķiras no dzimšanas brīdī noteiktā dzimuma.<br> <i>Nebināra persona</i> - cilvēks, kurš neidentificējas kā vīrietis vai sieviete. Tas iekļauj dažādas identitātes (piemēram, personas, kuru identitāte variē starp dzimtēm, „bez dzimtes” personas u.c.).</span>",
        answers: [
            { text: 'Cis-sieviete', value: 1 },
            { text: 'Cis-vīrietis', value: 2 },
            { text: 'Trans-sieviete', value: 3 },
            { text: 'Trans-vīrietis', value: 4 },
            { text: 'Nebināra persona', value: 5 },
            { text: 'Cits', value: 6 },
        ]
    });

    API.addQuestionsSet('knowsTransperson', {
        inherit: 'singleChoice',
        name: 'knowsTransperson',
        stem: "<b>Vai Jūs personīgi pazīstat kādu transpersonu vai nebināru personu?</b>",
        answers: [
            { text: 'Jā', value: 1 },
            { text: 'Nē', value: 2 }
        ]
    });
    API.addSequence([
        {
            inherit: 'basicPage',
            questions: [{ inherit: 'age' }, { inherit: 'education' }, { inherit: 'gender' }, { inherit: 'knowsTransperson' }]
        }
    ]);

    return API.script;
});