var app = new Vue({
    el: '#vue-app',
    data: {
        user: {
            name: 'Sonia',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        dateStamp: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        dateStamp: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        dateStamp: '10/01/2020 16:15:22',
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
                        dateStamp: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        dateStamp: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        dateStamp: '20/03/2020 16:35:00',
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
                        dateStamp: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        dateStamp: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        dateStamp: '28/03/2020 16:15:22',
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
                        dateStamp: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        dateStamp: '10/01/2020 15:50:00',
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
                        dateStamp: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        dateStamp: '10/01/2020 15:50:00',
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
                        dateStamp: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        dateStamp: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        dateStamp: '10/01/2020 15:51:00',
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
                        dateStamp: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        dateStamp: '10/01/2020 15:50:00',
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
                        dateStamp: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        dateStamp: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        dateStamp: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        contactSelected: 0,
        inputMessage: '',
        inputSearch: '',
        messageSelected: 0,
        infoBtn: false,
        isChatEmpty: false,
        isListening: false,
        emojiPanel: false,
        emoji: [
            '127853',
            '127906',
            '128039',
            '128152',
            '128285',
            '128512',
            '128514',
            '128525',
            '128557',
            '128545',
            '127880',
            '127881',
            '127752',
        ],
        reply: [ //Not in use with AI Chat Bot
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
                    dateStamp: this.liveTime(),
                    message: this.inputMessage,
                    status: 'sent'
                };

                this.contacts[this.contactSelected].messages.push(newSentMessage);
                this.inputMessage = '';

                this.isChatEmpty = false;

                //this.autoReply(); //Not in use with AI Chat Bot
            }
        },
        autoReply() {
            //Not in use with AI Chat Bot
            setTimeout(() => {
                let randomMessage = this.reply[this.randomNumber(0, this.reply.length - 1)].message;
                let newReceivedMessage = {
                    dateStamp: this.liveTime(),
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

                recognition.onstart = () => {
                    this.isListening = true;

                    console.log('Sto ascoltando...')
                }

                recognition.onspeechend = () => {
                    this.isListening = false;
                    recognition.stop();

                    console.log('Ho trascritto le tue parole!')
                }

                recognition.onresult = (event) => {
                    var transcript = event.results[0][0].transcript;
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
                return 'sent float-r';
            } else {
                return 'received float-l';
            }
        },
        deleteMessage(index) {
            if (this.contacts[this.contactSelected].messages.length == 1) {
                this.isChatEmpty = true;
            }   else {
                this.contacts[this.contactSelected].messages.splice(index, 1);
                this.infoBtn = false;
            }
        },
        liveTime() {
            const timeStamp = dayjs().format('DD/MM/YYYY HH:mm:ss');
            return timeStamp;
        },
        formatTime(dateStamp) {
            let formatTime = dateStamp.substring(11, 16);
            return formatTime;
        },
        getLastMessage(index) {
            let lastMessage = this.contacts[index].messages.length - 1;
            if (lastMessage == -1) {
                return '';
            } else {
                return this.contacts[index].messages[lastMessage].message;
            }
        },
        getLastDate(index) {
            let lastDate = this.contacts[index].messages.length - 1;
            if (lastDate == -1) {
                return '';
            } else {
                return this.contacts[index].messages[lastDate].dateStamp;
            }
        },
        whoIsInfo(index) {
            this.messageSelected = index;
            
            if (this.infoBtn == false) {
                this.infoBtn = true;
            } else {
                this.infoBtn = false;
            }
        },
        infoOut() {
            this.infoBtn = false;
        },
        emojiSelect(emoji) {
            console.log(emoji)
            this.inputMessage = this.inputMessage + String.fromCodePoint(emoji);
        },
        showEmoji() {
            if (this.emojiPanel == false) {
                this.emojiPanel = true;
            } else {
                this.emojiPanel = false;
            }
        },
        emojiOut() {
            this.emojiPanel = false
        },
        messageByOpenAI() {
            this.inputMessage.trim();
            if (!this.inputMessage == '' && this.inputMessage.trim().length > 0) {
                console.log('Messaggio ricevuto, sto pensando una risposta...')

                var prompt_text = this.inputMessage;
                var url = "https://api.openai.com/v1/engines/text-davinci-002/completions";

                var xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.open("POST", url);

                //IMPORTANT! The following "sk-N3wuP....."" is my demo API key, please use yours if you have to do many test. Get it for free at https://beta.openai.com/overview
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("Authorization", "Bearer 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");

                var data = `{
                    "prompt": "${prompt_text}",
                    "temperature": 0.7,
                    "max_tokens": 256,
                    "top_p": 1,
                    "frequency_penalty": 0.75,
                    "presence_penalty": 0
                }`;

                xhr.send(data);

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        let responseArray = xhr.response.choices;
                        let responseOpenAI = responseArray[0].text.trim();

                        let newReceivedMessage = {
                            dateStamp: this.liveTime(),
                            message: responseOpenAI,
                            status: 'received'
                        };
                        this.contacts[this.contactSelected].messages.push(newReceivedMessage);

                        console.log('Ti ho risposto!')
                    }
                }
            }
        }
    },
    computed: {
        contactsSearched() {
            const filteredContacts = this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.inputSearch.trim().toLowerCase());
            });
            return filteredContacts;
        },
        messageChat() {
            let filteredMessage = [];
            if (!this.isChatEmpty == true) {
                filteredMessage = [...this.contacts[this.contactSelected].messages]
                return filteredMessage;
            }
            this.contacts[this.contactSelected].messages.splice(0, 1);
            this.infoBtn = false;

            return filteredMessage;
        }
    },
    mounted() {
        console.log(`
            INFO: Speech to text ENG & ITA in Chrome & Safari, ENG in Edge. 
            INFO: Talk or write in english, auto-reply by "OpenAI Playground". 
        `);
    }
});



//0xbrax