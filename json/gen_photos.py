import json
from slugify import slugify

JSON_FILE_IN = "./json/locations.json"

locations = {}

with open(JSON_FILE_IN, 'r', encoding="utf8") as infile:
    locations = json.load(infile)


for number, location in locations.items():
    image = f"https://ik.imagekit.io/maxberengautsites/maxberengaut_com/photos/{number}.jpg"
    data = {
        "image": image,
        "date": "December 14, 2021",
        "location": location
    }

    with open(f"./content/photos/{slugify(image)}.json", 'w') as outfile:
        json.dump(data, outfile, indent=2)