import json

JSON_FILE_IN = "./json/songs.json"
JSON_FILE_OUT = "./json/songs2.json"

DATA_IN = {}

with open(JSON_FILE_IN, 'r', encoding="utf8") as infile:
    DATA_IN = json.load(infile)

''' MANIPULATE HERE '''

DATA_OUT = []

for k in DATA_IN:
    k["cover"] = k["rank"] + ".png"

    DATA_OUT.append({
        "rank": k["rank"],
        "cover": k["rank"] + ".png",
        "title": k["title"],
        "artist": k["artist"],
        "year": k["year"],
        "write_up": k["write_up"],
        "lyric": k["lyric"],
        "styles": k["styles"]
    })


''' *************** '''

with open(JSON_FILE_OUT, 'w') as outfile:
    json.dump(DATA_OUT, outfile, indent=2)