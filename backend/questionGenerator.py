import math
import random
import pdfReader
import csv
from difflib import get_close_matches

def generateDate(sentences,level):
    question = []
    for x in sentences:
        for y in x.split(" "):
            if y.isnumeric() and len(y) == 4:
                iteration=0
                answers = []
                answers.append(int(y))
                while(iteration < 3):
                     wrong = int(y)+math.trunc(random.random()*level)
                     if not wrong in answers:
                        iteration+= 1
                        answers.append(wrong)
                question.append(
                    {
                        "question":x.replace(y,"_________"),
                        "answer":int(y),
                        "answers": answers
                    })
    return question

<<<<<<< HEAD
=======
#TODO Losowe złe imiona i poziomy trudnosci
>>>>>>> 687f5720bb2cc6240f6fbe7a292c97c66a3ef71c
def generateName(sentences,level):
    rows=[]
    result=[]
    with open("imiona_polskie.csv",'r',encoding='utf-8-sig') as csvfile:
        csvreader = csv.reader(csvfile)
        for row in csvreader:
            rows.append(row[0].lower())
    for x in sentences:
        for y in x.split(" "):
            name = get_close_matches(y.lower(),rows, 1, 0.90)
            if len(name) != 0:
                answers = [y,rows[math.trunc(random.random()*50)].capitalize(),rows[math.trunc(random.random()*50)].capitalize(),rows[math.trunc(random.random()*50)].capitalize()]
                result.append( {
                        "question":x.replace(y,"_________"),
                        "answer":y,
                        "answers": answers
                    })
                break
                    
    return result
<<<<<<< HEAD
=======

>>>>>>> 687f5720bb2cc6240f6fbe7a292c97c66a3ef71c
#TODO Losowe złe wartosci i poziomy trudnosci
def generatePlace(sentences,level):
    rows=[]
    result=[]
    with open("places.csv",'r',encoding='utf-8-sig') as csvfile:
        csvreader = csv.reader(csvfile)
        for row in csvreader:
            rows.append(row[0].split(";")[2].lower())
    for x in sentences:
        for y in x.split(" "):
            name = get_close_matches(y.lower(),rows, 1, 0.80)
            if len(name) != 0:
                answers = [y,rows[math.trunc(random.random()*50)],math.trunc(random.random()*50),math.trunc(random.random()*50)]
                result.append( {
                        "question":x.replace(y,"_________"),
                        "answer":y,
                        "answers": answers
                    })
                break
<<<<<<< HEAD
    return result
=======
    return result

>>>>>>> 687f5720bb2cc6240f6fbe7a292c97c66a3ef71c
