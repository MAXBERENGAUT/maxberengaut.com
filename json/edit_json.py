import json

JSON_FILE_IN = "./json/songs.json"
JSON_FILE_OUT = "./json/songs2.json"

DATA_IN = {}

with open(JSON_FILE_IN, 'r') as infile:
    DATA_IN = json.load(infile)

''' MANIPULATE HERE '''

DATA_OUT = []

for k in DATA_IN:
    styles = k["styles"]
    del k["styles"]
    k["lyric"] = ""
    k["styles"] = styles

    DATA_OUT.append(k)


''' *************** '''

with open(JSON_FILE_OUT, 'w') as outfile:
    json.dump(DATA_OUT, outfile, indent=2)