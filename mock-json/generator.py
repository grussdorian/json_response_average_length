import random
import datetime
path = '/home/hardik/Desktop/systemO2-mock-server-node/mock-json/mock_' 
line1 = '{\n'
line2 = '\t"header":{\n'
line5 = '\t},\n'
line6 = '"data":'
line8 = '}'
line7 = []
max_id = 200000
min_id = 100000
max = 96
max_contact=100
max_no_of_blank_slots=25
no_of_files = 100
for i in range(0,no_of_files):
    with open(path+str(i)+'.json','w',encoding='utf-8') as file:
        line3 = '\t\t"start time":'+ '"' + str(datetime.datetime.now()) + '"' + ',\n'
        line4 = '\t\t"transmitter_id":[' + str(random.randint(min_id,max_id)) + ',' + str(random.randint(min_id,max_id)) + ']\n'
        matrix = [[random.randint(min_id,max_id) for j in range(1, random.randint(2,max_contact) )] for i in range(max)]
        no_of_blank_slots = random.randint(0,max_no_of_blank_slots)
        random_indices = [random.randint(0,max-1) for d in range(random.randint(0,no_of_blank_slots)-1)]
        random_indices.sort()
        for i in random_indices:
            GString = "G" + str(i+1)
            matrix[i] =[str(GString)]
        line7 = str(matrix).replace("'",'"')+"\n"
        data = line1+line2+line3+line4+line5+line6+line7+line8
        file.write(data)