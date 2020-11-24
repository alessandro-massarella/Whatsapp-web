const ricevuto= 'ricevuto'
const trasmesso= 'trasmesso'

const boolzapp = new Vue ({
  el: '#root',
  data: {
    // IO
    user: {
      avatar: "img/avatar_io.jpg",
      nameUser: 'Alessandro'
    },
    // LISTA CONTATTI (ARRAY)
    contactList: [
      // singolo contatto (oggetto):
      {
        avatar: 'img/avatar_1.jpg',
        nameContact: 'Michele',
        ultimoAccesso: 'Ultimo accesso:',
        messaggio: [
          {
          testo:'Ciao, quando suonerai in quel locale?',
          data:'24/11/2020 12:00',
          stato: 'ricevuto'
          },
          {
          testo:'Non so, forse questa primavera.',
          data:'24/11/2020 12:05',
          stato: 'trasmesso'
          }
        ]
      },
      {
        avatar: 'img/avatar_2.jpg',
        nameContact: 'Fabio',
        ultimoAccesso: 'Ultimo accesso:',
        messaggio: [
          {
          testo:'Ciao suonerò ad aprile',
          data:'24/11/2020 12:06',
          stato: 'trasmesso'
          },
          {
          testo:'Grazie, verrò sicuramente',
          data:'24/11/2020 12:09',
          stato: 'ricevuto'
          }
        ]

      },
      {
        avatar: 'img/avatar_3.jpg',
        nameContact: 'Samuele',
        ultimoAccesso: 'Ultimo accesso:',
        messaggio: [
          {
          testo:'',
          data:'',
          stato: true/false
          }
        ]

      },
      {
        avatar: 'img/avatar_4.jpg',
        nameContact: 'Luca',
        ultimoAccesso: 'Ultimo accesso:',
        messaggio: [
        {
          testo:'',
          data:'',
          stato: true/false
         }
       ]

      },
      {
        avatar: 'img/avatar_5.jpg',
        nameContact: 'Simone',
        ultimoAccesso: 'Ultimo accesso:',
        messaggio: [
          {
          testo:'',
          data:'',
          stato: true/false
          }
        ]

      },
      {
        avatar: 'img/avatar_6.jpg',
        nameContact: 'Diego',
        ultimoAccesso: 'Ultimo accesso:',
        messaggio: [
          {
          testo:'',
          data:'',
          stato: true/false
          }
        ]

      },
      {
        avatar: 'img/avatar_7.jpg',
        nameContact: 'Cristiano',
        ultimoAccesso: 'Ultimo accesso:',
        messaggio: [
          {
          testo:'',
          data:'',
          stato: true/false
          }
        ]

      },
      {
        avatar: 'img/avatar_8.jpg',
        nameContact: 'Paul',
        ultimoAccesso: 'Ultimo accesso:',
        messaggio: [
          {
          testo:'',
          data:'',
          stato: true/false
          }
        ]

      },
    ],

    userChatIndex: 0,
    // isActive: false,
    testoChat: [],
    isTransmit: false,

  },

  methods: {
    openChat: function(index) {
      this.userChatIndex= index;

    }
  }
})
