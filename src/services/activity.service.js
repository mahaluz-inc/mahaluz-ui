export async function getActivities() {
    return [
        {
            id: "1",
            title: "פגישה עם רועי ואופק",
            description: "קבעתי להיפגש עם רועי ואופק אצל רועי בבית :)",
            time: "14:00 - 14:30"
        },
        {
            id: "2",
            title: "זמן שיעורי בית",
            description: "לעשות את השיעורים במתמטיקה",
            time: "17:00 - 18:30"
        },
        {
            id: "3",
            title: "ארוחת ערב במסעדה",
            description: "ארוחת ערב כול המשפחה במסעדה בתל אביב",
            time: "19:00 - 20:30"
        },
        {
            id: "4",
            title: "התכוננות לשינה",
            description: "מקלחת, צחצוח שיניים, ולילה טוב",
            time: "21:00 - 21:15"
        }
    ];
}

export async function getActivityTypes() {
    return [
        {
            id: "1",
            img: "/static/imgs/timer.svg",
            text: "עמידה בזמנים"
        },
        {
            id: "2",
            img: "/static/imgs/2people.svg",
            text: "תקשורת תחת לחץ"
        },
        {
            id: "3",
            img: "/static/imgs/couch.svg",
            text: "ישיבה ממושכת"
        }
    ];
}
