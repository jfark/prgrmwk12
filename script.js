var signedBooksCollection = new Vue ({
	el: ".soManyBooks",
	data: {
		authorInput: "",
		titleInput: "",
		awkwardInput: true || false,
		inscriptionInput: "",
		friendInput: true || false,
		signedBook: [
	{
		author: "Oates, Joyce Carol",
		title: "The Lost Landscape: A Writer's Coming of Age",
		didIEmbarassMyself: true,
		inscription: '"For Jessa -Joyce Carol Oates"',
		writingGroupFriend: false,
	},
	{
		author: "Yanagihara, Hanya",
		title: "A Little Life",
		didIEmbarassMyself: false,
		inscription: '"in March 2016: To Jessa - with thanks for reading and keep writing - Hanya Yanagihara"',
		writingGroupFriend: false,
	},
	{
		author: "Gaitskill, Mary",
		title: "Bad Behavior",
		didIEmbarassMyself: true,
		inscription: '"For Jessa -Mary Gaitskill"',
		writingGroupFriend: false,
	},
	{
		author: "Clemmons, Zinzi",
		title: "What We Lose",
		didIEmbarassMyself: false,
		inscription: '"Jessa, Long time! Enjoy! 7-13-17 Zinzi Clemmons"',
		writingGroupFriend: true,
	},
	{
		author: "Sharma, Akhil",
		title: "A Life of Adventure and Delight",
		didIEmbarassMyself: true,
		inscription: '"Dear Jessa, All good wishes. I hope you and your work go well. Akhil Sharma"',
		writingGroupFriend: false,
	}
]
	},
	methods: {
		deleteBook: function(bookObject) {
			this.signedBook = this.signedBook.filter (function(book) {
				if (book.title !== bookObject.title) {
					return true;
				} else {
					return false;
				}
			})
		},
		addBook: function(){
			let newBook = {
				author: this.authorInput,
				title: this.titleInput,
				didIEmbarassMyself: this.awkwardInput,
				inscription: this.inscription,
				writingGroupFriend: this.friendInput,
			};
			this.signedBook.push(newBook);
			this.authorInput = this.titleInput = this.awkwardInput = this.inscription = this.friendInput = "";
		}
	}
})


