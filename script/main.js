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
          data:'',
          trasmesso: true
          },
          {
          testo:'Non so, forse questa primavera.',
          data:'',
          trasmesso: false
          }
        ]
      },
      {
        avatar: 'img/avatar_2.jpg',
        nameContact: 'Fabio',
        ultimoAccesso: 'Ultimo accesso:',
        messaggio: [
          {
          testo:'AJJDASDJASJDADJASJ',
          data:'',
          trasmesso: false
          },
          {
          testo:'AWEQEQfsdsfsadaaASJ',
          data:'',
          trasmesso: true
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
          trasmesso: true/false
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
          trasmesso: true/false
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
          trasmesso: true/false
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
          trasmesso: true/false
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
          trasmesso: true/false
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
          trasmesso: true/false
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

       this.contactList[this.userChatIndex].messaggio.forEach(element =>
        this.testoChat.push(element.testo))
       this.contactList[this.userChatIndex].messaggio.forEach(element =>
        this.isTransmit= (element.trasmesso))
    }
  }
})
