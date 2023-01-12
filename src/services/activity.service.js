export async function getActivities() {
    return [
        {
            id: "1",
            title: "פגישה עם רועי ואופק",
            description: "קבעתי לה משהו שקשה לי לקרוא כי זה קטן...",
            time: "14:30 - 15:00"
        },
        {
            id: "2",
            title: "מידע",
            description: "שדגשדחגשדחגשךדגחשדלך",
            time: "18:15 - 00:00"
        },
        {
            id: "3",
            title: "מידע",
            description: "שדגשדחגשדחגשךדגחשדלך",
            time: "21:00 - 22:00"
        },
        {
            id: "4",
            title: "מידע",
            description: "שדגשדחגשדחגשךדגחשדלך",
            time: "14:30 - 15:00"
        }
    ];
}

export async function getActivityTypes() {
    return [
        {
            id: "1",
            img: "/static",
            text: "עמידה בזמנים"
        },
        {
            id: "2",
            img: "",
            text: "תקשורת תחת לחץ"
        },
        {
            id: "3",
            img: "",
            text: "ישיבה ממושכת"
        }
    ];
}
