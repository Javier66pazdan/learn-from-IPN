import os
import json
from difflib import get_close_matches
import pdfReader
import questionGenerator

def return_json_response(message, status_code):
    return {
        "message": message
    }, status_code

def read_file_names():
    arr = os.listdir('./pdfs_and_words')
    #return json.dumps(arr)
    return arr

def read_files(requested_subject):
    files = read_file_names()
    searched_files = get_close_matches(requested_subject, files, 2, 0.4)
    return searched_files

def make_questions(fileText):
    return 'test'


def make_quiz(requested_subject):
    searched_files = read_files(requested_subject)
    if not searched_files:
        return return_json_response('Nie znaleziono żadnych danych na podstawie frazy wyszukiwania.', 400)
    
    questions = []

    for fileName in searched_files:
        fileContent = pdfReader.getTextFromFile('./pdfs_and_words/' + fileName)
        # method to make questions until it will reach specified amount of questions
        # make_questions(fileContent)
        readyQuestions = questionGenerator.generateDate(pdfReader.sliceSentence(fileContent), 5)
        readyQuestions += questionGenerator.generateName(pdfReader.sliceSentence(fileContent),5)
        for question in readyQuestions:
            questions.append(question)
        # filesContent.append(pdfReader.getTextFromFile('./pdfs_and_words/' + fileName))

    return questions