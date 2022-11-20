import os
import json
<<<<<<< Updated upstream
=======
from difflib import get_close_matches
import random
import pdfReader
import questionGenerator
import csv

def return_json_response(message, status_code):
    return {
        "message": message
    }, status_code
>>>>>>> Stashed changes

def read_file_names():
    arr = os.listdir('./pdfs_and_words')
    return json.dumps(arr)

def read_files(requested_subject):
    files = read_file_names()
<<<<<<< Updated upstream
    print(files)
    return 'test'
=======
    searched_files = get_close_matches(requested_subject, files, 2, 0.4)
    return searched_files

def make_questions(fileText):
    return 'test'


def make_quiz(requested_subject,requested_level):
    searched_files = read_files(requested_subject)
    if not searched_files:
        return return_json_response('Nie znaleziono żadnych danych na podstawie frazy wyszukiwania.', 400)
    
    questions = []
    level = 0
    max_size = 0 

    if requested_level == 1:
        level = 100
        max_size = 5
    elif requested_level == 2:
        level = 50
        max_size = 10
    else:
        level = 5
        max_size = 20

    for fileName in searched_files:
        fileContent = pdfReader.getTextFromFile('./pdfs_and_words/' + fileName)
        # method to make questions until it will reach specified amount of questions
        # make_questions(fileContent)
        readyQuestions = questionGenerator.generateDate(pdfReader.sliceSentence(fileContent), level)
        readyQuestions += questionGenerator.generateName(pdfReader.sliceSentence(fileContent),level)
        rows=[]
        with open("banList.csv",'r',encoding='utf-8-sig') as csvfile:
                csvreader = csv.reader(csvfile)
                for row in csvreader:
                    rows.append(row[0].lower())
        for question in readyQuestions:
            for row in rows:
                if row not in question['question']:
                    print(question['question'])
                    questions.append(question)
        # filesContent.append(pdfReader.getTextFromFile('./pdfs_and_words/' + fileName))
    random.shuffle(questions)
    return questions[:max_size]
>>>>>>> Stashed changes
