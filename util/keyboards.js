module.exports = {
    start: {
        keyboard: [
            [
                { text: 'đ Found' },
                { text: 'âšī¸ Lost' },
            ],
            [
                { text: 'About' },
                { text: 'Subscribe' },
            ],
       
        ],
        resize_keyboard: true
    },
    cancel: {
        keyboard: [
            [
                { text: 'â Cancel' },
            ],
       
        ],
        resize_keyboard: true
    },
    // user: {
    //     keyboard: [
    //         [
    //             { text: 'đ Place order' },
    //         ],
    //     ],
    //     resize_keyboard: true
    // },
    // admin: {
    //     keyboard: [
    //         [
    //             { text: 'â Add product' },
    //         ],
    //         [
    //             { text: 'đ Live orders' },
    //             { text: 'đĻ Posted products' },
    //         ],
    //         [
    //             { text: 'đ¤ Users' },
    //             { text: 'â ī¸ Kill bot' },
    //         ],
    //         [
    //             { text: 'âĒ Back' }
    //         ]
    //     ],
    //     resize_keyboard: true
    // },
    requestPhone: {
        keyboard: [
            [
                { text: 'đ   Allow phone number', request_contact: true }
            ]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
    },
    // requestLocation: {
    //     keyboard: [
    //         [
    //             { text: 'đ    Allow location data', request_location: true }
    //         ]
    //     ],
    //     resize_keyboard: true,
    //     one_time_keyboard: true
    // },
    // confirmOrder: {
    //     keyboard: [
    //         [
    //             { text: 'â  Confirm order' }
    //         ]
    //     ],
    //     resize_keyboard: true,
    //     one_time_keyboard: true
    // },
    // order: {
    //     keyboard: [
    //         [
    //             { text: 'Call' },
    //             { text: 'Open location' }
    //         ]
    //     ],
    //     resize_keyboard: true
    // }
}