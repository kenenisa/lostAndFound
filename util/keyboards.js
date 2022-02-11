module.exports = {
    start: {
        keyboard: [
            [
                { text: '🙂 Found' },
                { text: '☹️ Lost' },
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
                { text: '❌ Cancel' },
            ],
       
        ],
        resize_keyboard: true
    },
    // user: {
    //     keyboard: [
    //         [
    //             { text: '🛒 Place order' },
    //         ],
    //     ],
    //     resize_keyboard: true
    // },
    // admin: {
    //     keyboard: [
    //         [
    //             { text: '➕ Add product' },
    //         ],
    //         [
    //             { text: '🛒 Live orders' },
    //             { text: '📦 Posted products' },
    //         ],
    //         [
    //             { text: '👤 Users' },
    //             { text: '☠️ Kill bot' },
    //         ],
    //         [
    //             { text: '⏪ Back' }
    //         ]
    //     ],
    //     resize_keyboard: true
    // },
    requestPhone: {
        keyboard: [
            [
                { text: '📞   Allow phone number', request_contact: true }
            ]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
    },
    // requestLocation: {
    //     keyboard: [
    //         [
    //             { text: '📍    Allow location data', request_location: true }
    //         ]
    //     ],
    //     resize_keyboard: true,
    //     one_time_keyboard: true
    // },
    // confirmOrder: {
    //     keyboard: [
    //         [
    //             { text: '✅  Confirm order' }
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