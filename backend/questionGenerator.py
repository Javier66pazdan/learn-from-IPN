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
            name = get_close_matches(y.lower(),rows, 1, 0.85)
            if len(name) != 0:
                answers = [y,"Adaś","Mariusz","Tadeusz"]
                result.append( {
                        "question":x.replace(y,"_________"),
                        "answer":y,
                        "answers": answers
                    })
    print(result)
    return result