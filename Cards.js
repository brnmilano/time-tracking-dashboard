const data = [
    {
      "title": "Work ...",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play ...",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study ...",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise ...",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social  ...",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "img": "./IMG/icon-play.svg",
      "title": "Self Care ...",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];

  const cards = document.getElementById('cards-container')

  function getImg(title) {
    
  }

  function getName(timeframe) {
    switch (timeframe) {
      case 'daily':
        return 'Yesterday'

      case 'weekly':
        return 'Last Week'

      default:
        return 'Last Month'
    }
  }

  function renderCards(timeframe) {
    cards.innerHTML = ''
    data.forEach((item) => {
      const title = item.title;
      const info = item.timeframes[timeframe];

      const topCard = document.createElement('div')
      topCard.className = 'card'
      topCard.innerHTML = `
        
      <div class="top-card">
        <img class="img" src="./IMG/icon-play.svg" alt="">
      </div>
        
      `

      
      const card = document.createElement('div')
      card.className = 'card-content'
      card.innerHTML = `
        <div>
         <h2>${title}</h2>
       </div>
        <div>
          <h1>${info.current}Hrs</h1>
        </div>
        <div>
          <p>${getName(timeframe)} - ${info.previous}Hrs</p>
        </div>
      `
      topCard.appendChild(card)
      cards.appendChild(topCard)

    })
  }

  renderCards('daily')