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
        id: 1,
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
        id: 2,
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
        id: 3,
        avatar: 'img/avatar_3.jpg',
        nameContact: 'Samuele',
        ultimoAccesso: 'Ultimo accesso:',
        messaggio: [
          {
          testo:'Buona fortuna',
          data:'',
          stato: 'ricevuto'
          }
        ]

      },
      {
        id: 4,
        avatar: 'img/avatar_4.jpg',
        nameContact: 'Luca',
        ultimoAccesso: 'Ultimo accesso:',
        messaggio: [
        {
          testo:'Ciao',
          data:'',
          stato: 'trasmesso'
         }
       ]

      },
      // {
      //   avatar: 'img/avatar_5.jpg',
      //   nameContact: 'Simone',
      //   ultimoAccesso: 'Ultimo accesso:',
      //   messaggio: [
      //     {
      //     testo:'',
      //     data:'',
      //     stato: true/false
      //     }
      //   ]
      //
      // },
      // {
      //   avatar: 'img/avatar_6.jpg',
      //   nameContact: 'Diego',
      //   ultimoAccesso: 'Ultimo accesso:',
      //   messaggio: [
      //     {
      //     testo:'',
      //     data:'',
      //     stato: true/false
      //     }
      //   ]
      //
      // },
      // {
      //   avatar: 'img/avatar_7.jpg',
      //   nameContact: 'Cristiano',
      //   ultimoAccesso: 'Ultimo accesso:',
      //   messaggio: [
      //     {
      //     testo:'',
      //     data:'',
      //     stato: true/false
      //     }
      //   ]
      //
      // },
      // {
      //   avatar: 'img/avatar_8.jpg',
      //   nameContact: 'Paul',
      //   ultimoAccesso: 'Ultimo accesso:',
      //   messaggio: [
      //     {
      //     testo:'',
      //     data:'',
      //     stato: true/false
      //     }
      //   ]
      //
      // },
    ],
    // CONTATTI FILTRATI:
    filteredContactList: [],
    // per la ricerca del contatto:
    searchText:'',
    userChatIndex: 0,
    messaggioInput:'',
    messaggioCPU: 'Perfetto',
    oldChatIndex: 0,

    // per l'attivazione della classe sugli elementi filtrati:
    indexId: 0,

  },

  methods: {
    openChat: function(index) {
      this.userChatIndex= index;
    },

    submit: function() {
      this.messaggioInput += '';
      console.log(this.messaggioInput);
      this.contactList[this.userChatIndex].messaggio.push({"testo": this.messaggioInput, "stato": "trasmesso", "data": "24/11/2020 12:00"});
      console.log(this.contactList[this.userChatIndex].messaggio.testo);

// messaggio trasmesso da computer
      // salvo lo stato dell'indice in oldChatIndex, in modo da non permettergli di cambiare se seleziono un altro utente prima di aver ricevuto la risposta
      this.oldChatIndex = this.userChatIndex;

      // setTimeout(nomeFunzione, tempo da aspettare);
      setTimeout(()=>{
      this.contactList[this.oldChatIndex].messaggio.push({"testo": this.messaggioCPU, "stato": "ricevuto", "data": "24/11/2020 12:00"})
      },3000);
      this.messaggioInput ='';
      console.log(this.messaggioInput);
    },

    filterContacts: function() {
      this.filteredContactList = this.contactList.filter( (contact) => contact.nameContact.toLowerCase().includes(this.searchText) )
    },

    updateIndex: function(id) {
      this.userChatIndex = this.contactList.findIndex( e => id === e.id)
    },

  },

})
