export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Prueba 6',
		imageUri: 'https://picsum.photos/200/300',
	}, {
		id: 'u2',
		name: 'Pedro',
		imageUri: 'https://i.picsum.photos/id/183/200/200.jpg?hmac=mfn5w11JTbXGqdQRlmRE-PRI5ZheVq8IKlC6Xt_0jto',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you, Pedro!',
		createdAt: '2021-30-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Prueba 6',
		},
	}, {
		id: 'm2',
		content: 'I am good, good',
		createdAt: '2021-30-03T14:53:00.000Z',
		user: {
			id: 'u2',
			name: 'Pedro',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2021-30-03T14:53:00.000Z',
		user: {
			id: 'u2',
			name: 'Pedro',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the stream now.',
		createdAt: '2021-30-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Prueba 6',
		},
	}, {
		id: 'm5',
		content: 'How is your uni going?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Prueba 6',
		},
	}, {
		id: 'm6',
		content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
		createdAt: '2021-30-03T14:53:00.000Z',
		user: {
			id: 'u2',
			name: 'Pedro',
		},
	}, {
		id: 'm7',
		content: 'React Native is more interesting. Cannot wait to go through all the material.',
		createdAt: '2021-30-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Prueba 6',
		},
	}]
}

