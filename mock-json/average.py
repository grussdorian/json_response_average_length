import requests
import time
import generator
time.sleep(2)
average = 0
header_length = 217
no_of_files = 100
for i in range(0,100):
    r = requests.post('http://127.0.0.1:3000/?authentication_token=password')
    length = int(r.headers['content-length'])
    average += length
average += header_length*no_of_files
average /= no_of_files
print(f"Average length of response is : {length}")
