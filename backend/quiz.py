import os
import json

def read_file_names():
    arr = os.listdir('./pdfs_and_words')
    return json.dumps(arr)

def read_files(requested_subject):
    files = read_file_names()
    print(files)
    return 'test'