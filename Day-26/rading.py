movies = [
    {
        "title":"Book1",
        "duration":2,
        "actors":['1','2','3']
    },
    {
        "title":"book2",
        "duration":4,
        "actors":['1','2','3']
    },
    {
        "title":"book3",
        "duration":5,
        "actors":['1','2','3']
    },
]

for i in movies:
    print(f"{i['title']}lasts for{i['duration']}minutes. Stars:{', '.join(i['actors'])}")