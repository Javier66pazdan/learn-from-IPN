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
                if len(get_close_matches(x,question,2,0.8)) !=2 :
                    question.append(
                        {
                            "question":x.replace(y,"_________"),
                            "answer":int(y),
                            "answers": answers
                        })
    return question

#TODO Losowe złe imiona i poziomy trudnosci
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
                if len(get_close_matches(x,result,2,0.8)) !=2 :
                    result.append( {
                            "question":x.replace(y,"_________"),
                            "answer":y,
                            "answers": answers
                        })
                    break
                    
    return result

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
    return result

