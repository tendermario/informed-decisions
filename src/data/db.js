var DB = {
  drugs:
    [
      { name: 'heroin',
        description: 'Heroin, also known as diamorphine among other names, is an opiate typically used as a recreational drug for its euphoric effects. Medically it is occasionally used to relieve pain and as a form of opioid replacement therapy alongside counseling. Heroin is typically injected, usually into a vein; however, it can also be smoked, snorted or inhaled. Onset of effects is usually rapid and lasts for a few hours.',
        risks: 'Overdose, death, strong withdrawal symptoms.',
        howto: 'Injection, Oral, Smoking, Insufflation, Suppository',
        tips: ['Make sure to use a sterile needle everytime.', 'Do not share needles.', 'Free sterile needles information can be found at ...'],
        alerts: ['Overdose crisis due to fentanyl laced heroin in British Columbia. ']
      },
      { name: 'cannabis',
        description: "Cannabis, a fast-growing bushy annual with dense sticky flowers, produces psychoactive cannabinoid chemicals such as THC and CBD. It is the most widely used (still mostly) illegal psychoactive and has a long history of medicinal, recreational, and industrial use. The fibrous stalks of the plant are used to produce clothing and rope. It's legal status is rapidly changing in the US and around the world from top contraband to tolerated mind-alterant along side alcohol and caffeine.",
        risks: 'Smoking can cause respiratory problems and may lead to cancer.',
        howto: 'Oral, Smoking',
        tips: [],
        alerts: []
      },
      { name: 'cocaine',
        description: 'cocaine, ',
        risks: 'Overdose, death, withdrawal symptoms.',
        howto: 'Insufflation, Suppository',
        tips: ['Gong show', 'Amazing stuff'],
        alerts: ['Overdose crisis due to fentanyl laced cocaine in British Columbia']
      },
      { name: 'LSD',
        description: 'LSD is the best known and most researched psychedelic. It is the standard against which all other psychedelics are compared. It is active at extremely low doses and is most commonly available on blotter or in liquid form.',
        risks: 'Minor psychosis.',
        howto: 'Sublingual (under tongue)',
        tips: ['Gong show', 'Amazing stuff'],
        alerts: ['NBOMEs sold as LSD/ACID. The NBOMe chemicals can cause strong effects even on a single standard hit of blotter (1/4" (6mm) square). Unlike LSD, NBOMes can cause death. NBOMe compounds are usually bitter while LSD-containing liquid or blotter has only a mild metallic flavor or no flavor at all.']
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