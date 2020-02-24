# importing library 
import requests 
import random
import time
import json
# api-endpoint 
URL = "http://localhost:4200/save"


# defining a params dict for the parameters to be sent to the API 
#while 1:

while 1:

    t1 = random.randint(10,20)
    w1 = random.randint(1000,10000)

    t2 = random.randint(10,20)
    w2 = random.randint(1000,10000)

    t3 = random.randint(10,20)
    w3 = random.randint(1000,10000)

    t4 = random.randint(10,20)
    w4 = random.randint(1000,10000)

    PARAMS = [
        {  
        "plant_id" : 1,
        "temperature": t1,
        "wetness":w1
        },
        {
        "plant_id" : 2,
        "temperature": t2,
        "wetness":w2
        },
        {
        "plant_id" : 3,
        "temperature": t3,
        "wetness":w3
        },
        {
        "plant_id" : 4,
        "temperature": t4,
        "wetness":w4
        }
        ]

    # sending get request and saving the response as response object 
    r = requests.post(url = URL, json = PARAMS)

    # extracting data in json format 
    data = r.text

    print(data)

    time.sleep(1)
