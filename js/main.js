var app = new Vue({
    el: '#vue-app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        contactSelected: 0,
        inputMessage: '',
        inputSearch: '',
        reply: [
            {
                message: `Ok!`
            },
            {
                message: `Oggi è una bella giornata.`
            },
            {
                message: `Mi piacciono i treni.`
            },
            {
                message: `Ho mangiato il gelato al cioccolato, era dolce, ma anche un po' salato...`
            },
            {
                message: `Ti andrebbe di raccogliere le fragole insieme a me?`
            }
        ]
    },
    methods: {
        whoIsSelected(index) {
            this.contactSelected = index;
        },
        sendMessage() {
            this.inputMessage.trim();

            if (!this.inputMessage == '' && this.inputMessage.trim().length > 0) {

                let newSentMessage = {
                    date: this.liveTime(),
                    message: this.inputMessage,
                    status: 'sent'
                };

                this.contacts[this.contactSelected].messages.push(newSentMessage);
                this.inputMessage = '';

                this.autoReply();
            }
        },
        autoReply() {
            setTimeout(() => {
                let randomMessage = this.reply[this.randomNumber(0, this.reply.length - 1)].message;
                let newReceivedMessage = {
                    date: this.liveTime(),
                    message: randomMessage,
                    status: 'received'
                };
                this.contacts[this.contactSelected].messages.push(newReceivedMessage);
            }, 1500);
        },
        runSpeechRecognition() {
            if ('webkitSpeechRecognition' in window) {
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                var recognition = new SpeechRecognition();

                recognition.onstart = function() {
                    console.log('Sto registrando')
                }
                
                recognition.onspeechend = function() {
                    console.log('Ho registrato')
                    recognition.stop();
                }

                recognition.onresult = (event) => {
                    var transcript = event.results[0][0].transcript;

                    console.log(transcript)
                    this.inputMessage = transcript;
                };

                recognition.start();
            } else {
                alert('Speech to text non disponibile, prova su un altro browser.')
            }
        },
        randomNumber(min, max) {
            const number = Math.floor(Math.random() * (max - min + 1) + min);

            return number;
        },
        messageStatus(index) {
            if (this.contacts[this.contactSelected].messages[index].status == 'sent') {
                return 'sent';
            } else {
                return 'received';
            }
        },
        deleteMessage(index) {
            this.contacts[this.contactSelected].messages.splice(index, 1);
        },
        liveTime() {
            const timeStamp = dayjs().format('DD/MM/YYYY HH:mm:ss');
            return timeStamp;
        },
        formatTime(date) {
            let formatTime = date.slice(11, 16);
            return formatTime;
        },
        getLastMessage(index) {
            let lastMessage = this.contacts[index].messages.length - 1;
            return this.contacts[index].messages[lastMessage].message;
        },
        getLastDate(index) {
            let lastDate = this.contacts[index].messages.length - 1;
            return this.contacts[index].messages[lastDate].date;
        }
    },
    computed: {
        contactsSearched() {
            const filteredContacts = this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.inputSearch.trim().toLowerCase());
            });
            return filteredContacts;
        }
    },
    mounted() {
        console.log('INFO: Possibilità di usare lo speech to text su Chrome e Safari in italiano o su Edge in inglese.')
    }
});