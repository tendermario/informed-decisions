var DB = {
  drugs:
    [
      { name: 'heroin',
        description: 'Heroin, also known as diamorphine among other names, is an opiate typically used as a recreational drug for its euphoric effects. Medically it is occasionally used to relieve pain and as a form of opioid replacement therapy alongside counseling. Heroin is typically injected, usually into a vein; however, it can also be smoked, snorted or inhaled. Onset of effects is usually rapid and lasts for a few hours.',
        risks: 'Overdose, death, strong withdrawal symptoms.',
        howto: 'Injection, Oral, Smoking, Insufflation, Suppository',
        tips: ['Make sure to use a sterile needle everytime.', 'Amazing stuff'],
        alerts: ['Current alert has been issued for Heroin laced with Fentynal in British Columbia']
      },
      { name: 'marijuana',
        description: 'marijuana, ',
        risks: 'Overdose, death, withdrawal symptoms.',
        howto: 'Injection, Oral, Smoking, Insufflation, Suppository',
        tips: ['Gong show', 'Amazing stuff' ],
        alerts: ['Current alert has been issued for marijuana laced with Fentynal in British Columbia']
      },
      { name: 'cocaine',
        description: 'cocaine, ',
        risks: 'Overdose, death, withdrawal symptoms.',
        howto: 'Insufflation, Suppository',
        tips: ['Gong show', 'Amazing stuff' },
        alerts: ['Current alert has been issued for cocaine laced with Fentynal in British Columbia']
      },
      { name: 'LSD',
        description: 'LSD is the best known and most researched psychedelic. It is the standard against which all other psychedelics are compared. It is active at extremely low doses and is most commonly available on blotter or in liquid form.',
        risks: 'Minor psychosis.',
        howto: 'Sublingual (under tongue)',
        tips: ['Gong show', 'Amazing stuff' },
        alerts: ['Current alert has been issued for LSD laced with Fentynal in British Columbia']
      }
    ]
  },
  locations:
    {
      bc:
      {
        vancouver: {
          alerts: ['Fentynal is everywhere'],
          resources: ['http://www.londondrugs.com/', 'http://www.vch.ca/your-health/health-topics/supervised-injection/supervised-injection', 'https://en.wikipedia.org/wiki/Downtown_Eastside']
        }
      }
    }
  };